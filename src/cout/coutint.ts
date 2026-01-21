export function coutint(...$int: number[]): void {
  if (!$int.every(v => typeof v === "number")) {
    throw new TypeError(
      "coutint only accept number.\n" +
      "looking for string?\n" +
      "cout();"
    );
  }
  console.log(...$int);
}
