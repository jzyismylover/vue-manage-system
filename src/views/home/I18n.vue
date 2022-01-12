<template>
  <div>
    <el-button type="primary" @click="handleClick">切换</el-button>
  </div>
</template>


<script lang="ts">
// 国际化功能 -> 实现语言和语种的切换
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    const i18n = useI18n();
    const handleClick = () => {
      // 当前激活的语言
      console.log(i18n.locale.value);
    }

    return {
      handleClick
    }
  },
})
</script>
