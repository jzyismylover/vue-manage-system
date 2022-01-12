<template>
  <div style="display: flex; flex-direction: column">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { tsLearning } from '/@/utils/tsLearning'

export default defineComponent({
  setup() {
    onMounted(() => {
      tsLearning()
    });
  },
});
</script>
