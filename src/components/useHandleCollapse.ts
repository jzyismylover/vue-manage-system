// 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
// 下面是一个防抖控制的自定义触发 ref
import { customRef } from 'vue'

function useHandleCollapse(val: any, fn: Function) {
  let timer: NodeJS.Timeout | null = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return val;
      },
      set(newVal: number) {
        if(timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          val = newVal;
          fn();
          trigger();
        }, 300)
      }
    }
  })
}

// 节流
function throttle(fn: Function, delay = 2000) {
  let precious = 0,
    timer: NodeJS.Timeout | null = null,
    remaining = 0; // 剩余时间

  return function () {
    let now = +new Date();
    remaining = delay + precious - now;
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      precious = now;
      fn();
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          precious = +new Date();
          timer = null;
          fn();
        }, remaining)
      }
    }
  }
}

export {
  useHandleCollapse
}