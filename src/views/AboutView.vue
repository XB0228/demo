<template>
  <main class="about-view">
    <section class="hero-detail brand-hero">
      <div class="container brand-hero-grid">
        <div class="brand-hero-copy">
          <span class="eyebrow">TEAM / 团队</span>
          <h1>AI-Native团队，<span>专注于港口运营与数字化</span></h1>
          <p class="brand-intro">
            我们是一支把 AI、复杂系统能力与港航行业实践放在一起的团队。以更广的视角理解产业，用更扎实的方式把产品做进现场。
          </p>
        </div>
        <aside class="brand-meaning-card" aria-label="团队概览">
          <span class="brand-index">TEAM / AT A GLANCE</span>
          <div>
            <strong>来自头部科技公司</strong>
            <p>核心成员来自科技公司，拥有复杂系统与产品研发经验。</p>
          </div>
          <div>
            <strong>深入真实港口</strong>
            <p>从港口流程、现场约束和客户长期需求出发，持续验证产品价值。</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="detail-main brand-belief-section">
      <div class="container">
        <div class="brand-section-heading">
          <span class="eyebrow">HOW WE THINK / 品牌理念</span>
          <div>
            <p class="brand-slogan">Think Wide, Advance Beyond.</p>
            <h2>广思致远，突破无界</h2>
          </div>
        </div>
        <div class="belief-grid">
          <article class="belief-card">
            <span class="belief-no">01 / THINK WIDE</span>
            <h3>全局思维</h3>
            <h4>以全局思维，看见系统全貌</h4>
            <p>
              我们穿透业务表象，理解港口、供应链与客户长期需求之间的联系；立足现实，也为未来留出空间。
            </p>
          </article>
          <article class="belief-card belief-card-accent">
            <span class="belief-no">02 / ADVANCE BEYOND</span>
            <h3>持续突破</h3>
            <h4>以持续突破，走向长期进步</h4>
            <p>
              我们持续迭代技术、产品与服务，与客户并肩，把创新变成可验证、可落地、可持续的进步。
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="detail-main direction-section">
      <div class="container">
        <div class="brand-section-heading direction-heading">
          <span class="eyebrow">VISION &amp; MISSION / 前进方向</span>
          <h2>我们为什么出发，<br />又将走向哪里</h2>
        </div>
        <div class="direction-grid">
          <article class="direction-card vision-card">
            <span class="direction-label">VISION / 愿景</span>
            <h3>成为全球港航枢纽与现代供应链最受信赖的智能操作系统。</h3>
          </article>
          <article class="direction-card mission-card">
            <span class="direction-label">MISSION / 使命</span>
            <h3>以 Agentic TOS 重新定义全球港航运营，连接智慧港口网络，让全球供应链更自主、更敏捷、更可靠。</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="detail-main brand-team-section">
      <div class="container brand-team-grid">
        <div>
          <span class="eyebrow">TEAM CAPABILITIES / 团队能力</span>
          <h2>来自科技公司，<br />也深入真实港口</h2>
        </div>
        <div class="brand-team-copy">
          <p>
            我们融合 AI 原生产品与工程能力、复杂系统建设经验和港航行业实践，从真实流程和长期需求出发，与客户共同探索 Agentic TOS。
          </p>
          <div class="team-principles" aria-label="团队工作原则">
            <span><b>01</b> AI 原生产品与工程</span>
            <span><b>02</b> 复杂系统建设能力</span>
            <span><b>03</b> 港航场景理解与共创</span>
          </div>
          <RouterLink class="brand-text-link" to="/careers">加入团队 →</RouterLink>
        </div>
      </div>
    </section>

    <section class="team-members-section">
      <div class="container">
        <div class="team-members-heading">
          <div>
            <span class="eyebrow">THE PEOPLE / 团队成员</span>
            <h2>一支面向现场、一起把事做成的团队</h2>
          </div>
        </div>
        <div class="team-member-grid">
          <article
            v-for="member in members"
            :key="member.name"
            class="team-member-card"
            :class="{ 'team-member-card-featured': member.featured }"
          >
            <div class="member-portrait">
              <img :src="member.photo" :alt="`${member.role} ${member.name} abstract role illustration`" />
            </div>
            <div class="member-copy">
              <span class="member-role">{{ member.role }}</span>
              <h3>{{ member.name }}</h3>
              <p class="member-tagline">{{ member.tagline }}</p>
              <p>{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const members = [
  {
    role: 'CEO',
    name: 'Cedric',
    tagline: '把复杂系统带到真实现场',
    bio: '拥有16年大型系统、云平台与技术架构经验，曾任首席架构师、总工程师等技术管理岗位。曾参与自动化集装箱码头 TOS 关键核心技术攻坚，相关工作覆盖云原生 TOS 架构设计、技术验证与试点研发。长期聚焦 Agentic TOS 与 AI 驱动的港口智能系统，撰写《面向AI时代的智能体集装箱码头操作系统》等行业研究。',
    photo: '/assets/team-ceo-abstract-unified-v3.png',
    featured: true
  },
  {
    role: 'CAIO',
    name: 'Alex',
    tagline: '让智能体从想法走进系统',
    bio: '中国地质大学硕士，AI 与分布式系统技术专家。拥有大型分布式系统及 AI Agent 项目经验，专注智能体架构与 AI 工程化落地。',
    photo: '/assets/team-caio-abstract-unified-v3.png'
  },
  {
    role: 'CTO',
    name: 'Ray',
    tagline: '把长期可靠写进架构',
    bio: '武汉理工大学硕士，资深技术架构专家。曾参与自动化集装箱码头 TOS 关键核心技术攻坚，负责船舶、泊位计划等核心模块；具备大型系统架构与分布式技术经验。',
    photo: '/assets/team-cto-abstract-unified-v3.png'
  },
  {
    role: 'CPO',
    name: 'Camille',
    tagline: '把复杂流程，抽象为能用好用的产品',
    bio: '哥伦比亚大学硕士，兼具算法工程与 B2B 产品背景。曾深度参与 TOS 需求调研与产品设计，擅长将复杂业务流程梳理为清晰、可执行的产品方案。',
    photo: '/assets/team-cpo-abstract-unified-v3.png'
  },
  {
    role: 'COO',
    name: 'Lawrence',
    tagline: '让每一次协同，都落在现场',
    bio: '来自科技企业的资深业务与运营专家，拥有20余年行业一线作业及管理经验，深谙码头生产运营、核心作业流程与跨部门协同。',
    photo: '/assets/team-coo-abstract-unified-v3.png'
  }
]
</script>

<style scoped>
@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 40px));
  }
}
</style>
