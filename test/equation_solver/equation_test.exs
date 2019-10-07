defmodule EquationSolver.EquationTest do
  use ExUnit.Case
  doctest EquationSolver.Equation
  alias EquationSolver.Equation
  alias EquationSolver.Params
  alias EquationSolver.Solution


  test "solves infinite" do
    assert %Solution{ solution_type: :INFINITE_SET, solution: nil } = Equation.solve %Params{}
  end

  test "solves no root" do
    assert %Solution{ solution_type: :NO_ROOT, solution: nil } = Equation.solve %Params{ c: 1 }
  end

  test "solves linear" do
    assert %Solution{ equation_type: :linear, solution: -1.0 } = Equation.solve %Params{ b: 1, c: 1 }
  end

  test "solves quadratic" do
    assert %Solution{ equation_type: :quadratic } = Equation.solve %Params{ a: 1 }
  end

  test "solves quadratic with single root" do
    assert [ 0.0 ] = Equation.solve(%Params{ a: 1 }).solution.roots
  end

  test "solves quadratic with real roots" do
    assert [1.0, -1.0] = Equation.solve(%Params{ a: 1, c: -1 }).solution.roots
  end

  test "reports complex roots" do
    assert %Solution{ solution_type: :COMPLEX } = Equation.solve(%Params{ a: 1, c: 1 })
  end

  # Pattern-matching won't work correctly on the Complex
  test "solves quadratic with complex roots" do
    [ t_root1 | t_root2 ] = [ComplexNum.new(0, 1), ComplexNum.new(0, -1)]
    [ root1 | root2 ] = Equation.solve(%Params{ a: 1, c: 1 }).solution.roots
    assert t_root1 == root1
    assert t_root2 == root2
  end
end
