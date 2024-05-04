def binary_search(numbers = [], search_value)
  low = 0
  high = numbers.length

  begin 
    mid = (low + (high - low) / 2).floor
    value = numbers[mid]
    
    if value == search_value
      return mid
    elsif search_value > value
      low = mid + 1
    else 
      high = mid
    end
  end while (low < high)

  return false
end

numbers = [7, 13, 22, 35, 41, 57, 64, 78, 82, 95]

puts binary_search(numbers, 82)