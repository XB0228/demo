<template>
  <IntroLoader />

  <main id="home" ref="root" class="home-view">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">WIDEVANCE / AGENTIC TOS</span>
          <h1>看清运营全局，<span>让智能驱动行动。</span></h1>
          <p class="hero-lede">
            WIDEVANCE
            将船舶、堆场、设备与作业数据汇聚为实时运营全景，让风险、瓶颈与资源状态清晰可见；AI
            持续学习码头运营规律，预测变化、推演调度，并在安全边界与授权机制下推动执行。
          </p>
          <div class="hero-actions">
            <t-button class="button button-primary" theme="primary" @click="go('/product')"
              >探索产品</t-button
            >
            <t-button class="button button-ghost" @click="go('/careers')"
              >了解团队</t-button
            >
          </div>
        </div>
        <figure class="hero-visual">
          <img src="/assets/hero-ship.gif" alt="港口智能作业动态图示" />
        </figure>
      </div>
    </section>

    <section id="product" class="product-section reveal">
      <div class="container product-frame">
        <div class="product-copy">
          <span class="product-label">PRODUCT INNOVATION / 产品创新理念</span>
          <h2 data-scroll-float>面向港口的 Agentic TOS</h2>
          <p>
            我们将 Agentic TOS
            视为港口运营的新型协作方式：让系统理解现场情境、连接岗位与工作流，并在清晰权限、操作可追溯和人工监督下辅助决策与执行。
          </p>
          <t-button
            class="button button-dark"
            theme="primary"
            style="margin-top: 24px"
            @click="go('/product')"
            >查看产品</t-button
          >
        </div>
        <div class="principles" aria-label="产品设计原则">
          <article class="principle reveal" data-delay="1">
            <span class="principle-no">01 / DESIGN</span>
            <h3>设计 <span class="principle-subtitle">AI 原生</span></h3>
            <p>以 AI 原生方式理解现场，让系统围绕变化、协同与行动而设计。</p>
          </article>
          <article class="principle reveal" data-delay="2">
            <span class="principle-no">02 / ARCHITECTURE</span>
            <h3>架构 <span class="principle-subtitle">持续演进</span></h3>
            <p>
              采用可持续演进的架构，适配不同港口现场并支持能力持续升级。
            </p>
          </article>
          <article class="principle reveal" data-delay="3">
            <span class="principle-no">03 / ECOSYSTEM</span>
            <h3>生态 <span class="principle-subtitle">aPaaS 开放</span></h3>
            <p>
              以 aPaaS 开放平台连接 API 与 AI，让系统更易集成、扩展与共创。
            </p>
          </article>
          <article class="principle reveal" data-delay="1">
            <span class="principle-no">04 / SERVICE</span>
            <h3>服务 <span class="principle-subtitle">系统高可用</span></h3>
            <p>高可用运行与平滑切换，让系统持续在线、业务运行不中断。</p>
          </article>
        </div>
      </div>
    </section>

    <section id="news" class="insight-section news-section reveal">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">NEWS / 新闻</span>
            <h2 data-scroll-float>持续关注，正在发生的变化</h2>
          </div>
          <RouterLink class="section-link" to="/contact">
            订阅新闻
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </RouterLink>
        </div>
        <div class="insight-grid">
          <RouterLink
            class="insight-card news-current reveal"
            data-delay="1"
            to="/news/vision-mission"
          >
            <div class="insight-media has-cover">
              <img
                src="/assets/news-agentic-tos.jpg"
                alt="集装箱码头的智能协同网络"
              />
            </div>
            <div>
              <span class="card-type">公司动态 · 2026.09.17</span>
              <h3>今天，WIDEVANCE正式确定了愿景与使命</h3>
              <p>
                WIDEVANCE 发布愿景与使命，以 Agentic TOS
                推动海事运营走向更智能、更敏捷、更具韧性的未来。
              </p>
            </div>
          </RouterLink>
          <a
            class="insight-card news-current reveal"
            data-delay="2"
            href="/assets/agentic-tos-poster-zh.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="insight-media has-cover">
              <img src="/assets/agentic-tos-poster-zh.png" alt="Agentic TOS 海报" />
            </div>
            <div>
              <span class="card-type">公司动态 · 2026.09.10</span>
              <h3>让码头，进入智能体时代</h3>
              <p>
                WIDEVANCE Agentic TOS 海报：以智能体重新想象码头运营的下一步。
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="explore-section brand-story-section reveal">
      <div class="container brand-story-grid">
        <div class="brand-story-copy">
          <span class="eyebrow">ABOUT / BRAND PHILOSOPHY</span>
          <p class="brand-story-kicker">Think Wide, Advance Beyond.</p>
          <h2 data-scroll-float>广思致远，<span>突破无界</span></h2>
          <p>
            我们从港口与供应链的全局出发，深入真实现场理解长期需求；再以 AI
            与复杂系统能力持续突破，让创新成为客户看得见、用得上的运营价值。
          </p>
          <RouterLink class="brand-story-link" to="/about"
            >了解 WIDEVANCE →</RouterLink
          >
        </div>
        <div class="brand-principles" aria-label="WIDEVANCE 品牌行动原则">
          <article>
            <span>01 / THINK WIDE</span>
            <h3>看见全局</h3>
            <p>不止解决单点问题，也理解港口运营与供应链之间的长期联系。</p>
          </article>
          <article>
            <span>02 / FIELD FIRST</span>
            <h3>扎根现场</h3>
            <p>从真实流程、约束和目标出发，让技术回应运营本身。</p>
          </article>
          <article>
            <span>03 / ADVANCE BEYOND</span>
            <h3>持续突破</h3>
            <p>
              与客户共同验证新的协作方式，把 Agentic TOS 做成可靠的产品。
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="careers" class="careers-section reveal">
      <div class="container careers-grid">
        <div>
          <span class="eyebrow">CAREERS / 招聘</span>
          <h2 data-scroll-float>让港口运营，因你更进一步</h2>
          <p class="lead">
            与 AI
            原生的创始团队并肩，把复杂的港口现场做成真正可用的产品。加入早期团队，你会直接参与产品方向、客户问题与团队建设，让每一次实践留下可见的影响。
          </p>
        </div>
        <article class="career-card reveal" data-delay="2">
          <span class="mini-label">现在寻找</span>
          <h3>产品、工程与行业伙伴</h3>
          <p>
            如果你对港口、物流、企业软件或 AI
            感兴趣，欢迎把你的经历和想做的事情发给我们。
          </p>
          <div class="career-roles">
            <span class="career-role">产品与设计</span
            ><span class="career-role">销售与业务拓展</span
            ><span class="career-role">行业解决方案</span
            ><span class="career-role">实习与合作</span>
          </div>
          <t-button
            class="button button-dark"
            theme="primary"
            tag="a"
            href="mailto:hr@widevance.com?subject=加入WIDEVANCE"
            >联系招聘团队</t-button
          >
        </article>
      </div>
    </section>

    <section id="contact" class="cta-section reveal">
      <div class="container cta-inner">
        <div>
          <span class="eyebrow">CONTACT / 联系团队</span>
          <h2>欢迎进入港口智能体时代</h2>
          <p>
            想订阅新闻、了解产品研发，或者聊聊你的运营现场，都欢迎联系我们。
          </p>
        </div>
        <t-button class="button button-dark" theme="primary" @click="go('/contact')"
          >联系团队</t-button
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IntroLoader from '@/components/IntroLoader.vue'
import { useReveal, useScrollFloat } from '@/composables/useMotion'

