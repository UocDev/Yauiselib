export function cout(...$text: string[]): void {
  if (!$text.every($text => typeof $text === "string")) {
    throw new TypeError("cout only accept string");
  }
  console.log(...$text);
}


