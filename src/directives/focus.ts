// 自定义聚焦文本框指令

export const focus = {
  mounted(el:HTMLElement) {
    // el 指向的是在单文件组件中绑定 v-xxx指令的 dom 节点
    el.focus();
    console.log(el);
  },  
}