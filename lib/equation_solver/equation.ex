defmodule EquationSolver.Equation do
  @moduledoc """
    Provides methods to solve quadratic and likear equations.
  """

  @doc """
    Solve the equation based on given params.
  """
  def solve(params) do
    %{
      "params" => params,
      "equation" => equation(params),
      "solvable" => true,
      "type" => "quadratic",
      "solutions" => solutions()
    }
  end

  ## Stubs

  defp equation(params) do
      to_string(params.a) <>
      " * x power of 2 + " <>
      to_string(params.b) <>
      " * x + " <>
      to_string(params.c) <> " = 0"
  end

  defp solutions do
    [-5.196152422706632, 0]
  end
end