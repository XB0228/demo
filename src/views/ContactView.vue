<template>
  <main class="contact-view">
    <section class="contact-hero">
      <div class="container">
        <span class="eyebrow">CONTACT WIDEVANCE</span>
        <h1>携手共创价值</h1>
        <p class="lede">
          想了解产品，或者正在处理一个具体的运营问题，欢迎联系我们。
        </p>
      </div>
    </section>

    <section class="contact-main">
      <div class="container contact-grid">
        <div>
          <p class="section-label">直接联系</p>
          <div class="contact-info">
            <div v-for="item in contactItems" :key="item.label" class="contact-item">
              <strong
                ><span
                  v-if="item.icon"
                  class="platform-icon"
                  aria-hidden="true"
                  v-html="item.icon"
                ></span
                >{{ item.label }}</strong
              >
              <component
                :is="item.target ? 'a' : 'span'"
                v-bind="
                  item.target
                    ? { href: item.value, target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                "
                v-html="item.display"
              ></component>
            </div>
          </div>
        </div>

        <div id="contact-form" class="contact-form">
          <h2>与我们联系</h2>
          <p>留下联系方式和想讨论的事情，我们会尽快回复。</p>
          <form @submit.prevent="handleSubmit">
            <div v-for="field in fields" :key="field.key" class="field">
              <label :for="field.id">{{ field.label }}</label>
              <component
                :is="field.type === 'textarea' ? 't-textarea' : 't-input'"
                :ref="setFieldRef(field.key)"
                v-model="form[field.key]"
                :type="field.type === 'email' ? 'email' : 'text'"
              />
              <p :id="`${field.id}-error`" class="field-error" aria-live="polite">
                {{ errors[field.key] }}
              </p>
            </div>
            <t-button
              class="button button-primary form-submit"
              theme="primary"
              type="submit"
              :loading="submitting"
              :disabled="submitting"
              >提交咨询</t-button
            >
            <p class="form-note" aria-live="polite">{{ note }}</p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteConfig } from '@/composables/useSiteConfig'
import { submitContact } from '@/lib/api'

const route = useRoute()
const siteConfig = useSiteConfig()

const contactItems = computed(() => [
  {
    label: '电子邮箱',
    value: `mailto:${siteConfig.value.contactEmail || 'contact@widevance.com'}`,
    display: siteConfig.value.contactEmail || 'contact@widevance.com',
    target: false,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/company/widevance-global',
    display: 'WIDEVANCE Global',
    target: true,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 8.4H2.1V22h3.1V8.4ZM3.65 2A1.85 1.85 0 1 0 3.7 5.7 1.85 1.85 0 0 0 3.65 2ZM22 13.2c0-4.1-2.2-6-5.1-6a4.4 4.4 0 0 0-4 2.2V8.4H9.8V22h3.1v-7.2c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9V22H22v-8.8Z"/></svg>'
  },
  {
    label: 'YouTube',
    value: 'https://www.youtube.com/@WIDEVANCE',
    display: '@WIDEVANCE',
    target: true,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z"/></svg>'
  },
  {
    label: '微信公众号',
    value: '',
    display: '维度万思',
    target: false,
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 3C4.8 3 1 5.9 1 9.5c0 2 1.1 3.8 3 5l-.8 2.4 2.8-1.3c.9.3 2.1.5 3.4.5 4.6 0 8.3-2.9 8.3-6.5S14 3 9.4 3Zm-2.8 7.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8.5 1.5c.8-1 1.3-2.2 1.3-3.5 0-3.2-3.1-5.8-7-5.8-.7 0-1.4.1-2 .2 2.7 1.2 4.5 3.5 4.5 6.1 0 .7-.1 1.3-.3 1.9.5-.1 1-.2 1.5-.4l2.6 1.2-.6-1.7Z"/></svg>'
  },
  {
    label: '公司地址',
    value: '',
    display: '广东省深圳市南山区怡化金融科技大厦 1216',
    target: false,
    icon: ''
  },
  {
    label: '工作时间',
    value: '',
    display: '周一至周五 9:00–18:00<br />（法定节假日除外）',
    target: false,
    icon: ''
  }
])

