import { createI18n } from 'vue-i18n'
import messages from '../utils/i18n'

// 国际化功能创建
const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages
})

export default (app:any) => {
  app.use(i18n);
}