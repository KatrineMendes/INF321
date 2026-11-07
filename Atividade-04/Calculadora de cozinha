defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    # get_volume/1 function
    {_und, volume} = volume_pair
    volume
  end
  def to_milliliter(volume_pair) do
    # to_milliliter/1 functions
    {und, volume} = volume_pair
    case und do
      :milliliter -> {:milliliter, volume}
      :cup -> {:milliliter, volume * 240}
      :fluid_ounce -> {:milliliter, volume * 30}
      :teaspoon -> {:milliliter, volume * 5}
      :tablespoon -> {:milliliter, volume * 15}
    end
  
  end
  def from_milliliter(volume_pair, unit) do
    # from_milliliter/2 functions
    {_und, volume} = volume_pair
    case unit do
      :milliliter-> {:milliliter, volume}
      :cup -> {:cup, volume / 240}
      :fluid_ounce -> {:fluid_ounce, volume/30}
      :teaspoon -> {:teaspoon, volume/5}
      :tablespoon -> {:tablespoon, volume/15}
    end
  end
  def convert(volume_pair, unit) do
    #  the convert/2 function
    ml = to_milliliter(volume_pair)
    from_milliliter(ml, unit)
  end
end
