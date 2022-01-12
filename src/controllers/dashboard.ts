import { reactive } from 'vue'

export function useforDashboard() {

  const todoList = reactive([
    {
      title: "今天要修复100个bug",
      status: false,
    },
    {
      title: "今天要修复100个bug",
      status: false,
    },
    {
      title: "今天要写100行代码加几个bug吧",
      status: false,
    },
    {
      title: "今天要修复100个bug",
      status: false,
    },
    {
      title: "今天要修复100个bug",
      status: true,
    },
    {
      title: "今天要写100行代码加几个bug吧",
      status: true,
    },
  ]);

  return {
    todoList
  }
}
