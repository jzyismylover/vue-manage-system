<template>
  <v-header ref="header" @handleCollapse="handleCollapse" v-model:message="arg" />
  <v-side-bar />
  <div class="content-box" :class="{ 'content-collapse': collapse }">
    <v-tags />
    <!-- 主要内容部分-->
    <div class="content">
      <!--过渡动画效果-->
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
// 全局组件
import VHeader from "/@components/Header.vue";
import VSideBar from "/@components/Sidebar.vue";
import VTags from "/@/components/Tags.vue";
import { StoreTags } from "/@/store/tags";
import { StoreStatus } from "/@/store/status";

export default defineComponent({
  components: {
    VHeader,
    VSideBar,
    VTags,
  },

  setup() {
    const collapse = computed(() => StoreStatus.collapse);
    const tagsList: any = computed(() => StoreTags.tagsList);

    const header = ref();
    const handleCollapse = (data: unknown[]) => {
      // data 是子组件传递过来的数据
      console.log(typeof data);
    };

    const arg = ref(3);

    onMounted(() => {
      console.log(tagsList);
      // 父组件不能通过 watch/watchEffect 的方式去监听子组件内部的变化
      console.log(header.value.collapse);
      // 路由的参数可以通过 route.query或者 route.param去拿到然后再去做对应的请求操作
      /*const route = useRoute();
      console.log(route.query);
      console.log(route.params);
      console.log(route.path);*/
    });

    return {
      tagsList,
      collapse,
      header,
      arg,
      handleCollapse,
    };
  },
});
</script>