const fields = [
  { key: 'name', id: 'name', label: '姓名 *', type: 'text' },
  { key: 'company', id: 'company', label: '公司', type: 'text' },
  { key: 'email', id: 'email', label: '邮箱 *', type: 'email' },
  { key: 'message', id: 'message', label: '需求描述', type: 'textarea' }
]

const form = reactive({ name: '', company: '', email: '', message: '' })
const errors = reactive({ name: '', company: '', email: '', message: '' })
const note = ref('')
const submitting = ref(false)

const controlRefs = {}
const setFieldRef = (key) => (el) => {
  if (el) controlRefs[key] = el
}

/* TDesign 不会把 id 透传到内部 input/textarea，这里在挂载后补齐原生关联 */
const syncNativeIds = () => {
  fields.forEach((field) => {
    const instance = controlRefs[field.key]
    const control = instance?.$el?.querySelector?.('input, textarea')
    if (!control) return
    control.id = field.id
    control.setAttribute('aria-describedby', `${field.id}-error`)
  })
}

const clearError = (key) => {
  errors[key] = ''
  const instance = controlRefs[key]
  const control = instance?.$el?.querySelector?.('input, textarea')
  control?.setCustomValidity?.('')
}

const handleSubmit = async () => {
  fields.forEach((field) => clearError(field.key))
  note.value = ''

  if (!form.name.trim()) errors.name = '请填写姓名。'

  const emailValue = form.email.trim()
  if (!emailValue) {
    errors.email = '请填写邮箱。'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errors.email = '请输入有效的邮箱地址。'
  }

  const invalid = fields.find((field) => errors[field.key])
  if (invalid) {
    const instance = controlRefs[invalid.key]
    instance?.$el?.querySelector?.('input, textarea')?.focus()
    return
  }

  submitting.value = true
  try {
    await submitContact({
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      message: form.message.trim()
    })
    note.value = '感谢您的留言，我们会尽快联系您。'
    form.name = ''
    form.company = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    note.value = err?.message || '提交失败，请稍后重试。'
  } finally {
    submitting.value = false
  }
}

let resizeObserver = null

onMounted(() => {
  if (route.query.source === 'subscription' && !form.message) {
    form.message = '订阅资讯'
  }
  syncNativeIds()
  // TDesign 在重渲染时可能重建内部节点，重新绑定一次 id 关联
  resizeObserver = new MutationObserver(syncNativeIds)
  const formEl = document.getElementById('contact-form')
  if (formEl) resizeObserver.observe(formEl, { childList: true, subtree: true })
})

onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<style scoped>
.contact-hero {
  padding: 92px 0 84px;
  background: var(--brand);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #12445b;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 24px;
  height: 2px;
  background: var(--ink);
}

h1 {
  max-width: 780px;
  margin: 20px 0 16px;
  font-size: clamp(48px, 7vw, 88px);
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.lede {
  max-width: 620px;
  margin: 0;
  color: #12445b;
  font-size: 19px;
}

.contact-main {
  padding: 84px 0 112px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 72px;
  align-items: start;
}

.section-label {
  margin: 0 0 18px;
  color: #007ea6;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.contact-item {
  min-height: 112px;
  padding: 17px 18px;
  border: 1px solid rgba(189, 212, 224, 0.72);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.48);
}

.contact-item strong {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 8px;
  font-size: 15px;
}

.platform-icon {
  display: inline-grid;
  width: 28px;
  height: 28px;
  place-items: center;
  flex: 0 0 28px;
  border-radius: 8px;
  color: #007ea6;
  background: rgba(23, 198, 255, 0.13);
}

.platform-icon :deep(svg) {
  width: 17px;
  height: 17px;
  display: block;
}

.contact-item strong .platform-icon {
  display: inline-grid;
  font-size: 0;
  line-height: 1;
}

