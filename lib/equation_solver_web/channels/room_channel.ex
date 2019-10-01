defmodule EquationSolverWeb.RoomChannel do
  use Phoenix.Channel
  alias EquationSolver.Params
  alias EquationSolver.Equation

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  @doc """
  Parse incoming params and reply with solution.
  """
  def handle_in("solve_request", %{"params" => body}, socket) do
    response = Poison.decode!(body, as: %Params{}) |> Equation.solve |> Poison.encode!
    push(socket, "solution", %{body: response})
    {:noreply, socket}
  end
end
