defmodule EquationSolverWeb.LayoutViewTest do
  use EquationSolverWeb.ConnCase, async: true

  test "CSS is loaded", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<link rel=\"stylesheet\" href=\"/css/app.css\">"
  end

  test "JS is loaded", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "<script src=\"/js/app.js\"></script>"
  end

end
