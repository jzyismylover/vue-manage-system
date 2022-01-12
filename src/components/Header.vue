<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">{{ title }}</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <router-link to="/home/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <!--提示小红点的制作-->
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { StoreStatus } from "/@/store/status";
import { ElTooltip, ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";

export default defineComponent({
  components: {
    ElTooltip,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  },
  props: {
    message: {
      type: Number,
    },
  },
  emits: ["handleCollapse", "update:message"],

  setup(props, { emit }) {
    const username = localStorage.getItem("ms_username");

    const collapse = computed(() => StoreStatus.collapse);

    // 侧边栏折叠
    const collapseChage = () => {
      StoreStatus.handleCollapse(!collapse.value);
      // emit 主要用于触发父组件的一些事件驱动
      // emit('bind name', ...args);
      emit("handleCollapse", ["msg"]);

      // 这样子的写法其实就实现了父子组件的双向绑定
      // 两者的数据类型最好是一致的
      emit("update:message", 5);
    };

    onMounted(() => {
      if (document.body.clientWidth < 800) {
        collapseChage();
      }
    });

    // 用户名下拉菜单选择事件
    const router = useRouter();
    const handleCommand = (command: string) => {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        router.push("/login");
      } else if (command == "user") {
        router.push("/user");
      }
    };

    const title = ref(import.meta.env.VITE_GLOB_APP_TITLE);
    return {
      username,
      collapse,
      title,
      collapseChage,
      handleCommand,
    };
  },
});
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  /*包括 icon和文字都会继承当前默认font-size */
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
