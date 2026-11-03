<template>
  <main class="product-view">
    <section class="hero-detail">
      <div class="container">
        <span class="eyebrow">PRODUCT / AGENTIC TOS</span>
        <h1>看清运营全局，<span>让智能驱动行动。</span></h1>
        <p class="lede">
          让系统理解现场变化、连接工作流，并帮助团队在关键时刻更快、更有把握地行动。
        </p>
      </div>
    </section>

    <section class="detail-main product-capabilities">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">PRODUCT BLUEPRINT</span>
            <h2>覆盖港口运营的关键环节</h2>
          </div>
        </div>
        <div class="feature-grid">
          <article v-for="item in capabilities" :key="item.no" class="feature-card">
            <span class="feature-no">{{ item.no }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="product-showcase">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">CORE ADVANTAGES</span>
            <h2>为复杂现场而设计</h2>
          </div>
        </div>
        <article
          v-for="item in showcases"
          :key="item.no"
          class="showcase-row"
          :class="{ 'is-reversed': item.reversed }"
        >
          <figure class="showcase-visual" :class="item.visualClass">
            <img :src="item.image" :alt="item.alt" />
          </figure>
          <div class="showcase-copy">
            <span class="feature-no">{{ item.no }}</span>
            <h3>{{ item.title }}<span class="showcase-subtitle">{{ item.subtitle }}</span></h3>
            <p>{{ item.desc }}</p>
            <ul class="showcase-points">
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const capabilities = [
  {
    no: '01 / VESSEL PLANNING',
    title: '智能船舶计划',
    desc: '把到港预报、泊位分配、装卸计划和进度放在一起，帮助团队更早发现冲突、及时调整。'
  },
  {
    no: '02 / YARD OPERATIONS',
    title: '堆场精细管理',
    desc: '从堆存策略、箱位检索到翻箱安排，让堆场作业有一套清楚、可追踪的依据。'
  },
  {
    no: '03 / SMART GATE',
    title: '智能闸口',
    desc: '串起车辆预约、识别、排队和放行流程，减少司机等待，也减少现场反复确认。'
  },
  {
    no: '04 / AI TALLY',
    title: '智能理货',
    desc: '从自动理货、箱况识别到残损记录，验证视觉技术在现场到底能帮上多少忙。'
  },
  {
    no: '05 / OPERATIONS COCKPIT',
    title: '数据驾驶舱',
    desc: '把运营数据、关键指标、异常提醒和报表放在同一个页面，方便团队快速判断。'
  },
  {
    no: '06 / MULTI-AGENT',
    title: '多 Agent 协同',
    desc: '让不同业务 Agent 共享同一份现场信息；需要确认的地方，仍然由人来决定。'
  }
]

const showcases = [
  {
    no: '01 / DESIGN',
    title: '设计',
    subtitle: 'AI 原生',
    desc: '从真实作业流程出发，把现场数据、业务规则与 AI 能力放进同一个工作上下文，让系统理解变化并辅助团队行动。',
    points: ['以现场任务与运营目标为起点', '支持人机协同与可追溯决策'],
    image: '/assets/showcase-ai-native.png',
    alt: '集装箱码头 AI 调度引擎',
    visualClass: '',
    reversed: false
  },
  {
    no: '02 / ARCHITECTURE',
    title: '架构',
    subtitle: '持续演进',
    desc: '以模块化、可观测和可演进为基础，适配不同港口的系统环境，让产品随业务变化持续升级，而不必反复重建。',
    points: ['按能力拆分，支持持续迭代', '兼容既有系统与部署环境'],
    image: '/assets/showcase-cloud-native.png',
    alt: '可演进的云原生系统架构',
    visualClass: 'cloud',
    reversed: true
  },
  {
    no: '03 / ECOSYSTEM',
    title: '生态',
    subtitle: 'aPaaS 开放',
    desc: '通过 aPaaS 开放平台统一连接 API 与 AI 能力，让客户、伙伴与开发者共同扩展港口运营场景。',
    points: ['开放接口与可组合能力', '支持应用集成与生态共创'],
    image: '/assets/showcase-configurable.png',
    alt: '灵活可配置的业务规则控制台',
    visualClass: 'config',
    reversed: false
  },
  {
    no: '04 / SERVICE',
    title: '服务',
    subtitle: '系统高可用',
    desc: '以高可用设计、故障隔离与平滑切换保障系统连续运行，让升级、维护与现场变化不打断核心业务。',
    points: ['高可用运行与故障隔离', '升级维护平滑、可控'],
    image: '/assets/showcase-customer-success.png',
    alt: '全生命周期服务与支持运营',
    visualClass: 'service',
    reversed: true
  }
]
</script>

<style scoped>
.feature-card,
.job-card,
.article-card,
.story-card {
  background: transparent;
  box-shadow: none;
}

.hero-detail {
  padding-block: 112px 86px;
}

.hero-detail h1 {
  max-width: 900px;
  font-size: clamp(46px, 6vw, 76px);
}

.hero-detail .lede {
  max-width: 690px;
  font-size: 21px;
  line-height: 1.55;
}

.feature-grid {
  gap: 0;
  border-top: 1px solid var(--line);
}

.feature-card {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 20px;
  padding: 23px 0;
  border: 0;
  border-bottom: 1px solid var(--line);
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.feature-card h3 {
  margin: 0;
  font-size: 24px;
}

.feature-card p {
  margin: 0;
  max-width: 680px;
  line-height: 1.55;
}

.feature-no {
  grid-row: span 2;
}

.detail-main {
  padding-block: 76px;
}

.band {
  padding: 48px 0;
}

.band h2 {
  max-width: 900px;
}

.product-capabilities {
  padding-bottom: 58px;
  background: transparent !important;
}

.product-capabilities .feature-grid {
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;
  background: transparent !important;
}

.product-capabilities .feature-card {
  grid-template-columns: 1fr;
  gap: 10px;
  min-height: 150px;
  background: transparent !important;
  box-shadow: none !important;
}

.product-capabilities .feature-no {
  grid-row: auto;
}

.product-showcase {
  padding: 44px 0 36px;
  background: transparent;
  color: #08131f;
}

.product-showcase .section-head {
  margin-bottom: 22px;
}

.product-showcase .section-head h2 {
  color: #08131f;
}

.showcase-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.94fr);
  gap: clamp(40px, 7vw, 108px);
  align-items: center;
  padding-block: 36px;
}

