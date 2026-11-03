<template>
  <main class="careers-view">
    <section class="hero-detail">
      <div class="container">
        <span class="eyebrow">CAREERS / JOIN US</span>
        <h1>让港口运营，<span>因你更进一步</span></h1>
        <p class="lede">
          与 AI
          原生的创始团队并肩，把复杂的港口现场做成真正可用的产品。加入早期团队，你会直接参与产品方向、客户问题与团队建设，让每一次实践留下可见的影响。
        </p>
      </div>
    </section>

    <section class="detail-main">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">OPEN ROLES</span>
            <h2>一起把产品从想法做成现场能用的东西</h2>
          </div>
        </div>
        <div class="jobs">
          <article v-for="job in jobs" :key="job.title" class="job-card">
            <span class="meta">{{ job.meta }}</span>
            <h3>{{ job.title }}</h3>
            <p>{{ job.desc }}</p>
            <div class="job-art" aria-hidden="true" v-html="job.art"></div>
          </article>
        </div>
      </div>
    </section>

    <section class="band">
      <div class="container careers-cta">
        <div class="careers-copy">
          <span class="eyebrow">COME BUILD WITH US</span>
          <h2>和 AI 原生团队一起，做有真实影响的工作</h2>
          <p>请将简历、作品或你想做的事情发送至 hr@widevance.com。</p>
        </div>
        <t-button
          class="button"
          tag="a"
          href="mailto:hr@widevance.com?subject=加入WIDEVANCE"
          >联系招聘团队</t-button
        >
      </div>
    </section>
  </main>
</template>

<script setup>
const jobs = [
  {
    meta: 'PRODUCT',
    title: '产品与设计',
    desc: '和港口团队一起梳理问题，参与产品定义、体验设计和验证。',
    art: '<svg viewBox="0 0 48 48" fill="none"><rect x="5" y="8" width="38" height="26" rx="3" stroke="#0A2033" stroke-width="2"/><path d="M5 16H43" stroke="#1A9FD9" stroke-width="2"/><rect x="11" y="22" width="11" height="8" rx="1.5" stroke="#0A2033" stroke-width="2"/><path d="M28 25H37M28 29H33" stroke="#1A9FD9" stroke-width="2" stroke-linecap="round"/><path d="M13 42H35" stroke="#0A2033" stroke-width="2" stroke-linecap="round"/></svg>'
  },
  {
    meta: 'SALES',
    title: '销售与业务拓展',
    desc: '与港口和供应链客户一起理解真实业务，把新一代港航运营的价值带给更多现场。',
    art: '<svg viewBox="0 0 48 48" fill="none"><path d="M6 38L18 26L27 30L42 12" stroke="#0A2033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 12H42V23" stroke="#1A9FD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 44H42" stroke="#1A9FD9" stroke-width="2" stroke-linecap="round" opacity="0.35"/></svg>'
  },
  {
    meta: 'INDUSTRY',
    title: '行业解决方案',
    desc: '深入港口现场，帮助团队把实际需求变成可以落地的方案。',
    art: '<svg viewBox="0 0 48 48" fill="none"><path d="M5 14H20M5 22H15M5 30H20" stroke="#0A2033" stroke-width="2" stroke-linecap="round"/><path d="M24 22H34M30 18L34 22L30 26" stroke="#1A9FD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="35" y="13" width="10" height="18" rx="2" stroke="#1A9FD9" stroke-width="2"/></svg>'
  },
  {
    meta: 'PARTNERSHIP',
    title: '实习与合作',
    desc: '如果你对港口、物流、企业软件或 AI 感兴趣，欢迎和我们聊聊。',
    art: '<svg viewBox="0 0 48 48" fill="none"><circle cx="19" cy="21" r="11" stroke="#0A2033" stroke-width="2"/><circle cx="29" cy="21" r="11" stroke="#1A9FD9" stroke-width="2"/><path d="M11 41H37" stroke="#0A2033" stroke-width="2" stroke-linecap="round"/></svg>'
  }
]
</script>

<style scoped>
.detail-main .job-card {
  position: relative;
  min-height: 218px;
  padding: 24px 152px 24px 26px;
  overflow: hidden;
}

.detail-main .job-card h3 {
  margin-top: 12px;
  font-size: 23px;
}

.job-art {
  position: absolute;
  top: 50%;
  right: 24px;
  width: 92px;
  height: 92px;
  transform: translateY(-50%);
  color: #0a2033;
  opacity: 1;
}

/* v-html 注入的图形节点不带 scope 属性，需要 :deep() 命中 */
.job-art :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}

.band {
  padding: 42px 0;
}

.careers-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
}

.careers-copy {
  max-width: 900px;
}

.careers-cta h2 {
  margin: 8px 0;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.14;
}

.careers-cta p {
  margin: 0;
}

.careers-cta .button {
  flex: 0 0 auto;
  color: #fff;
  background: #08131f;
}

@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 40px));
  }
}

@media (max-width: 700px) {
  .detail-main .job-card {
    min-height: 190px;
    padding-right: 100px;
  }
  .job-art {
    width: 64px;
    height: 64px;
    right: 16px;
  }
  .careers-cta {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
