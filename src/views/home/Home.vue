<template>
  <v-header/>
  <v-side-bar />
  <div class="content-box" :class="{ 'content-collapse': collapse }">
    <v-tags></v-tags>
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
import { computed, defineComponent, onMounted } from "vue";
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
    
    onMounted(() => {
      console.log(tagsList);
    })
    
    return {
      tagsList,
      collapse,
    };
  },
});
</script>