const root = ref(null)
const router = useRouter()

useReveal(root)
useScrollFloat(root)

const go = (path) => router.push(path)
</script>

<style scoped>
/* 首页自身变量：保留原站 --paper / --shadow 取值 */
.home-view {
  --paper: #f6f9fb;
  --paper-warm: #fbfcfd;
  --shadow: 0 18px 60px rgba(13, 27, 42, 0.1);
}

.container {
  width: min(var(--max), calc(100% - 64px));
  margin: 0 auto;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 24px;
  height: 2px;
  background: var(--brand);
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes signal-lift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes signal-orbit {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.82;
  }
  50% {
    transform: translate(-18px, 12px) scale(1.06);
    opacity: 1;
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    box-shadow: 0 0 0 5px rgba(23, 198, 255, 0.12);
  }
  50% {
    box-shadow: 0 0 0 9px rgba(23, 198, 255, 0.03);
  }
}

@keyframes line-shimmer {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}

.hero-grid {
  animation: hero-enter 0.8s var(--ease) both;
}

.signal-card {
  animation: signal-lift 8s ease-in-out 1.1s infinite;
}

.signal-card::before {
  animation: signal-orbit 12s ease-in-out 1.2s infinite;
}

.signal-status::before {
  animation: pulse-dot 2.4s ease-in-out infinite;
}

