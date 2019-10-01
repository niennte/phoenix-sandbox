defmodule EquationSolverWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  defmodule Params do
    # get Poison.Encoder protocol fall back on any implementation when called on the struct
    @derive [Poison.Encoder]

    # Structs
    # - are extensions built on top of maps that provide compile-time checks and default values.
    # - take the name of the module they’re defined in
    defstruct [:a, :b, :c]
  end

  def handle_in("solve_request", %{"params" => body}, socket) do
    params = Poison.decode!(body, as: %Params{})

    equation =
      to_string(params.a) <>
        " * x pow 2 + " <>
        to_string(params.b) <>
        " * x + " <>
        to_string(params.c) <> " = 0"

    response =
      Poison.encode!(%{
        "params" => params,
        "equation" => equation,
        "solvable" => true,
        "type" => "quadratic",
        "solutions" => [-5.196152422706632, 5.196152422706632]
      })

    push(socket, "solution", %{body: response})
    {:noreply, socket}
  end
end