defmodule BirdCount do
  def today(list) do
   List.first(list)
  end
  def increment_day_count(list) do
    # Please implement the increment_day_count/1 function
    if list == [] do
      [1]
    else
      [today_count | rest] = list
      [today_count + 1| rest]
    end
  end
  def has_day_without_birds?(list) do
    # Please implement the has_day_without_birds?/1 function
    0 in list
  end
  def total(list) do
    # Please implement the total/1 function
    Enum.sum(list)
  end
  def busy_days(list) do
    # Please implement the busy_days/1 function
    Enum.count(list, fn count -> count >=5 end)
  end
end
