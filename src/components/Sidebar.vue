<template>
    <!--构造多层嵌套的导航栏-->
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted   } from "vue";
import { StoreStatus } from "/@/store/status";
import { useRoute } from "vue-router";
import { items } from './constant'
import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'
 
export default defineComponent({
    components:{
        ElMenu, 
        ElSubmenu, 
        ElMenuItem,
    },
    setup() {
        // 获取当前的路径
        const route = useRoute();
        const onRoutes = computed(() => {
            return route.path;
        });

        // menu菜单是否展开
        const collapse = computed(() => StoreStatus.collapse);
        onMounted(() => {
            console.log(collapse.value)
        })

        return {
            items,
            onRoutes,
            collapse,
        };
    },
});
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    /*::-webkit-scrollbar CSS伪类选择器影响了一个元素的滚动条的样式 */
    /*https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar */
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    /*:not(element)选择不包换 element的元素 */
    /*这里是为了控制 menu缩起来以后 width: auto*/
    width: 250px;
}
.sidebar > ul {
    /*子代选择器 > 和后台选择器 */
    height: 100%;
}
</style>
