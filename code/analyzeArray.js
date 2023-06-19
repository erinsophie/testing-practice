function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

function getAverage(arr) {
  const sum = arr.reduce((acc, item) => acc + item);
  return sum / arr.length;
}

export default analyzeArray;
