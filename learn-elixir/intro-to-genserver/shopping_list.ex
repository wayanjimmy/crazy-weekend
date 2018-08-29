defmodule ShoppingList do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, [])
  end

  def add(pid, item) do
    GenServer.cast(pid, item) 
  end

  def remove(pid, item) do
    GenServer.cast(pid, {:remove, item})
  end

  def view(pid) do
    GenServer.call(pid, :view)
  end

  def handle_cast({:remove, item}, list) do
    updated_list = Enum.reject(list, fn(i) -> i == item end)
    {:noreply, updated_list}
  end

  def handle_cast(item, list) do
    updated_list = [item|list]
    {:noreply, updated_list}
  end

  def handle_call(:view, _from, list) do
    {:reply, list, list}
  end

  def init(list) do
    {:ok, list}
  end
end

