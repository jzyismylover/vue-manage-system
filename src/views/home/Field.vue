<template>
  <div>
    <!--跳转到新页面-->
    <!-- <router-link tag="a" target="_blank" :to="{name:'Dashboard'}">
      跳转
    </router-link>-->
    <div class="input-container">
      <el-input v-model="value" class="input-content"></el-input>
      <div v-show="visible" class="input-tooltip">
        <SearchList :searchMsg="value" />
      </div>
    </div>

    <!--伪类元素实验-->
    <!--<div class="upload-cont"></div>-->
  </div>
</template>

<script lang="ts">
// 可以在这里尝试使用前端文本框的模糊搜索功能
// 比如说输入某串文字，下拉框匹配模糊内容
// 由于 tooltip提示的位置有限，所以可以考虑优先显示前 8 条搜索信息
// 一般是由后台使用数据库模匹配然后返回匹配信息
import { defineComponent, ref, computed, onMounted } from "vue";
import { ElInput, ElTooltip } from "element-plus";
import SearchList from "/@/components/SearchList.vue";

export default defineComponent({
  components: {
    ElInput,
    ElTooltip,
    [SearchList.name]: SearchList,
  },
  setup() {
    const value = ref("");
    const visible = computed(() => {
      return value.value ? true : false;
    });

    // ts 类型谓词
    function isNumber(x: any): x is number {
      return typeof x === "number";
    }

    function isString(x: any): x is string {
      return typeof x === "string";
    }

    type A = string | boolean;
    type B = string | number;
    type Merge = A & B;

    onMounted(() => {
      interface Person {
        name: string;
        age: number;
        isYoung: boolean;
      }

      type K1 = keyof Person;
      type K3 = keyof { [x: string]: Person };

      console.log(isNumber(2));
      console.log(isString(10));
      let x: number;
      let y: number;
      let z: number;
      let c: number[];
      let five_array = [0, 1, 2, 3, 4];
      [x, y, z, ...c] = five_array;
      console.log(x, y, z, c);
      let colors: string[] = ["red", "green", "blue"];
      for (let i of colors) {
        // 拿到的是 value 值
        console.log(i);
      }
    });

    return {
      visible,
      value,
    };
  },
});
</script>

<style scoped>
.input-container {
  position: relative;
  width: 600px;
  margin: 0 auto;
}
.input-tooltip {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: auto;
  background: rgb(197, 197, 203);
}

/**上传组件 */
.upload-cont {
  position: relative;
  margin-top: 50px;
  background: transparent;
  width: 200px;
  height: 200px;
  border: 1px dashed rgb(108, 106, 106);
}
/* .upload-cont::after {
  position: absolute;
  content: "";
  width: 200px;
  height: 200px;
  background-image: url("../../assets/img/logo.png");
} */
</style>
