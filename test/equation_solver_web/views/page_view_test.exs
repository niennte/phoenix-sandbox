defmodule EquationSolverWeb.PageViewTest do
  use EquationSolverWeb.ConnCase, async: true

  test "React container is rendered", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<div id=\"app-root\"></div>"
  end
end
