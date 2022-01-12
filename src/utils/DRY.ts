// DRY -> Don't repeat yourself!
// 这一章节主要讲了如何通过 ts 内置的一些工具来减少重复代码
// https://shimowendang.com/docs/JkwKpYc39VWpyq8h 《在 TS 中如何减少重复代码》


// demo1
interface f1 {
  name: string,
  age: number
}
// interface f2 {
//   name: string,
//   age: number,
//   school: string 
// }
  //这里可以通过 extends 关键字去解决
interface f2 extends f1 {
  school: string
}

//demo2
interface f3 {
  name: string,
  age: number,
  school: string
}
// interface f4 {
//   name: string,
//   age: number
// }
  // 当只是缺少了部分属性的时候可以通过 pick 方法
type f4 = Pick<f1, 'name' | 'age'>;


