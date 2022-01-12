import { RouteRecordName } from 'vue-router';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { store } from './index'
interface Tag {
  name: RouteRecordName,
  title: unknown,
  path: string
}

@Module({ name:'setTags', dynamic:true, namespaced:false, store})
class Tags extends VuexModule {
  public tagsList:Tag[] = [];
  
  // 添加单个tag
  @Mutation
  setTagsItem (item:Tag) {
    this.tagsList.push(item);
  }

  // 移除单个tag
  @Mutation
  delTagsItem (index:number) {
    this.tagsList.splice(index, 1);
  }

  // 删除所有tag
  @Mutation
  clearTags() {
    this.tagsList = [];
  }

  // 删除除了当前以外的所有tag
  @Mutation
  closeTagsOther(index:number) {
    this.tagsList = this.tagsList.slice(index, index+1);
  }
}

export const StoreTags = getModule(Tags);