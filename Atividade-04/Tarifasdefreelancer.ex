defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    # daily_rate/1 function
    hourly_rate * 8.0
  end
  def apply_discount(before_discount, discount) do
    # apply_discount/2 function
    before_discount * (1 - discount/100)
  end
  def monthly_rate(hourly_rate, discount) do
    # monthly_rate/2 function
    total_rate = 22 * daily_rate(hourly_rate)
    discounted_rate = apply_discount(total_rate, discount)
    trunc(Float.ceil(discounted_rate))
  end
  def days_in_budget(budget, hourly_rate, discount) do
    # days_in_budget/3 function
    monthly = monthly_rate(hourly_rate, discount)
    daily = monthly/22
    Float.floor(budget/daily, 1)
  end
end
