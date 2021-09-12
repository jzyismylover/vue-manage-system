// 左边菜单栏列表
export const items = [
    {
        icon: "el-icon-lx-home",
        index: "/home/dashboard",
        title: "系统首页",
    },
    {
        icon: "el-icon-lx-cascades",
        index: "/home/field",
        title: "字段悬浮",
    },
    {
        icon: "el-icon-lx-copy",
        index: "/home/tabs",
        title: "tab选项卡",
    },
    {
        icon: "el-icon-lx-calendar",
        index: "/home3",
        title: "表单相关",
        subs: [
            {
                index: "/home/form",
                title: "基本表单",
            },
            {
                index: "/home/upload",
                title: "文件上传",
            },
            {
                index: "/home4",
                title: "三级菜单",
                subs: [
                    {
                        index: "/home/editor",
                        title: "富文本编辑器",
                    },
                ],
            },
        ],
    },
    {
        icon: "el-icon-lx-emoji",
        index: "/home/icon",
        title: "自定义图标",
    },
    {
        icon: "el-icon-pie-chart",
        index: "/home/charts",
        title: "schart图表",
    },
    {
        icon: "el-icon-lx-global",
        index: "/home/i18n",
        title: "国际化功能",
    },
    {
        icon: "el-icon-lx-warn",
        index: "/home7",
        title: "错误处理",
        subs: [
            {
                index: "/home/permission",
                title: "权限测试",
            },
            {
                index: "/home/404",
                title: "404页面",
            },
        ],
    },
    {
        icon: "el-icon-lx-redpacket_fill",
        index: "/home/donate",
        title: "支持作者",
    },
];