.reveal {
  opacity: 0;
  transform: translate3d(0, 26px, 0) scale(0.985);
  transition:
    opacity 0.72s var(--ease),
    transform 0.72s var(--ease);
}

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

.reveal[data-delay="1"] {
  transition-delay: 0.08s;
}

.reveal[data-delay="2"] {
  transition-delay: 0.16s;
}

.reveal[data-delay="3"] {
  transition-delay: 0.24s;
}

[data-scroll-float] {
  transform: translate3d(0, var(--scroll-float, 0px), 0);
  will-change: transform;
  transition: transform 0.1s linear;
}

.insight-card[data-delay="1"] {
  --card-shift: 0px;
}

.insight-card[data-delay="2"] {
  --card-shift: 20px;
}

.insight-card[data-delay="3"] {
  --card-shift: 36px;
}

.insight-card.reveal:not(.is-visible) {
  transform: translate3d(0, calc(26px + var(--card-shift, 0px)), 0) scale(0.97);
}

.insight-card.reveal.is-visible {
  transform: translate3d(0, 0, 0) scale(1);
}

.section-head {
  position: relative;
}

.section-head::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -18px;
  width: 84px;
  height: 2px;
  overflow: hidden;
  background: var(--brand);
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.8s var(--ease) 0.25s;
}

.section-head.is-visible::after {
  transform: scaleX(1);
}

.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  background:
    radial-gradient(circle at 82% 78%, rgba(23, 198, 255, 0.14), transparent 28%),
    radial-gradient(circle at 18% 18%, rgba(65, 164, 217, 0.12), transparent 22%),
    linear-gradient(135deg, #07121e 0%, #0b1b2a 58%, #07131f 100%);
  padding: 36px 0 32px;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to right, black, transparent 76%);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 76% 38%, rgba(23, 198, 255, 0.12), transparent 25%),
    linear-gradient(90deg, rgba(7, 18, 30, 0.16), rgba(7, 18, 30, 0.46));
}

.hero-ship-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 58%;
  width: 30vw;
  transform: translateX(-50%);
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 26%,
    #000 74%,
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 26%,
    #000 74%,
    transparent 100%
  );
}

.hero-ship-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.6;
  filter: saturate(1.05) contrast(1.15) brightness(1.05);
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 0.92fr;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 64px;
}

.hero .eyebrow {
  color: var(--brand);
}

.hero h1 {
  max-width: 680px;
  margin: 20px 0 22px;
  font-size: clamp(54px, 5.4vw, 82px);
  line-height: 0.96;
  letter-spacing: -0.055em;
}

.hero h1 span {
  display: inline-block;
  color: var(--brand);
  white-space: nowrap;
}

.hero-product-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 24px 0 0;
  color: #d4e5ee;
  font-size: 16px;
  font-weight: 650;
}

