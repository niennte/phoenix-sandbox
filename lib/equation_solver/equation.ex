defmodule EquationSolver.Equation do
  @moduledoc """
    Provides methods to solve quadratic and likear equations.
  """
  alias EquationSolver.Params

  defmodule Solution do
    @derive [Poison.Encoder]
    defstruct [:solution_type, :equation_type, :solution, :params]

    defmodule Quadratic do
      @derive [Poison.Encoder]
      defstruct [:roots, :discriminant]
    end
  end

  @spec solve(%Params{}) :: %Solution{}
  @doc """
    Solve the equation based on given params.
  """
  def solve(%{a: 0, b: 0, c: 0}) do
    %Solution{equation_type: :linear, solution_type: :INFINITE_SET, params: %Params{}}
  end

  def solve(%{a: 0, b: 0, c: c}) do
    %Solution{equation_type: :linear, solution_type: :NO_ROOT, params: %Params{c: c }}
  end

  def solve(%{a: 0, b: b, c: c}) do
    %Solution{equation_type: :linear, solution_type: :REAL, solution: -c / b, params: %Params{b: b, c: c }}
  end

  def solve(%{a: a, b: b, c: c}) do
    discriminant = :math.pow(b, 2) - 4 * a * c

    %Solution{
      params: %Params{a: a, b: b, c: c },
      equation_type: :quadratic,
      solution_type: cond do
        discriminant < 0 -> :COMPLEX
        discriminant >= 0 -> :REAL
      end,
      solution: cond do
        discriminant == 0 ->
          %Solution.Quadratic{discriminant: discriminant, roots: [ (-b / 2 * a)  ]}

        discriminant < 0 ->
          real = -b / (2 * a)
          imaginary = (abs(discriminant) |> :math.sqrt()) / (2 * a)
          root1 = ComplexNum.new(real, imaginary)
          root2 = ComplexNum.new(real, -imaginary)
          %Solution.Quadratic{discriminant: discriminant, roots: [root1, root2]}

        discriminant > 0 ->
          %Solution.Quadratic{
            discriminant: discriminant,
            roots: [
              (-b + :math.sqrt(discriminant)) / (2 * a),
              (-b - :math.sqrt(discriminant)) / (2 * a)
            ]
          }
      end
    }
  end

  def hello do
    :world
  end

end