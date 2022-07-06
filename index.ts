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


console.log(constants.home)