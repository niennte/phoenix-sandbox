defmodule EquationSolverWeb.PageController do
  use EquationSolverWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
