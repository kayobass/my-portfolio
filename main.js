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

  const [menuOpen, setMenuOpen] = React.useState(false);

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
      percentage: 33,
    },
  ];

  const courses = [
    {
      id: 1,
      titleKey: "course1_title",
      descKey: "course1_desc",
      durationKey: "course1_duration",
      yearKey: "course1_year",
      authorKey: "course1_author",
      linkKey: "course1_link",
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
      name: "Youtube",
      url: "https://www.youtube.com/@kayobass",
      icon: "▶️",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kayobasss/",
      icon: "📸",
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
        { className: `nav-menu${menuOpen ? " open" : ""}` },
        React.createElement(
          "a",
          { href: "#about", onClick: () => setMenuOpen(false) },
          t("menu_about"),
        ),
        React.createElement(
          "a",
          { href: "#stacks", onClick: () => setMenuOpen(false) },
          t("menu_stacks"),
        ),
        React.createElement(
          "a",
          { href: "#projects", onClick: () => setMenuOpen(false) },
          t("menu_projects"),
        ),
        React.createElement(
          "a",
          { href: "#professional", onClick: () => setMenuOpen(false) },
          t("menu_professional"),
        ),
        React.createElement(
          "a",
          { href: "#academic", onClick: () => setMenuOpen(false) },
          t("menu_academic"),
        ),
        React.createElement(
          "a",
          { href: "#courses", onClick: () => setMenuOpen(false) },
          t("courses_title"),
        ),
        React.createElement(
          "a",
          { href: "#contact", onClick: () => setMenuOpen(false) },
          t("menu_contact"),
        ),
      ),
      React.createElement(
        "button",
        {
          className: "hamburger-btn",
          onClick: () => setMenuOpen(!menuOpen),
          "aria-label": menuOpen ? "Close menu" : "Open menu",
        },
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null),
      ),
      React.createElement(
        "button",
        {
          className: "lang-toggle",
          onClick: () => changeLanguage(i18n.language === "pt" ? "en" : "pt"),
        },
        `${i18n.language === "pt" ? "EN" : "PT"} ${i18n.language === "pt" ? "🇬🇧" : "🇧🇷"}`,
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

    // Seção Stacks (skills)
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

    // Seção Projects
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

    // Seção Cursos e Certificações
    React.createElement(
      "section",
      { id: "courses" },
      React.createElement(
        "h2",
        { className: "section-title" },
        t("courses_title"),
      ),
      React.createElement(
        "div",
        null,
        courses.map((course) =>
          React.createElement(
            "div",
            { key: course.id, className: "course-card" },
            React.createElement(
              "div",
              { className: "course-header" },
              React.createElement(
                "h3",
                { className: "course-title" },
                t(course.titleKey),
              ),
              React.createElement(
                "div",
                { className: "course-meta" },
                t(course.authorKey),
              ),
              React.createElement(
                "div",
                { className: "course-details" },
                `${t(course.durationKey)} • ${t(course.yearKey)}`,
              ),
            ),
            React.createElement(
              "p",
              { className: "course-desc" },
              t(course.descKey),
            ),
            React.createElement(
              "a",
              {
                href: t(course.linkKey),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cert-link",
              },
              `📄 ${t("view_certificate")}`,
            ),
          ),
        ),
      ),
    ),

    // Seção Idiomas
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
