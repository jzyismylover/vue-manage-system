export function tsLearning() {
  //Partial的使用----------------------------------------------------
  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo1: Todo = {
    title: "organize desk",
    description: "clear clutter",
  };

  const todo2 = updateTodo(todo1, {
    // 本来 Todo 接口类型的变量需要传递 title 和 description
    // 但是现在两个属性都不必要传
    description: "throw out trash",
  });
  console.log(todo2);


  //泛型条件类型---------------------------------------------------
  interface Dictionary<T = any> {
    [key: string]: T;
  }
  type StrDict = Dictionary<string>;

  // 可以这么理解：如果 T 能够被赋值给 Dictionary<V> 这个类型
  // 那么 V 经过编译器推断就可以推断为 T中对应的类型
  type DictMember<T> = T extends Dictionary<infer V> ? V : never;
  type StrDictMember = DictMember<StrDict>; // string

  // tuple[string, number]转换为 <string|number>(前置知识元组可以转化为数组)
  type Tuple<T> = T extends Array<infer U> ? U : T;
  type Str = Tuple<[string, number]>;

  // union 转 intersection 如：T1 | T2 -> T1 & T2(难度比较大)



  // Exclude 和 Record 的用法---------------------------------------
  // Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
  // Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。



  // pick api使用-------------------------------------------------
  // 挑选出类或者接口中的某些属性
  interface Todo3 {
    name: string;
    age: number;
    sex: string;
  }
  // 这里其实涉及到了 keyof 的一些用法 http://www.semlinker.com/ts-keyof/
  type forPick = Pick<Todo3, "name" | "age">;
  type A = {
    [x: string]: string;
  }; // keyof ->string | number 为什么结果是这个呢？因为 JS 中其实只有字符串类型的索引类型，
  //Number 也会被转为 String，这在语法上是支持的。但是反过来 x:number 的时候是不成立的

  type a = {
    name: string,
    age: number
  }
  // type P3 = A['a' | 'b'];




  // 类型保护 instanceof 关键字
  class Person { }
  class Student extends Person { }
  console.log(Person.prototype);
  console.log(Student.prototype);

  // 源对象会覆盖目标对象重名属性
  let obj1 = { a: 'jzy' };
  let obj2 = { a: 'jjj', b: 20 };
  console.log(Object.assign(obj1, obj2));


  //———————————————————————————————————————————————————————————————————
  // setOption -> 选择某些属性变成可选属性
  // 如何解决一些必选项的输出
  type SetOptional<T, K extends keyof T> = {
    [U in keyof T]?: T[U]
  }

  type Foo = {
    a: number;
    b: string;
    c: boolean;
  }

  // 测试用例
  type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
  const test: SomeOptional = {

  }


}