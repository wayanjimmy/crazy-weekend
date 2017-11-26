defmodule CountingDuplicates do
  def count(str) do
    str
      |> String.downcase
      |> String.split("")
      |> remove_empty_string
      |> Enum.sort
      |> Enum.dedup
      |> Enum.map(fn(x) -> count_repeat(str, x) end)
      |> Enum.filter(fn(x) -> x > 1 end)
      |> Enum.count
  end

  def count_repeat(str, c) do
    str
      |> String.downcase
      |> String.split("")
      |> remove_empty_string
      |> Enum.filter(fn(x) -> String.equivalent?(x, c) end)
      |> Enum.count
  end

  def remove_empty_string(str) do
    Enum.reject(str, fn(x) -> String.equivalent?(x, "") end)
  end
end
