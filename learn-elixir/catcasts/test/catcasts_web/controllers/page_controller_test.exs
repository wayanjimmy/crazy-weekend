defmodule CatcastsWeb.PageControllerTest do
  use CatcastsWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Welcome to Catcasts!"
  end
end
