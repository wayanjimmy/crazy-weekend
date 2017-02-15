defmodule Geometry do 
  def rectangle_area(a, b) do
    a * b
  end
  def square_area(a) do
    rectangle_area(a, a)
  end
end
