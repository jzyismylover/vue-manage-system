// 自定义聚焦文本框指令 https://v3.cn.vuejs.org/guide/custom-directive.html#%E7%AE%80%E4%BB%8B

export const focus = {
  // 这只是其中一个指令钩子
  mounted(el:HTMLElement) {
    // el 指向的是在单文件组件中绑定 v-xxx指令的 dom 节点
    el.focus();
    console.log(el);
  },  
}