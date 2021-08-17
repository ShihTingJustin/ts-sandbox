let greet = 'Hello TypeScript'
console.log(greet)

let occupation: string = 'web developer'
let height: number = 170
const person: {name: string; age: number, occupation?: string} = {
  name: 'Justin',
  age: 29,
}

// string in array
const devices: string[] = ['iPhone', 'iPad', 'iMac']

// number in array
const luckyNumber: number[] = [722, 63, 55, 43, 32]
const luckyNumber_2: Array<number> = [1, 3, 5]

// types in array
const luckyItem: (string | number)[] = [722, 63, 55, 'iPhone', 'iMac']

// function
const add = (x: number, y:number): number => {
  return x + y
}
console.log(add(3, 5))

// destructuring with function
const add_2 = ({x, y}: {x: number; y: number}): number => {
  return x + y
}
console.log(add_2({ x: 3, y: 5 }))

// function without return
const add_3 = (x: number, y: number): void => {
  console.log(x + y);
};

// function with error handling
const add_4 = (x: number, y: number): never => {
  throw new Error('This is never')
}

// literal type
let job: 'programmer'
job = 'programmer'

let brand: 'apple' | 'samsung' | 'sony'
brand = 'apple'

// type alias
const book1: {
  name: string;
  price: number;
} = {
  name: 'Learn TypeScript',
  price: 300,
};

const book2: {
  name: string;
  price: number;
} = {
  name: 'Learn React from Hooks',
  price: 320,
};

type Book = {
  name: string;
  price: number;
}

const book3: Book = {
  name: 'Learn TypeScript',
  price: 300,
}

// union
type Book_2 = {
  author: string;
  publishedAt: string;
}

type Device = {
  brand: string;
  releasedAt: string;
}

type Product = Book_2 | Device

// example
const book_4: Product = {
  author: 'Justin',
  publishedAt: '20200831',
};


// intersection
type Software = {
  platform: string;
  releasedAt: string;
};

type Hardware = {
  RAM: string;
  CPU: string;
};

type MobilePhone = Software & Hardware

const iphone11: MobilePhone = {
  platform: 'ios',
  releasedAt: '20190919',
  RAM: '4GB',
  CPU: 'A13',
};

interface Hardware_interface {
  RAM: string;
  CPU: string;
}

const hardware: Hardware_interface = {
  RAM: '4GB',
  CPU: 'A13'
}

interface Software_interface {
  platform: string;
  releasedAt: string;
}

interface MobilePhone_2 extends Software_interface, Hardware_interface {
  price: number;
  brand: string;
}

const iphone12: MobilePhone = {
  platform: 'ios',
  releasedAt: '20190919',
  RAM: '4GB',
  CPU: 'A13',
};


console.log(occupation, height)