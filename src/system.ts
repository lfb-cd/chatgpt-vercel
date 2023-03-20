export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 由 [@lfb—CD](https://github.com/lfb—CD) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- 该网站仅作为演示，不提供长期服务，请勿滥用。
- 如果本项目对你有所帮助，[可以关注下lfb—CD](https://weibo.com/lfbWb)。
- 该预览页面域名由 [@lfb—CD](https://weibo.com/lfbWb) 免费提供，API Key 由 [@lfb—CD](https://weibo.com/lfbWb)免费提供，感谢。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
