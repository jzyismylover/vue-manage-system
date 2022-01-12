// 配置环境变量的格式信息

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_PREFIX_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}