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

// 继承、实现、抽象类

class Base {
  print() { }
} // 基类
class Derived extends Base {
  override print() {
    super.print()
  }
} // 派生类


// 抽象类
abstract class AbsFoo { 
  abstract absProp: string
  abstract get absGetter(): string
  abstract absMethod(name: string): string
}

class Foo2 implements AbsFoo {
  absProp: string = ''

  get absGetter() {
    return ''
  }

  absMethod(name: string) {
    return name
  }
}


// 防止AnyScript
// 如果是类型不兼容报错导致你使用 any，考虑用类型断言替代，我们下面就会开始介绍类型断言的作用。
// 如果是类型太复杂导致你不想全部声明而使用 any，考虑将这一处的类型去断言为你需要的最简类型。
// 如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
// 如果你是想表达一个未知类型，更合理的方式是使用 unknown。

let unknownVar: unknown = 'cwang'
unknownVar = false
// const var1: string = unknownVar // Error

// 类型别名
type UnionWithNever = 'cang' | 599 | true | void | never;     

// 类型断言：在ts类型分析不正确或者不符合预期时
const duanyan: string | number = '123'
// console.log(duanyan as string)

// 类型别名
type A = string;

// 抽离一组联合类型
type StatusCode = 200 | 301 | 400 | 500 | 502
type PossibleDataTypes = string | number | (() => unknown);

const code:StatusCode = 502

// 抽离一个函数类型
type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => {};

type Factory<T> = T | number | string;

const foo4: Factory<boolean> = true;

type FactoryWithBool = Factory<boolean>;

const foo5: FactoryWithBool = true;

type MaybeNull<T> = T | null;

function process2(input: MaybeNull<{handle: () => {}}>) {
  input?.handle();
}

// 交叉类型

interface NameStruct {
  name: string
}

interface AgeStruct {
  age: number
}

type PorfileStruct = NameStruct & AgeStruct

const profile: PorfileStruct = {
  name: 'cwang',
  age: 18
}

// typeof

// typeof profile

function isString(input: unknown): boolean {
  return typeof input === 'string'
}

// 类型控制流分析做不到跨函数上下文来进行类型的信息收集
// 实际上，将判断逻辑封装起来提取到函数外部进行复用非常常见。
// 为了解决这一类型控制流分析的能力不足， TypeScript 引入了 is 关键字来显式地提供类型信息
