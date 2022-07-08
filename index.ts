// 数据类型标注
const user: string = 'linbudu'
const age: number = 24
const male: boolean = false
const undef: undefined = undefined
const nul: null = null
const obj: object = { user, age, male }
const bigintVar1: bigint = 9007199254740991n
const bigintVar2: bigint = BigInt(9007199254740991)
const symbolVar: symbol = Symbol('unique')
const arr1: string[] = []
const arr2: Array<string> = []

interface IDescription {
  readonly name: string;
  age: number;
  male?: boolean;
  func?: Function
}

const obj1: IDescription = {
  name: 'cwang',
  age: 100,
  male: true,
}

interface Res {
  code: 10000 | 10001 | 50000;
  status: 'sucess' | 'failure';
  date: any;
}

// 枚举
enum constants {
  home = 'home',
  seting = 'seting',
}

// 常量枚举
const enum Items { }


const foo: (name: string) => number = function (name) {
  return name.length
}

// 使用类型别名将函数声明抽离出来
type FuncFoo = (name: string) => number

const foo1: FuncFoo = (name) => {
  return name.length
}

interface FuncFooStruct {
  (name:string): number
}

// 在函数逻辑中注入可选参数默认值
function foo2(name: string, age?:number): number { 
  const inputAge = age
  return name.length + inputAge
}

// 直接为可选参数声明默认值
function foo3(name: string, age: number = 18): number {
  const inputAge = age
  return name.length + inputAge
}

// 重载

// function func(foo: number, bar?: boolean): string | number { 
//   if (bar) {
//     return String(foo)
//   } else { 
//     return foo * 599
//   }
// }

// 重载优化（函数重载签名）

function func(foo: number, bar: true): string
function func(foo: number, bar?: false): number
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else { 
    return foo * 599
  }
}


class Foo {
  prop: string

  constructor(inputProp: string) {
    this.prop = inputProp
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  get propA(): string {
    return `${this.prop} + A`
  }

  set propA(value: string) {
    this.propA = `${value} + A`
  }
}
