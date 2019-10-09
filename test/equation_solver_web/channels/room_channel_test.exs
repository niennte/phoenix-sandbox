defmodule EquationSolverWeb.RoomChannelTest do
  use EquationSolverWeb.ChannelCase, async: true
  alias EquationSolverWeb.RoomChannel
  alias EquationSolver.Solution

  setup do
    {:ok, _, socket} = socket("", %{})
       |> subscribe_and_join(RoomChannel, "room:lobby")
    {:ok, socket: socket}
  end

  test "anonimous user able to join room:lobby", %{socket: socket} do
    assert socket.joined
  end

  test "solve_quadratic replies with status ok", %{socket: socket} do
    ref = push(socket, "solve_quadratic", %{"params" => "{}"})
    assert_reply ref, :ok
  end

  test "solve_quadratic triggers a solution push", %{socket: socket} do
    push(socket, "solve_quadratic", %{"params" => "{}"})
    assert_push "solution", _
  end

  test "an encoded solution pushed while solve_quadratic handled", %{socket: socket} do
    push(socket, "solve_quadratic", %{"params" => Poison.encode!%{a: 1}})
    assert_push "solution", params
    assert %Solution{ equation_type: "quadratic" } = Poison.decode!(params.body, as: %Solution{})
  end

end
