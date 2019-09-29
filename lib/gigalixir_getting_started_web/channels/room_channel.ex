defmodule GigalixirGettingStartedWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end
  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  defmodule Equation do
    @derive [Poison.Encoder]

    # Structs
    # - are extensions built on top of maps that provide compile-time checks and default values.
    # - take the name of the module they’re defined in
    defstruct [:a, :b, :c]
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    params = Poison.decode!(body, as: %Equation{})
    equation = to_string(params.a) <>
               " * x pow 2 + " <>
               to_string(params.b) <>
               " * x + " <>
               to_string(params.c) <> " = 0"

    response = Poison.encode!(%{
      "params" => params,
      "equation" => equation,
      "solvable" => true,
      "type" => "quadratic",
      "solutions" => [-5.196152422706632, 5.196152422706632]
    })
    push(socket, "respond", %{body: response})
    {:noreply, socket}
  end
end