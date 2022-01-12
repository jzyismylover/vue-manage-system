<template>
  <div>
    <ul class="u-list">
      <a href="#" class="l-list" v-for="(item, index) in activeLists" :key="index">
        {{ item }}
      </a>
    </ul>
  </div>
</template>

<script lang="ts">
// 通常来说模糊匹配不是问题
// 最大的问题是如何进行防抖处理
// 当你停止多少秒后我才进行一个申请服务器处理
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "SearchList",
  props: {
    searchMsg: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    const List = [
      "前端实现输入框模糊搜索",
      "abcdefghijkasdasdadsa",
      "前端实现输入框模糊搜索",
      "abcdefghijkasdasdadsa",
      "前端实现输入框模糊搜索",
    ];

    // 模糊匹配的逻辑函数写在这里
    const manageMatch = (list: string[]) => {
      let times = 0;
      const l = list.filter((item) => {
        if (times >= 8) return false;
        if (item.indexOf(props.searchMsg) !== -1) {
          ++times;
          return true;
        } else {
          return false;
        }
      });
      return l;
    };

    const activeLists = ref<string[]>([]);
    watchEffect(() => {
      console.log(props.searchMsg);
      const list = List.slice();
      activeLists.value = manageMatch(list);  
    });

    return {
      List,
      activeLists,
    };
  },
});
</script>

<style scoped>
.u-list {
  display: flex;
  flex-direction: column;
}

/**设置 li列表 */
.l-list {
  padding: 15px;
}
.l-list:hover {
  background: grey;
}
</style>
