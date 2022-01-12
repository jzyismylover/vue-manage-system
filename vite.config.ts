import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 路径解析函数 需要@type-node环境配置
function pathResolve(dir: string) {
  resolve(__dirname, '.', dir);
}

const root = process.cwd();

export default defineConfig({
  plugins: [vue()],
  root,
  resolve: {
    alias: [
      { find: '/@', replacement: resolve(__dirname, 'src') },
      { find: '/@components', replacement: resolve(__dirname, 'src/components') },

      //利用路径解析函数和正则表达式实现路径别名的配置
      // { find: /^\/@\//, replacement: pathResolve('src') + '/' },
      // { find: /^\/@\/components/, replacement: pathResolve('src/components')+'/' }
    ],
  }
})
