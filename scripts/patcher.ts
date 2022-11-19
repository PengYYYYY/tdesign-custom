import { execa } from 'execa'
import rimraf from 'rimraf'
import fs from 'fs'
import glob from 'glob'

const resolve = (path: string) => new URL(path, import.meta.url).pathname
const readFile = (path: string) => fs.readFileSync(resolve(path), 'utf-8')
const writeFile = (path: string, content: string) => fs.writeFileSync(resolve(path), content)
const appendFile = (path: string, content: string, identifier: undefined | string = undefined) => {
  const fileContent = readFile(path)
  const appendContent = identifier ? `\n// ${identifier}\n${content}` : content
  if (identifier && fileContent.includes(identifier)) {
    throw new Error(`File ${path} has been patched.`)
  }
  fs.appendFileSync(resolve(path), appendContent)
}

const resolveLessVars = (content: string) => {
  const R_VARS = /(@[\w-]+):\s*([^;]*)/g
  return [...content.matchAll(R_VARS)].reduce((acc: any, [, key, value]) => {
    acc[key] = String(value).trim().replace(/\R/, '')
    return acc
  }, {})
}

const modifyLessVars = (content: string, vars: any) => {
  const R_VARS = /(@[\w-]+):\s*([^;]*)/g
  return content.replace(R_VARS, (match, key) => {
    return vars[key] ? `${key}: ${vars[key]}` : match
  })
}

const main = async () => {
  const LESS_VAR_PATH = '../style/rewrite/_variables.less'
  const PATCH_PKG_PATH = '../tdesign-vue'
  const IDENTIFIER = 'TDesignPatcher'

  // 删除 ../tdesign-vue 目录
  rimraf.sync(resolve(PATCH_PKG_PATH))
  console.log(`[1]: 删除 ${PATCH_PKG_PATH} 目录`)

  // 获取当前已安装的 tdesign-vue 版本
  const { version: VERSION } = await import('tdesign-vue/package.json')
  console.log(`[2]: 检查当前已安装的 tdesign-vue 版本: ${VERSION}`)

  // pnpm patch tdesign-vue
  console.log(`[3]: pnpm patch tdesign-vue@${VERSION}`)
  await execa('pnpm', ['patch', `tdesign-vue@${VERSION}`, `--edit-dir=${resolve(PATCH_PKG_PATH)}`])

  // 替换 tdesign-vue 中的 less 变量
  const lessVars = resolveLessVars(readFile(LESS_VAR_PATH))

  const varsFile = `${PATCH_PKG_PATH}/esm/_common/style/web/_variables.less`
  const varsAppend = Object.entries(lessVars).map(([key, value]) => `${key}: ${value};`).join('\n')
  appendFile(varsFile, varsAppend, IDENTIFIER)
  console.log(`[4]: Patched ${varsFile}`)

  // 将 var.less 中的变量替换到 tdesign-vue 中的所有 _var.less 文件中
  const files = glob.sync(resolve(`${PATCH_PKG_PATH}/esm/_common/style/**/_var.less`))
  console.log(`[4]: Patching ${files.length} files:`)

  files.forEach((path) => {
    const fileContent = readFile(path)

    if (fileContent.includes(IDENTIFIER)) {
      console.log(`[4]: Skip ${path} (already patched)`)
      return
    }

    const newContent = modifyLessVars(fileContent, lessVars)
    writeFile(path, newContent)
    console.log(`[4]: Patched ${path}`)
  })

  // pnpm patch-commit ./tdesign-vue
  console.log('[5]: pnpm patch-commit ./tdesign-vue')
  await execa('pnpm', ['patch-commit', resolve('../tdesign-vue')])

  // 清理临时目录
  rimraf.sync(resolve(PATCH_PKG_PATH))
  console.log(`[6]: 删除 ${PATCH_PKG_PATH} 目录`)
}

try {
  main()
} catch (error) {
  console.error('执行失败请排查错误信息后重试', error)
}