.hero-product-line::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 6px rgba(23, 198, 255, 0.12);
}

.hero-product-line strong {
  color: var(--brand);
  letter-spacing: 0.03em;
}

.hero-lede {
  max-width: 650px;
  margin-top: 18px;
  color: #c8d8e3;
  font-size: 19px;
  line-height: 1.72;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero .button-ghost {
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.32);
}

.hero .button-ghost:hover {
  border-color: var(--brand);
  color: var(--brand);
}

.poster-card {
  width: min(100%, 420px);
  justify-self: end;
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 28px;
  background: #0b1b2a;
  box-shadow:
    0 32px 90px -24px rgba(0, 0, 0, 0.78),
    0 14px 36px -18px rgba(0, 0, 0, 0.48),
    0 0 52px -10px rgba(23, 198, 255, 0.14),
    0 0 0 1px rgba(214, 234, 244, 0.12);
}

.poster-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.signal-card {
  min-height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-lg);
  background: linear-gradient(150deg, #15344d 0%, #102a42 56%, #0d2236 100%);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
}

.signal-card::before {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  right: -120px;
  top: -100px;
  border: 1px solid rgba(23, 198, 255, 0.35);
  border-radius: 50%;
  box-shadow:
    0 0 0 40px rgba(23, 198, 255, 0.05),
    0 0 0 80px rgba(23, 198, 255, 0.03);
}

.signal-top {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a8bfcd;
  font-size: 12px;
  letter-spacing: 0.04em;
}

.signal-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand);
}

.signal-status::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 0 5px rgba(23, 198, 255, 0.12);
}

.agent-map {
  position: relative;
  height: 272px;
  margin: 24px 0 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 20px;
  background: rgba(5, 18, 31, 0.28);
}

.agent-map::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.55;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.065) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.065) 1px, transparent 1px);
  background-size: 34px 34px;
}

.agent-map::after {
  content: "";
  position: absolute;
  inset: 18% 10%;
  border: 1px solid rgba(23, 198, 255, 0.22);
  border-radius: 50%;
  transform: rotate(-18deg) skewX(-10deg);
  box-shadow:
    0 0 0 26px rgba(23, 198, 255, 0.04),
    0 0 0 54px rgba(23, 198, 255, 0.025);
}

.map-route {
  position: absolute;
  height: 1px;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    rgba(23, 198, 255, 0.05),
    rgba(23, 198, 255, 0.9),
    rgba(255, 255, 255, 0.18)
  );
  box-shadow: 0 0 12px rgba(23, 198, 255, 0.35);
}

.route-one {
  left: 14%;
  top: 68%;
  width: 65%;
  transform: rotate(-18deg);
}

.route-two {
  left: 23%;
  top: 40%;
  width: 58%;
  transform: rotate(28deg);
  opacity: 0.6;
}

.route-three {
  left: 38%;
  top: 79%;
  width: 44%;
  transform: rotate(-48deg);
  opacity: 0.45;
}

.port-node {
  position: absolute;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 12px;
  height: 12px;
  border: 3px solid var(--brand);
  border-radius: 50%;
  background: var(--ink-900);
  box-shadow:
    0 0 0 7px rgba(23, 198, 255, 0.1),
    0 0 20px rgba(23, 198, 255, 0.42);
}

.port-node::after {
  content: attr(data-label);
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #a9c1cf;
  font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  white-space: nowrap;
}

.node-vessel {
  left: 14%;
  top: 68%;
}

.node-yard {
  left: 48%;
  top: 51%;
}

.node-gate {
  left: 79%;
  top: 28%;
}

.agent-core {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 51%;
  display: grid;
  place-items: center;
  width: 108px;
  height: 108px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(23, 198, 255, 0.78);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(23, 198, 255, 0.28),
    rgba(8, 19, 31, 0.92) 68%
  );
  box-shadow:
    0 0 0 12px rgba(23, 198, 255, 0.055),
    0 0 42px rgba(23, 198, 255, 0.22);
  text-align: center;
}

