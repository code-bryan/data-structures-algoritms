import math

def binary_search(numbers, search_value):
  low = 0
  high = len(numbers)

  while True:
    mid = math.floor(low + (high - low) / 2)
    value = numbers[mid]

    if value == search_value:
      return mid
    elif search_value > value:
      low = mid + 1
    else:
      high = mid

    if low > high:
      break
    
  return False



numbers = [7, 13, 22, 35, 41, 57, 64, 78, 82, 95]

print(binary_search(numbers, 95))