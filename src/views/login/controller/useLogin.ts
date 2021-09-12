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
                router.push("/home");
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