.agent-core::before,
.agent-core::after {
  content: "";
  position: absolute;
  inset: -14px;
  border: 1px dashed rgba(23, 198, 255, 0.28);
  border-radius: 50%;
}

.agent-core::after {
  inset: -28px;
  opacity: 0.45;
}

.agent-core span {
  color: var(--brand);
  font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
}

.agent-core strong {
  margin-top: 4px;
  color: var(--white);
  font-size: 14px;
}

.map-caption {
  position: absolute;
  z-index: 4;
  left: 18px;
  bottom: 14px;
  display: flex;
  gap: 14px;
  color: #8fa9b8;
  font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.1em;
}

.map-caption span::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 5px 1px 0;
  border-radius: 50%;
  background: var(--brand);
}

.signal-body {
  position: relative;
  left: auto;
  right: auto;
  bottom: auto;
  margin-top: 16px;
}

.signal-kicker {
  color: #a8bfcd;
  font-size: 13px;
}

.signal-title {
  max-width: 470px;
  margin: 10px 0 18px;
  color: var(--white);
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.signal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  color: #c4d6e2;
  font-size: 12px;
}

section {
  padding: 92px 0;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 36px;
}

.section-head h2 {
  max-width: 720px;
  margin-top: 14px;
  font-size: clamp(38px, 4.2vw, 62px);
  line-height: 1.06;
  letter-spacing: -0.045em;
}

.section-head p {
  max-width: 440px;
  margin: 0;
  color: var(--ink-600);
  font-size: 16px;
}

.section-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-dark);
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
}

.section-link svg {
  transition: transform 0.2s var(--ease);
}

.section-link:hover svg {
  transform: translateX(4px);
}

.insight-section {
  background: var(--paper-warm);
}

.insight-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.85fr 0.85fr;
  gap: 16px;
}

.insight-card {
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 24px;
  background: var(--white);
  transition:
    transform 0.25s var(--ease),
    box-shadow 0.25s var(--ease);
}

.insight-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
}

.insight-media {
  position: relative;
  min-height: 116px;
  min-width: 280px;
  margin: -24px -24px 22px;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
  background: var(--paper);
}

.insight-media::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.7;
  background-image:
    linear-gradient(
      135deg,
      transparent 0 47%,
      rgba(23, 198, 255, 0.2) 48% 49%,
      transparent 50%
    ),
    linear-gradient(
      25deg,
      transparent 0 62%,
      rgba(13, 27, 42, 0.08) 63% 64%,
      transparent 65%
    );
}

.insight-media::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  right: 18px;
  top: 12px;
  border: 1px solid rgba(23, 198, 255, 0.35);
  border-radius: 50%;
  box-shadow:
    0 0 0 20px rgba(23, 198, 255, 0.06),
    0 0 0 40px rgba(23, 198, 255, 0.035);
}

.insight-media span {
  position: absolute;
  z-index: 1;
  left: 18px;
  bottom: 14px;
  color: var(--brand-dark);
  font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
}

.insight-media.has-cover {
  height: 220px;
  min-height: 0;
  background: #10263b;
}

.insight-media.has-cover::before,
.insight-media.has-cover::after {
  display: none;
}

.insight-media.has-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured .insight-media {
  border-bottom-color: rgba(255, 255, 255, 0.12);
  background: #10263b;
}

.featured .insight-media::before {
  opacity: 0.5;
  background-image:
    linear-gradient(
      135deg,
      transparent 0 47%,
      rgba(23, 198, 255, 0.32) 48% 49%,
      transparent 50%
    ),
    linear-gradient(
      25deg,
      transparent 0 62%,
      rgba(255, 255, 255, 0.12) 63% 64%,
      transparent 65%
    );
}

.featured .insight-media::after {
  border-color: rgba(23, 198, 255, 0.42);
}

.featured .insight-media span {
  color: var(--brand);
}

