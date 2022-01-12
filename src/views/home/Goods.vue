<template>
  <div>
    goods
    <el-button type="primary" @click="handleUpload">更新数据</el-button>
    <div>{{ goods }}</div>
  </div>
</template>

<script lang="ts">
//使用 mock 模拟一站式商城

import { defineComponent, ref } from "vue";
import axios from "axios";
import { ElButton } from "element-plus";
import "/mock/index.js";

export default defineComponent({
  components: {
    ElButton,
  },
  setup() {
    const goods = ref();
    const handleUpload = async () => {
      // 可以拿到数据
      const res = await axios.get("/mock/news");
      goods.value = res;
      console.log(import.meta.env.VITE_PREFIX_URL);
    };

    return {
      handleUpload,
      goods,
    };
  },
});
</script>
