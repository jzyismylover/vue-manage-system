import { ElMessage } from 'element-plus';
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';


// login逻辑抽取
export function useLogin() {
    // 常量使用在函数中使用的话要么放在函数内要么导出不然不会识别导致出错
    const router = useRouter();

    // 路由验证规则
    const rules = {
        username: [
            {
                required: true,
                message: "请输入用户名",
                trigger: "blur",
            },
        ],
        password: [
            { required: true, message: "请输入密码", trigger: "blur" },
        ],
    };
    // 密码
    const param = reactive({
        username: "admin",
        password: "123123",
    });
    const login = ref();

    // 登录确定逻辑处理
    const submitForm = () => {
        login.value.validate((valid: unknown) => {
            if (valid) {
                ElMessage.success("登录成功");

                // 浏览器缓存 token 和 username
                localStorage.setItem("token", 'Beaer token');
                localStorage.setItem("ms_username", 'jzyismylover');

                /*
                    路由跳转传递一些参数(编程式导航)
                    这两种写法其实都可以，尝试的过程中也探索出了一些问题
                    path 的方式会经过 vue-router的 redirct处理，且路径上会显示 params传递的内容
                    name 的方式是直接定位到对应组件的位置而不会二次 redirct，路径上不会显示 query传递的内容
                */
                // router.push({
                //     path: '/home',
                //     query: {}
                // });
                router.push({
                    name: 'Dashboard',
                    params: {}
                })
            } else {
                ElMessage.error("登录成功");
                return false;
            }
        });
    }
    return {
        param,
        login,
        rules,
        submitForm,
    }
}