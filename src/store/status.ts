// 存储各个组件的一些状态标识
import { Module, VuexModule, getModule, Mutation } from 'vuex-module-decorators'
// 导入跟挂载节点
import { store } from './index'


// 参数一：module名称，开启命名空间后会以name为命名空间
// 参数二：是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网。
// 参数三：是否开启命名空间，如果你的模块很多，强烈建议开启
// 参数四：挂载的store目标
// 在 tsconfig.json 里面需配置支持 ts 装饰才不会报错
@Module({ name: 'Staus', dynamic: true, namespaced: false, store })
class Staus extends VuexModule{

    // 左边菜单折叠标志
    public collapse = false;
    @Mutation
    handleCollapse(value:boolean) {
        this.collapse = value;
    }

}


export const StoreStatus = getModule(Staus);