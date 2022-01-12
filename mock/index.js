import Mock from 'mockjs'

/*
   mockjs 的一些语法规则 https://github.com/nuysoft/Mock/wiki/Syntax-Specification
  'name|min-max': value
  'name|count': value
  'name|min-max.dmin-dmax': value
  'name|min-max.dcount': value
  'name|count.dmin-dmax': value
  'name|count.dcount': value
  'name|+step': value
*/
 
const Random = Mock.Random;
const produceNewsData = function () {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newsList
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节