.contact-item a,
.contact-item span {
  display: block;
  font-size: 21px;
  line-height: 1.35;
}

.contact-item a {
  font-weight: 750;
}

.contact-item a:hover {
  color: #007ea6;
}

.contact-form {
  padding: 34px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 60px rgba(13, 27, 42, 0.08);
}

.contact-main {
  padding: 60px 0 84px;
}

.contact-main .section-label {
  margin-bottom: 16px;
}

.contact-form h2 {
  margin: 0 0 8px;
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.contact-form > p {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 14px;
}

.field {
  display: grid;
  gap: 7px;
  margin-top: 16px;
}

.field label {
  font-size: 13px;
  font-weight: 750;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 9px;
  padding: 12px 13px;
  color: var(--ink);
  background: #fff;
  font: inherit;
}

.field input {
  height: 44px;
  padding: 0 13px;
  line-height: 1.25;
}

.field textarea {
  min-height: 112px;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: 3px solid rgba(23, 198, 255, 0.24);
  border-color: #17c6ff;
}

.form-submit {
  margin-top: 22px;
  border: 0;
  cursor: pointer;
}

.form-note {
  min-height: 22px;
  margin: 14px 0 0;
  color: #007ea6;
  font-size: 13px;
}

/* Contact page: direct pathways first, not a grid of decorative cards. */
.contact-main {
  padding: 88px 0 96px;
}

.contact-grid {
  grid-template-columns: 1fr 0.82fr;
  gap: 96px;
}

.contact-info {
  display: block;
  border-top: 1px solid rgba(112, 151, 173, 0.42);
}

.contact-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  min-height: 0;
  padding: 22px 0;
  border: 0;
  border-bottom: 1px solid rgba(112, 151, 173, 0.42);
  border-radius: 0;
  background: transparent;
}

.contact-item strong {
  margin: 2px 0 0;
  font-size: 14px;
}

.contact-item a,
.contact-item span {
  font-size: 18px;
  line-height: 1.45;
}

.contact-form {
  padding: 8px 0 0;
  border: 0;
  border-radius: 0;
  background: transparent !important;
  box-shadow: none;
  color: var(--ink);
}

.contact-form > p {
  color: var(--muted);
}

.contact-form h2 {
  font-size: 36px;
}

.field label {
  color: var(--ink);
}

.field input,
.field textarea {
  border-color: var(--line);
  border-radius: 0;
  background: rgba(255, 255, 255, 0.72);
  color: var(--ink);
}

.field input:focus,
.field textarea:focus {
  border-color: var(--brand);
}

.form-submit {
  background: var(--brand);
  color: var(--ink);
}

/* TDesign Input / Textarea：去掉组件默认外壳，沿用原站 .field 的输入框样式 */
.field :deep(.t-input),
.field :deep(.t-textarea) {
  display: block;
  height: auto;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.field :deep(.t-input__inner),
.field :deep(.t-textarea__inner) {
  width: 100%;
  padding: 12px 13px;
  border: 1px solid var(--line);
  border-radius: 0;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.72);
  font: inherit;
  box-shadow: none;
}

.field :deep(.t-input__inner) {
  height: 44px;
  padding: 0 13px;
  line-height: 1.25;
}

.field :deep(.t-textarea__inner) {
  min-height: 112px;
  resize: vertical;
}

.field :deep(.t-input__inner:focus),
.field :deep(.t-textarea__inner:focus) {
  outline: 3px solid rgba(23, 198, 255, 0.24);
  border-color: var(--brand);
  box-shadow: none;
}

@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 40px));
  }
  .contact-hero {
    padding: 72px 0 66px;
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .contact-item a,
  .contact-item span {
    font-size: 18px;
  }
  .contact-grid {
    gap: 48px;
  }
  .contact-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

@media (max-width: 560px) {
  .contact-info {
    grid-template-columns: 1fr;
  }
  .contact-form {
    padding: 22px;
  }
}
</style>
