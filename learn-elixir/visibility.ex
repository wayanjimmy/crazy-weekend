defmodule TestPrivate do
  def double(a, b) do
    sum(a, b)
  end
  defp sum(a, b) do
    a + b
  end
end
