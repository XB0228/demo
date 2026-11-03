<template>
  <main class="article">
    <article class="container">
      <RouterLink class="back" to="/news">← 返回新闻</RouterLink>
      <div class="meta">公司动态 · 2026.09.17</div>
      <h1>今天，WIDEVANCE正式确定了愿景与使命</h1>
      <img
        class="cover"
        src="/assets/news-agentic-tos.jpg"
        alt="集装箱码头的智能协同网络"
      />
      <div class="prose">
        <h2>愿景</h2>
        <p>成为全球港航枢纽与现代供应链最受信赖的智能操作系统。</p>
        <h2>使命</h2>
        <p>
          以 Agentic TOS
          重新定义全球港航运营，连接智慧港口网络，让全球供应链更自主、更敏捷、更可靠。
        </p>
        <p>
          WIDEVANCE是一支专注于港口运营与数字化的AI
          Native团队。我们在港口运营、TOS、港口数字化及AI原生系统建设方面，积累了持续的实践与思考。
        </p>
        <p>
          我们相信，下一代TOS不应只是记录作业流程的系统。它还应能够理解现场运营情境，辅助团队决策，协调不同岗位与工作流，并帮助码头在面对变化时作出更快速、更可靠的响应。
        </p>
        <p>
          基于这一理解，我们即将推出 Agentic TOS 产品，以AI
          Native的方式推动码头运营升级。在提升智能化能力的同时，产品也将充分兼顾与既有系统的集成、权限管理、操作可追溯及人工监督等实际需求。
        </p>
        <p>
          港口的未来，离不开技术与业务的共同演进。我们期待与更多行业伙伴一起洞察趋势、分享实践，推动这一愿景真正落地。
        </p>
        <p>
          欢迎港口运营者、港口科技负责人、TOS专家、自动化工程师及供应链行业伙伴与我们交流，共同探索港航运营的下一代未来。
        </p>
        <p><strong>Think Wide, Advance Beyond.</strong></p>
      </div>
    </article>
  </main>
</template>

<style scoped>
.container {
  width: min(900px, calc(100% - 48px));
  margin: 0 auto;
}

.article {
  padding: 88px 0 110px;
}

.meta {
  color: #007ea6;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.article h1 {
  max-width: 900px;
  margin: 18px 0 28px;
  font-size: var(--section-title-size, clamp(32px, 3.2vw, 48px)) !important;
  line-height: 1.18;
  letter-spacing: -0.055em;
}

.cover {
  width: 100%;
  margin: 0 0 44px;
  border-radius: 16px;
  aspect-ratio: 16/8;
  object-fit: cover;
}

.prose {
  max-width: 720px;
  font-size: 18px;
  line-height: 1.9;
  color: #29455d;
}

.prose h2 {
  margin: 42px 0 12px;
  color: #08131f;
  font-size: 28px;
  line-height: 1.2;
}

.back {
  display: inline-flex;
  margin-bottom: 28px;
  color: #007ea6;
  font-weight: 750;
}
</style>
