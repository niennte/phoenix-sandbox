defmodule EquationSolver.Params do
  @moduledoc """
    Provides a struct to decode quadratic equation params, and instructs the Encoder to use its any protocol. Might also do validation at some point.
  """
  @derive [Poison.Encoder]
  defstruct [a: 0, b: 0, c: 0]
end