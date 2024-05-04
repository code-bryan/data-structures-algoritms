function binarySearch(list: number[], searchValue: number): number | false {
  let low = 0;
  let high = list.length;

  do {
    let mid = Math.floor(low + (high - low) / 2);
    let value = list[mid];

    if (value === searchValue) return mid;
    if (searchValue > value) low = mid + 1;
    else high = mid;
    
  } while (low < high);

  return false;
}

const list = [7, 13, 22, 35, 41, 57, 64, 78, 82, 95]

console.log(binarySearch(list, 64));