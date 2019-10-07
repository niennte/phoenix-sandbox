defmodule EquationSolverWeb.PageControllerTest do
  use EquationSolverWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Phoenix Gigalixir Sandbox"
  end
end