.insight-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto -100%;
  width: 55%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(23, 198, 255, 0.75),
    transparent
  );
  transition: transform 0.7s var(--ease);
}

.insight-card:hover::before {
  transform: translateX(350%);
}

.insight-card.featured {
  min-height: 430px;
  color: var(--white);
  border-color: transparent;
  background: var(--ink-900);
}

.insight-card.featured::after {
  content: "01";
  position: absolute;
  right: 20px;
  bottom: 8px;
  color: rgba(255, 255, 255, 0.08);
  font-size: 150px;
  font-weight: 800;
  line-height: 1;
}

.card-type {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-dark);
}

.featured .card-type {
  color: var(--brand);
}

.card-type::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.insight-card h3 {
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 14px 0 14px;
  font-size: clamp(24px, 2.7vw, 38px);
  line-height: 1.13;
  letter-spacing: -0.04em;
}

.insight-card:not(.featured) h3 {
  font-size: 27px;
}

.insight-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--ink-600);
  font-size: 15px;
}

.featured p {
  color: #b9cbd7;
}

.card-footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 28px;
  font-size: 12px;
  color: var(--ink-500);
}

.featured .card-footer {
  color: #b9cbd7;
}

.card-footer svg {
  color: var(--brand);
}

.product-section {
  background: var(--white);
}

.product-frame {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 52px;
  align-items: start;
}

.product-copy h2 {
  max-width: 560px;
  margin: 14px 0 18px;
  font-size: clamp(42px, 4.7vw, 68px);
  line-height: 1.03;
  letter-spacing: -0.05em;
}

.product-copy > p {
  max-width: 500px;
  color: var(--ink-600);
  font-size: 17px;
}

.product-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-dark);
  font-size: 13px;
  font-weight: 800;
}

.product-label::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
}

.principles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.principle {
  min-height: 172px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--paper-warm);
  transition:
    transform 0.3s var(--ease),
    border-color 0.3s var(--ease),
    background 0.3s var(--ease);
}

.principle:hover {
  transform: translateY(-5px);
  border-color: rgba(23, 198, 255, 0.65);
  background: var(--brand-soft);
}

.principle-no {
  color: var(--brand-dark);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
}

.principle h3 {
  margin: 22px 0 8px;
  font-size: 20px;
  letter-spacing: -0.02em;
}

.principle h3 .principle-subtitle {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-left: 14px;
  padding-left: 12px;
  border-left: 3px solid var(--brand-dark);
  color: var(--brand-dark);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.01em;
  vertical-align: 0.08em;
  white-space: nowrap;
}

.principle p {
  margin: 0;
  color: var(--ink-600);
  font-size: 15px;
}

.explore-section {
  background: var(--ink-900);
  color: var(--white);
}

.explore-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 72px;
  align-items: end;
}

.explore-section .eyebrow {
  color: var(--brand);
}

.explore-section h2 {
  max-width: 720px;
  margin: 16px 0 18px;
  color: var(--white);
  font-size: clamp(34px, 4.2vw, 58px);
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.explore-section p {
  max-width: 580px;
  margin: 0;
  color: #b9cbd7;
  font-size: 16px;
}

.explore-card {
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
}

.explore-card .mini-label {
  color: var(--brand);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.explore-card h3 {
  margin: 16px 0 10px;
  color: var(--white);
  font-size: 26px;
  line-height: 1.14;
}

.explore-card p {
  color: #b9cbd7;
  font-size: 14px;
}

.explore-card a {
  color: var(--brand);
  font-weight: 750;
  font-size: 14px;
}

.team-values {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 20px;
}

.team-values span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 11px;
  border: 1px solid rgba(23, 198, 255, 0.28);
  border-radius: 999px;
  color: #d2e5ee;
  font-size: 12px;
}

.careers-section {
  background: var(--paper);
}

.careers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: end;
}

