function combos(num) {
  const result = [];
  const stack = [];
  let currentCombo = [];
  let start = 1;
  let remaining = num;

  while (stack.length > 0 || start <= remaining) {

    if (remaining === 0) {
      result.push([...currentCombo]);
      remaining += currentCombo.pop();
      start = stack.pop() + 1;

    } else if (start <= remaining) {
      currentCombo.push(start);
      stack.push(start);
      remaining -= start;
      start++;
      
    } else {
      remaining += currentCombo.pop();
      start = stack.pop() + 1;
    }
  }

  return result;
}

console.log(combos(3));
console.log(combos(10));