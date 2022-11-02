export const declOfNum = (n: number, string: string[]) => {
  n = Math.abs(n) % 100
  const n1 = n % 10
  if (n > 10 && n < 20) {
    return string[2]
  }
  if (n1 > 1 && n1 < 5) {
    return string[1]
  }
  if (n1 === 1) {
    return string[0]
  }
  return string[2]
}