.careers-section h2 {
  max-width: 620px;
  margin: 16px 0 18px;
  font-size: clamp(38px, 4.4vw, 62px);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.careers-section .lead {
  max-width: 520px;
  margin: 0;
  color: var(--ink-600);
  font-size: 17px;
}

.career-card {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--white);
}

.career-card .mini-label {
  color: var(--brand-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.career-card h3 {
  margin: 14px 0 10px;
  font-size: 28px;
  line-height: 1.12;
}

.career-card p {
  margin: 0 0 20px;
  color: var(--ink-600);
  font-size: 15px;
}

.career-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 24px;
}

.career-role {
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  background: var(--brand-soft);
  color: var(--ink-800);
  font-size: 14px;
  font-weight: 700;
}

.cta-section {
  padding: 56px 0;
  background: var(--brand);
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.cta-inner h2 {
  max-width: 820px;
  margin: 12px 0 10px;
  color: var(--ink-950);
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.06;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

.cta-inner p {
  max-width: 520px;
  margin: 0;
  color: var(--ink-600);
  font-size: 16px;
}

.cta-inner .eyebrow {
  color: var(--brand-dark);
}

.cta-inner .button-dark {
  flex: 0 0 auto;
  min-height: 52px;
  padding: 0 28px;
  font-size: 16px;
}

@media (max-width: 980px) {
  .hero-grid,
  .product-frame,
  .explore-grid {
    grid-template-columns: 1fr;
    gap: 42px;
  }
  /* 覆盖 typography.css 中旧版 hero 的 48vw 宽度与绝对定位残留 */
  .hero .hero-copy {
    max-width: 100%;
    padding-top: 0;
  }
  .hero .hero-visual {
    position: static;
    inset: auto;
    width: 100%;
    height: auto;
    margin: 0;
    opacity: 1;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .hero .hero-visual img {
    object-position: center center;
    filter: none;
  }
  .careers-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hero {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .poster-card {
    justify-self: start;
  }
  .signal-card {
    min-height: 360px;
  }
  .insight-grid {
    grid-template-columns: 1fr 1fr;
  }
  .insight-card.featured {
    grid-column: 1 / -1;
    min-height: 340px;
  }
  .section-head {
    align-items: start;
    flex-direction: column;
    gap: 16px;
  }
  .cta-inner {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(var(--max), calc(100% - 36px));
  }
  section {
    padding: 78px 0;
  }
  .hero {
    padding: 58px 0 56px;
  }
  .hero h1 {
    font-size: clamp(40px, 11.5vw, 56px);
    letter-spacing: -0.075em;
  }
  .hero h1 span {
    white-space: normal;
  }
  .hero-product-line {
    margin-top: 20px;
    font-size: 14px;
  }
  .hero-lede {
    font-size: 16px;
  }
  .signal-card {
    min-height: 440px;
    padding: 20px;
  }
  .signal-body {
    margin-top: 14px;
  }
  .agent-map {
    height: 205px;
    margin: 18px 0 14px;
  }
  .agent-core {
    width: 78px;
    height: 78px;
  }
  .agent-core strong {
    font-size: 12px;
  }
  .agent-core::before {
    inset: -10px;
  }
  .agent-core::after {
    inset: -20px;
  }
  .map-caption {
    left: 12px;
    bottom: 10px;
    gap: 8px;
    font-size: 8px;
  }
  .insight-grid {
    grid-template-columns: 1fr;
  }
  .insight-card.featured {
    grid-column: auto;
  }
  .principles {
    grid-template-columns: 1fr;
  }
  .principle h3 .principle-subtitle {
    margin-left: 9px;
    padding-left: 8px;
    border-left-width: 2px;
    font-size: 12px;
  }
  .career-roles {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
  }
  [data-scroll-float] {
    transform: none !important;
  }
}

/* Keep only currently published news entries on the homepage. */
#news .insight-grid {
  display: grid;
}
#news .insight-grid .insight-card:not(.news-current) {
  display: none;
}
</style>
