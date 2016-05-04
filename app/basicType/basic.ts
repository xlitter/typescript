let decimal: number = 6;
console.log('decimal', decimal);

let list: number[] = [1, 2, 3];

console.log('list', list);

let list2: Array<number> = [1, 2, 3];
console.log('list2', list2);

enum Color { Red, Green, Blue };

let c: Color = Color.Blue;

let d: string = Color[2];

console.log('Color  c', c, 'd', d);

enum Color2 { Red = 2, Green = 5, Blue = 7 }

console.log('color2', Color2[2], 'color3', Color2[3], 'color7', Color2[7]);
console.log('Color.Red', Color2.Red, 'Color.Blue', Color2.Blue);


