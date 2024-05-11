const calculateBonus = (a, b) => {
  if (
    (typeof a === "number" || (typeof a === "string" && !isNaN(Number(a)))) &&
    (typeof b === "number" || (typeof b === "string" && !isNaN(Number(b))))
  ) {
    const numA = Number(a);
    const numB = Number(b);
    const sum = numA + numB;
    return sum > 50 ? 50 : sum;
  }
  return undefined;
};

module.exports = calculateBonus;
