import { Ref } from 'vue'

/**
 * @description 支持选择性的响应式的参数
 * @example const param: MayBeRef<Date | number | string >
 */
type MayBeRef<T> = Ref<T> | T

export {
    MayBeRef
}