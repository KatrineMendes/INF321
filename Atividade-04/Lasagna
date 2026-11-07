defmodule Lasagna do
  # the 'expected_minutes_in_oven/0' function
  def expected_minutes_in_oven do
   40
  end
  #  the 'remaining_minutes_in_oven/1' function
  def remaining_minutes_in_oven(minutes) do
    expected_minutes_in_oven() - minutes
  end
  #  the 'preparation_time_in_minutes/1' function
  def preparation_time_in_minutes(camadas) do
    camadas * 2
  end
  #  the 'total_time_in_minutes/2' function
  def total_time_in_minutes(camadas, minutes) do
    preparation_time_in_minutes(camadas) + minutes
  end
  #  the 'alarm/0' function
  def alarm() do
    "Ding!"
  end
  
end
