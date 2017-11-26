defmodule CatcastsWeb.PageController do
  use CatcastsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
