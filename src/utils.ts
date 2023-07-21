// ****  个人工具函数测试 ****

// const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
// const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
// const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
// const isNumber = (val: any): val is number => typeof val === 'number'
// const isString = (val: unknown): val is string => typeof val === 'string'
// const isObject = (val: any): val is object => toString(val) === '[object Object]'
// const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
// const isNull = (val: any): val is null => toString(val) === '[object Null]'
// const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
// const isDate = (val: any): val is Date => toString(val) === '[object Date]'

import { isDef, 
  isBoolean,
  isFunction,
  isNumber,
  isString,
  isObject,
  isUndefined,
  isNull,
  isRegExp,
  isDate 
} from '@charleewa/utils'

const dics: any = {
  a: undefined,
  b: 'charleewa',
  c: () => {},
  d: 123,
  e: 'string',
  f: {},
  g: undefined,
  h: null,
  i: new RegExp('ab+c'),
  j: new Date()
}

console.log(isDef(dics.a))
console.log(isBoolean(dics.b))
console.log(isFunction(dics.c))
console.log(isNumber(dics.d))
console.log(isString(dics.e))
console.log(isObject(dics.f))
console.log(isUndefined(dics.g))
console.log(isNull(dics.h))
console.log(isRegExp(dics.i))
console.log(isDate(dics.j))