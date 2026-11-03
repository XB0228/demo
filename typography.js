(() => {
  const isChinese = document.documentElement.lang === "zh-CN";
  const contactHref = isChinese ? "widevance联系.html" : "widevance-contact-en.html";
  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 72);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    header.querySelectorAll(".primary-nav a, .mobile-nav a, .nav a").forEach((link) => {
      const label = link.textContent.trim();
      if (!link.classList.contains("button") && label === (isChinese ? "联系团队" : "Contact")) link.remove();
      if (label === (isChinese ? "关于我们" : "About")) link.textContent = isChinese ? "团队" : "Team";
    });
    header.querySelectorAll(".nav-actions .button, .mobile-nav .button, .nav .button").forEach((link) => {
      link.textContent = isChinese ? "联系我们" : "Contact us";
      link.href = contactHref;
    });
    const languageLink = header.querySelector(".nav-actions .language-switch, .nav .language-switch, .nav .lang");
    if (languageLink) {
      const switcher = document.createElement("div");
      const trigger = document.createElement("button");
      const menu = document.createElement("div");
      const currentLanguage = document.createElement("span");
      const alternateLanguage = document.createElement("a");
      switcher.className = "language-menu";
      trigger.className = "language-trigger";
      trigger.type = "button";
      trigger.setAttribute("aria-label", isChinese ? "选择语言" : "Choose language");
      trigger.setAttribute("aria-expanded", "false");
      trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17M12 3.5c2.2 2.35 3.3 5.18 3.3 8.5S14.2 18.15 12 20.5C9.8 18.15 8.7 15.32 8.7 12S9.8 5.85 12 3.5Z"></path></svg>';
      menu.className = "language-options";
      currentLanguage.className = "language-current";
      currentLanguage.textContent = isChinese ? "中文" : "English";
      alternateLanguage.href = languageLink.href;
      alternateLanguage.textContent = isChinese ? "English" : "中文";
      alternateLanguage.lang = isChinese ? "en" : "zh-CN";
      menu.append(currentLanguage, alternateLanguage);
      switcher.append(trigger, menu);
      languageLink.remove();
      (header.querySelector(".nav-actions") || header.querySelector(".nav")).append(switcher);
      const closeMenu = () => { switcher.classList.remove("is-open"); trigger.setAttribute("aria-expanded", "false"); };
      trigger.addEventListener("click", (event) => { event.stopPropagation(); const isOpen = switcher.classList.toggle("is-open"); trigger.setAttribute("aria-expanded", String(isOpen)); });
      document.addEventListener("click", (event) => { if (!switcher.contains(event.target)) closeMenu(); });
      document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
    }
    const legacyNav = header.querySelector(".nav:not(.primary-nav)");
    if (legacyNav) {
      const navShell = header.querySelector(".nav-shell");
      const navRight = document.createElement("div");
      const navActions = document.createElement("div");
      navRight.className = "nav-right";
      navActions.className = "nav-actions";
      legacyNav.classList.add("primary-nav");
      legacyNav.querySelectorAll(":scope > .button, :scope > .language-menu").forEach((item) => navActions.append(item));
      navRight.append(legacyNav, navActions);
      navShell.append(navRight);
    }
  }

  const footer = document.querySelector(".site-footer");
  if (footer && !footer.classList.contains("site-footer--shared")) {
    const links = isChinese
      ? { home: "widevance官网原型.html", product: "widevance产品.html", news: "widevance新闻.html", team: "widevance关于我们.html", careers: "widevance招聘.html", contact: "widevance联系.html" }
      : { home: "widevance官网原型-en.html", product: "widevance-product-en.html", news: "widevance-news-en.html", team: "widevance-about-en.html", careers: "widevance-careers-en.html", contact: "widevance-contact-en.html" };
    footer.classList.add("site-footer--shared");
    footer.innerHTML = isChinese
      ? `<div class="container footer-top"><div class="footer-brand"><a href="${links.home}" aria-label="WIDEVANCE 首页"><img src="assets/logo-dark-transparent-trim.png" alt="WIDEVANCE 维度万思" /></a><p>Think Wide, Advance Beyond.</p></div><div class="footer-links"><div><h3>浏览</h3><a href="${links.product}">产品</a><a href="${links.news}">新闻</a><a href="${links.team}">团队</a></div><div><h3>公司</h3><a href="${links.careers}">招聘</a><a href="${links.contact}">联系团队</a><a href="${links.contact}?source=industry#contact-form">加入行业对话</a></div><div><h3>后续</h3><a href="${links.product}">产品动态</a><a href="${links.news}">新闻更新</a><a href="${links.careers}">团队成长</a></div></div></div><div class="container footer-bottom"><span>© 2026 WIDEVANCE. 版权所有。</span><span>备案号：待备案</span></div>`
      : `<div class="container footer-top"><div class="footer-brand"><a href="${links.home}" aria-label="WIDEVANCE home"><img src="assets/logo-dark-transparent-trim.png" alt="WIDEVANCE" /></a><p>Think Wide, Advance Beyond.</p></div><div class="footer-links"><div><h3>Explore</h3><a href="${links.product}">Product</a><a href="${links.news}">News</a><a href="${links.team}">Team</a></div><div><h3>Company</h3><a href="${links.careers}">Careers</a><a href="${links.contact}">Contact</a><a href="${links.contact}?source=industry#contact-form">Industry conversation</a></div><div><h3>Next</h3><a href="${links.product}">Product updates</a><a href="${links.news}">News updates</a><a href="${links.careers}">Team growth</a></div></div></div><div class="container footer-bottom"><span>© 2026 WIDEVANCE. All rights reserved.</span><span>Building the next operating layer for ports.</span></div>`;
  }

  const footerFiling = document.querySelector(".site-footer .footer-bottom span:last-child");
  if (footerFiling) footerFiling.textContent = isChinese ? "备案号：待备案" : "ICP Filing No.: Pending";

  const contactForm = document.querySelector(".contact-form form");
  const emailInput = contactForm?.querySelector('input[type="email"]');
  const messageInput = contactForm?.querySelector("textarea");
  if (contactForm) {
    contactForm.noValidate = true;
    const params = new URLSearchParams(window.location.search);
    if (params.get("source") === "subscription" && messageInput && !messageInput.value) messageInput.value = isChinese ? "订阅资讯" : "Subscription updates";
    const controls = Array.from(contactForm.querySelectorAll(".field input, .field textarea"));
    const errors = new Map();
    controls.forEach((control) => {
      const error = document.createElement("p");
      error.id = `${control.id}-error`;
      error.className = "field-error";
      error.setAttribute("aria-live", "polite");
      control.insertAdjacentElement("afterend", error);
      control.setAttribute("aria-describedby", error.id);
      errors.set(control, error);
    });
    const publicDomains = new Set(["163.com", "126.com", "outlook.com", "hotmail.com", "live.com", "gmail.com", "qq.com", "foxmail.com", "yahoo.com", "icloud.com", "sina.com", "sohu.com", "139.com", "189.cn", "yeah.net", "proton.me"]);
    const getDomain = () => emailInput.value.trim().toLowerCase().split("@").pop() || "";
    const isBusinessEmail = () => { const domain = getDomain(); return Boolean(domain && ![...publicDomains].some((item) => domain === item || domain.endsWith(`.${item}`))); };
    const clearError = (control) => { control.setCustomValidity(""); errors.get(control).textContent = ""; };
    const setError = (control, message) => { control.setCustomValidity(message); errors.get(control).textContent = message; };
    controls.forEach((control) => control.addEventListener("input", () => clearError(control)));
    contactForm.addEventListener("submit", (event) => {
      controls.forEach((control) => clearError(control));
      const nameInput = contactForm.querySelector("#name");
      if (nameInput?.required && !nameInput.value.trim()) setError(nameInput, "请填写姓名。");
      const emailValue = emailInput?.value.trim() || "";
      if (emailInput?.required && !emailValue) {
        setError(emailInput, "请填写企业邮箱。");
      } else if (emailValue && emailInput.validity.typeMismatch) {
        setError(emailInput, "请输入有效的邮箱地址。");
      } else if (emailValue && !isBusinessEmail()) {
        setError(emailInput, "请使用企业邮箱提交。暂不支持 163、126、Outlook、Gmail 等公共邮箱。");
      }
      const invalid = controls.find((control) => control.validationMessage);
      if (!invalid) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      invalid.focus();
    }, true);
  }

  const featuredCarousel = document.querySelector(".news-highlight-window");
  if (featuredCarousel) {
    const track = featuredCarousel.querySelector(".news-highlight-track");
    const cards = track ? Array.from(track.children).filter((card) => card.classList.contains("news-highlight-card")) : [];
    if (track && cards.length > 1) {
      const dots = document.createElement("div");
      dots.className = "news-carousel-dots";
      dots.setAttribute("role", "tablist");
      dots.setAttribute("aria-label", isChinese ? "选择重点新闻" : "Select featured news");
      featuredCarousel.insertAdjacentElement("afterend", dots);

      let activeIndex = 0;
      let timerId = null;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dotButtons = cards.map((card, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "news-carousel-dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", isChinese ? `显示第 ${index + 1} 条重点新闻` : `Show featured news ${index + 1}`);
        dot.addEventListener("click", () => {
          const direction = index === activeIndex ? "next" : (index > activeIndex ? "next" : "previous");
          setActive(index, direction);
          start();
        });
        dots.append(dot);
        return dot;
      });
      const setActive = (nextIndex, direction = "next") => {
        activeIndex = (nextIndex + cards.length) % cards.length;
        cards.forEach((card, index) => {
          card.classList.remove("is-active", "is-next", "is-previous", "is-hidden");
          const offset = (index - activeIndex + cards.length) % cards.length;
          if (index === activeIndex) card.classList.add("is-active");
          else if (cards.length === 2) card.classList.add(direction === "previous" ? "is-previous" : "is-next");
          else if (offset === 1) card.classList.add("is-next");
          else if (offset === cards.length - 1) card.classList.add("is-previous");
          else card.classList.add("is-hidden");
          const isActive = index === activeIndex;
          card.setAttribute("aria-hidden", String(!isActive));
          card.tabIndex = isActive ? 0 : -1;
          dotButtons[index].classList.toggle("is-active", isActive);
          dotButtons[index].setAttribute("aria-selected", String(isActive));
        });
      };
      const stop = () => { if (timerId) window.clearInterval(timerId); timerId = null; };
      const start = () => {
        stop();
        if (!reducedMotion) timerId = window.setInterval(() => setActive(activeIndex + 1, "next"), 3000);
      };
      ["mouseenter", "focusin", "touchstart"].forEach((eventName) => featuredCarousel.addEventListener(eventName, stop, { passive: true }));
      ["mouseleave", "focusout", "touchend"].forEach((eventName) => featuredCarousel.addEventListener(eventName, start));
      document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
      setActive(0);
      start();
    }
  }
})();
