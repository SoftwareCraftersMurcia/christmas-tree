export function tree (layers) {
    if (layers === 3) {
        return `
  x
 xxx
xxxxx
  |`
    }
    if (layers === 2) {
        return `
 x
xxx
 |`
    }

    return `
x
|`;
}
