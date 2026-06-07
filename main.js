i18next
  .use(i18nextHttpBackend)
  .use(ReactI18next.initReactI18next)
  .init(
    {
      fallbackLng: "pt",
      lng: "pt",
      backend: {
        loadPath: "locales/{{lng}}/translation.json",
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (err) => {
      if (err) console.error("Erro ao carregar i18next:", err);
      const rootElement = document.getElementById("root");
      const root = ReactDOM.createRoot(rootElement);
      root.render(React.createElement(App));
    },
  );

function App() {
  const { t, i18n } = ReactI18next.useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const projects = [
    {
      id: 1,
      titleKey: "proj1_title",
      descKey: "proj1_desc",
      image: "./assets/project1.png",
      projectUrl: "https://kayobass.github.io/guess-country/",
      codeUrl: "https://github.com/kayobass/guess-country",
    },
  ];

  const professionalExp = [
    {
      id: 1,
      titleKey: "job1_title",
      companyKey: "job1_company",
      periodKey: "job1_period",
      descKey: "job1_desc",
    },
  ];

  const academicExp = [
    {
      id: 1,
      degreeKey: "academic1_degree",
      institutionKey: "academic1_inst",
      yearKey: "academic1_year",
    },
  ];

  const languages = [
    {
      id: 1,
      nameKey: "lang_pt_name",
      levelKey: "lang_pt_level",
      percentage: 100,
    },
    {
      id: 2,
      nameKey: "lang_en_name",
      levelKey: "lang_en_level",
      percentage: 20,
    },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/kayobass", icon: "🐙" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kayoaruj/",
      icon: "🔗",
    },
    {
      name: "E-mail",
      url: "mailto:devarujo@aol.com",
      icon: "✉️",
    },
  ];

  const stacks = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "header",
      null,
      React.createElement(
        "div",
        { className: "logo" },
        React.createElement("h1", null, "Kayo Araujo | AI"),
      ),
      React.createElement(
        "nav",
        { className: "nav-menu" },
        React.createElement("a", { href: "#about" }, t("menu_about")),
        React.createElement("a", { href: "#stacks" }, t("menu_stacks")),
        React.createElement("a", { href: "#projects" }, t("menu_projects")),
        React.createElement(
          "a",
          { href: "#professional" },
          t("menu_professional"),
        ),
        React.createElement("a", { href: "#academic" }, t("menu_academic")),
        React.createElement("a", { href: "#contact" }, t("menu_contact")),
      ),
      React.createElement(
        "div",
        { className: "lang-toggle" },
        React.createElement(
          "button",
          { onClick: () => changeLanguage("pt") },
          "PT 🇧🇷",
        ),
        React.createElement(
          "button",
          { onClick: () => changeLanguage("en") },
          "EN 🇬🇧",
        ),
      ),
    ),

    // Seção Sobre com foto
    React.createElement(
      "section",
      { id: "about", className: "about-section" },
      React.createElement(
        "div",
        { className: "about-image" },
        React.createElement("img", {
          src: "./assets/foto.jpg",
          alt: "Minha foto",
          onError: (e) => {
            e.target.src = "https://via.placeholder.com/240x240?text=Foto";
          },
        }),
      ),
      React.createElement(
        "div",
        { className: "about-text" },
        React.createElement("h2", null, t("about_title")),
        React.createElement("p", null, t("about_text1")),
        React.createElement("p", null, t("about_text2")),
      ),
    ),

    // Seção Stacks
    React.createElement(
      "section",
      { id: "stacks" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("stacks_title"),
      ),
      React.createElement(
        "div",
        { className: "stacks-container" },
        stacks.map((stack) =>
          React.createElement(
            "div",
            { key: stack.name, className: "stack-badge" },
            React.createElement("img", {
              src: stack.logo,
              alt: stack.name,
              className: "stack-icon",
              onError: (e) => {
                e.target.src = `https://via.placeholder.com/20x20?text=${stack.name.charAt(0)}`;
              },
            }),
            React.createElement("span", null, stack.name),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { id: "projects" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("projects_title"),
      ),
      React.createElement(
        "div",
        { className: "card-grid" },
        projects.map((proj) =>
          React.createElement(
            "div",
            { key: proj.id, className: "card" },
            React.createElement(
              "div",
              { className: "project-title-container" },
              React.createElement("img", {
                src: proj.image,
                alt: t(proj.titleKey),
                className: "project-thumb",
                onError: (e) => {
                  e.target.src = "https://via.placeholder.com/40x40?text=Proj";
                },
              }),
              React.createElement(
                "h3",
                { className: "project-title" },
                t(proj.titleKey),
              ),
            ),
            React.createElement("p", null, t(proj.descKey)),
            React.createElement(
              "div",
              { className: "project-buttons" },
              React.createElement(
                "a",
                {
                  href: proj.projectUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn-primary",
                },
                `🌐 ${t("project_link")}`,
              ),
              React.createElement(
                "a",
                {
                  href: proj.codeUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn-secondary",
                },
                `🐙 ${t("code_link")}`,
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { id: "professional" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("professional_title"),
      ),
      React.createElement(
        "div",
        null,
        professionalExp.map((exp) =>
          React.createElement(
            "div",
            { key: exp.id, className: "timeline-item" },
            React.createElement(
              "div",
              { className: "timeline-title" },
              t(exp.titleKey),
            ),
            React.createElement(
              "div",
              { className: "timeline-sub" },
              `${t(exp.companyKey)} | ${t(exp.periodKey)}`,
            ),
            React.createElement("p", null, t(exp.descKey)),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { id: "academic" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("academic_title"),
      ),
      React.createElement(
        "div",
        null,
        academicExp.map((acad) =>
          React.createElement(
            "div",
            { key: acad.id, className: "timeline-item" },
            React.createElement(
              "div",
              { className: "timeline-title" },
              t(acad.degreeKey),
            ),
            React.createElement(
              "div",
              { className: "timeline-sub" },
              `${t(acad.institutionKey)} • ${t(acad.yearKey)}`,
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { id: "languages" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("languages_title"),
      ),
      React.createElement(
        "div",
        { className: "languages-grid" },
        languages.map((lang) =>
          React.createElement(
            "div",
            { key: lang.id, className: "language-card" },
            React.createElement(
              "div",
              { className: "language-header" },
              React.createElement(
                "span",
                { className: "language-name" },
                t(lang.nameKey),
              ),
              React.createElement(
                "span",
                { className: "language-level" },
                t(lang.levelKey),
              ),
            ),
            React.createElement(
              "div",
              { className: "progress-bar-bg" },
              React.createElement("div", {
                className: "progress-bar-fill",
                style: { width: `${lang.percentage}%` },
              }),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "section",
      { id: "contact" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("social_title"),
      ),
      React.createElement(
        "div",
        { className: "social-links" },
        socials.map((social) =>
          React.createElement(
            "a",
            {
              key: social.name,
              href: social.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "social-icon",
            },
            `${social.icon} ${social.name}`,
          ),
        ),
      ),
    ),

    React.createElement(
      "footer",
      null,
      `© ${new Date().getFullYear()} — ${t("footer_text")}`,
    ),
  );
}
