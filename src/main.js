import {
  Button,
  Input,
  Textarea
} from 'tdesign-vue-next'
import 'tdesign-vue-next/es/button/style/index.css'
import 'tdesign-vue-next/es/input/style/index.css'
import 'tdesign-vue-next/es/textarea/style/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*
 * 样式加载顺序与原站保持一致：
 *   页面内联样式（各视图 scoped style） -> base/layout/tdesign -> typography.css
 * typography.css 原站是最后加载的公共层，因此必须放在最后导入。
 */
import './styles/base.css'
import './styles/detail.css'
import './styles/layout.css'
import './styles/tdesign.css'
import './styles/typography.css'

const app = createApp(App)

app.use(router)
app.use(Button)
app.use(Input)
app.use(Textarea)

app.mount('#app')
