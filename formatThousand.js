function formatThousand(num) {
  const numString = num.toString();
  let formattedNum = '';
  let count = 0;

  for (let i = numString.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      formattedNum = ',' + formattedNum;
    }
    formattedNum = numString[i] + formattedNum;
    count++;
  }

  return formattedNum;
}