.showcase-row:last-child {
  border-bottom: 0;
}

.showcase-row.is-reversed .showcase-visual {
  order: 2;
}

.showcase-visual {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border-radius: 16px;
  background: #0a2033;
  box-shadow: 0 18px 36px rgba(8, 28, 44, 0.12);
}

.showcase-visual img {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center 48%;
  filter: saturate(0.82) contrast(1.04);
}

.showcase-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5, 20, 34, 0.22), transparent 62%);
}

.showcase-visual.cloud {
  background:
    radial-gradient(circle at 62% 43%, rgba(52, 211, 255, 0.82) 0 4px, transparent 5px),
    radial-gradient(circle at 40% 67%, rgba(52, 211, 255, 0.55) 0 4px, transparent 5px),
    linear-gradient(140deg, #0a2942, #0d5e7d);
}

.showcase-visual.cloud::before {
  content: "";
  position: absolute;
  inset: 15% 12%;
  border: 1px solid rgba(136, 230, 255, 0.72);
  border-radius: 24px;
  background:
    repeating-linear-gradient(90deg, transparent 0 54px, rgba(136, 230, 255, 0.25) 55px 56px),
    repeating-linear-gradient(0deg, transparent 0 54px, rgba(136, 230, 255, 0.16) 55px 56px);
  transform: perspective(680px) rotateX(54deg) rotateZ(-14deg);
  animation: grid-drift 8s ease-in-out infinite;
}

.showcase-visual.config {
  background: linear-gradient(145deg, #061829, #0c5574);
}

.showcase-visual.config::before {
  content: "";
  position: absolute;
  inset: 12%;
  border: 1px solid rgba(117, 222, 255, 0.55);
  border-radius: 12px;
  background:
    linear-gradient(
      90deg,
      rgba(117, 222, 255, 0.18) 24%,
      transparent 24% 27%,
      rgba(117, 222, 255, 0.1) 27% 66%,
      transparent 66% 69%,
      rgba(117, 222, 255, 0.16) 69%
    ),
    repeating-linear-gradient(0deg, transparent 0 52px, rgba(117, 222, 255, 0.22) 53px 54px);
  box-shadow: 0 0 60px rgba(35, 203, 255, 0.18);
}

.showcase-visual.service {
  background:
    radial-gradient(circle at 35% 40%, rgba(40, 215, 255, 0.45) 0 3px, transparent 4px),
    radial-gradient(circle at 65% 63%, rgba(40, 215, 255, 0.6) 0 4px, transparent 5px),
    linear-gradient(145deg, #0a1b30, #123d58);
}

.showcase-visual.service::before {
  content: "";
  position: absolute;
  inset: 18%;
  border: 1px solid rgba(147, 229, 255, 0.38);
  border-radius: 50%;
  box-shadow:
    0 0 0 38px rgba(75, 213, 255, 0.05),
    0 0 0 76px rgba(75, 213, 255, 0.035);
  animation: wake-pulse 5s ease-in-out infinite;
}

.showcase-copy .feature-no {
  display: block;
  color: #008ab6;
  margin-bottom: 16px;
  font-size: 12px;
}

.showcase-copy h3 {
  margin: 0 0 16px;
  color: #08131f;
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.showcase-copy h3 .showcase-subtitle {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-left: 16px;
  padding-left: 14px;
  border-left: 3px solid #008ab6;
  color: #008ab6;
  font-size: clamp(16px, 1.35vw, 20px);
  font-weight: 800;
  letter-spacing: -0.01em;
  vertical-align: 0.1em;
  white-space: nowrap;
}

.showcase-copy > p {
  margin: 0;
  color: #476276;
  font-size: 17px;
  line-height: 1.7;
}

.showcase-points {
  display: grid;
  gap: 10px;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;
}

.showcase-points li {
  padding: 6px 0 6px 26px;
  color: #263f52;
  position: relative;
}

.showcase-points li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #009ccc;
  font-weight: 800;
}

@keyframes grid-drift {
  0%,
  100% {
    transform: perspective(680px) rotateX(54deg) rotateZ(-14deg) translateY(0);
  }
  50% {
    transform: perspective(680px) rotateX(54deg) rotateZ(-14deg) translateY(-16px);
  }
}

@keyframes wake-pulse {
  0%,
  100% {
    transform: scale(0.92);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 40px));
  }
  .product-capabilities .feature-grid,
  .showcase-row {
    grid-template-columns: 1fr;
  }
  .showcase-row.is-reversed .showcase-visual {
    order: 0;
  }
  .showcase-visual {
    min-height: 270px;
  }
  .showcase-row {
    padding-block: 30px;
  }
}

@media (max-width: 560px) {
  .feature-card {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .feature-no {
    grid-row: auto;
  }
  .showcase-copy h3 .showcase-subtitle {
    margin-left: 10px;
    padding-left: 9px;
    border-left-width: 2px;
    font-size: 14px;
  }
}
</style>
