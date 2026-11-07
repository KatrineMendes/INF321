defmodule GuessingGame do
  def compare(secret_number, :no_guess) do
    #  the compare/2 function
      "Make a guess"
  end
  def compare(secret_number) do
    #  the compare/2 function
      "Make a guess"
  end
  def compare(secret_number, guess)
    when guess == secret_number, do: "Correct"
  def compare(secret_number, guess)
    when guess-1 == secret_number or guess+1 == secret_number, do: "So close"
  def compare(secret_number, guess)
    when guess > secret_number, do: "Too high"
  def compare(secret_number, guess)
    when guess < secret_number, do: "Too low"
  
end
