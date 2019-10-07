defmodule EquationSolver.Solution do
  @moduledoc """
    Provides a struct to report solution to a given equation.
  """
  @derive [Poison.Encoder]
  defstruct [:solution_type, :equation_type, :solution, :params]

  defmodule Quadratic do
    @derive [Poison.Encoder]
    defstruct [:roots, :discriminant]
  end
end