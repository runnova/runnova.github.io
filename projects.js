const PROJECTS = [
  {
    title: "Data representation",
    items: [
      {
        id: "pomelo",
        name: "pomelo",
        url: "https://runnova.github.io/pomelo",
        icon: "https://cdn-icons-png.flaticon.com/512/5302/5302369.png",
        short: "domain model editor for presentations",
        links: [
          { label: "repo ", url: "https://github.com/runnova/pomelo" },
          { label: "SolidJS", url: "https://www.solidjs.com" },
        ],
        long: [
          "A domain model editor for presentations, built with SolidJS and Vite.",
        ],
      },
      {
        id: "lroots",
        name: "linkedRoots",
        url: "https://adthoughtsglobal.github.io/lroots/",
        icon: "https://cdn-icons-png.magnific.com/256/12893/12893129.png?semt=ais_white_label",
        short: "structured data representation format and browser",
        links: [
          { label: "repo", url: "https://github.com/adthoughtsglobal/lroots" },
        ],
        long: [
          "LinkedRoots is a lightweight, structured content platform designed for focused navigation and deep learning. Instead of traditional web pages, it organizes information as hierarchical nodes, each with a title and data (text, image, video or file).",
          "Nodes can link internally within the same document or externally across different LRML files, creating a decentralized network of interconnected content. You navigate one node at a time while the client tracks the path you've taken, giving easy backtracking and clear breadcrumbs.",
          "Content is written in Linked Root Markup Language (LRML), an XML format made of nestable node tags that contain data tags. Sub nodes can be defined inline or linked from an external LRML file. It's aimed at education, research and curated knowledge sharing, at your own pace.",
        ],
      },
      {
        id: "overthink",
        name: "Overthink",
        url: "https://adthoughtsglobal.github.io/overthink/",
        icon: "https://adthoughtsglobal.github.io/overthink/assets/logo.png",
        short: "webapp for making hierarchical lists with ease",
        links: [
          {
            label: "repo",
            url: "https://github.com/adthoughtsglobal/overthink",
          },
        ],
        // No README in the repo; kept minimal on purpose.
        long: [
          "A hierarchical notes and task app. Items can be broken down into subtasks as deeply as you need, so big, complicated things stay manageable.",
        ],
      },
    ],
  },
  {
    title: "Web based environment projects",
    items: [
      {
        id: "novaos",
        name: "NovaOS",
        url: "https://runnova.github.io/nova/",
        icon: "https://runnova.github.io/NovaOS/n.png",
        short: "Web Desktop",
        links: [
          { label: "Try It", url: "https://runnova.github.io/NovaOS" },
          { label: "Repo", url: "https://github.com/runnova/NovaOS" },
          { label: "Developer", url: "https://runnova.github.io/dev" },
          {
            label: "Standalone",
            url: "https://github.com/adthoughtsglobal/NovaSingleFile",
          },
          {
            label: "store repo",
            url: "https://github.com/adthoughtsglobal/Nova-Store",
          },
        ],
        long: [
          "The vanilla JavaScript operating system for the web, because web apps can run without a cloud sign-in.",
          "NovaOS is a fully offline, GPLv3 web desktop that runs entirely in your browser. It exists for user privacy: it's self-hostable with no cloud dependency, your data stays on your device, and what apps can know is what you give them. It can boot into a fresh desktop within about 5 seconds on an average modern device when self-hosted.",
          "It's mobile friendly and packaged as a progressive web app, with a codebase built entirely on plain HTML, vanilla JavaScript and CSS, so it keeps working offline. Imported files can be encrypted with a password, locally, without the password being stored anywhere.",
          "It ships with a suite of default apps and a built-in store for more, plus panel widgets and a virtual file system for building apps locally. The Nova ecosystem also covers themes, permission systems and styling standards. The design favors stability, control and customizability, with a simple UI and no flashy effects or heavy animation.",
        ],
      },
      {
        id: "ozone",
        name: "Ozone Shell",
        url: "https://ozoneshell.github.io",
        icon: "https://avatars.githubusercontent.com/u/265530475?s=200&v=4",
        short: "turn your webapps into shared web runtimes",
        links: [
          {
            label: "repo",
            url: "https://github.com/ozoneshell/ozoneshell.github.io",
          },
        ],
        long: [
          "Ozone shell let's you integrate multiple webapps without leaving the client side, by locally serving multiple web app suites in a single domain, creating a shared state, filesystem and IPC.",

          "By creating an Ozone instance, you can run all your apps within Ozone while also being able to sideload and integrate with additional apps into your instance.",

          "Apps cannot access the VFS, IPC, or system events without the required permissions. Permissions can only be granted by both the user and the hosting instance. Though instances may provide trusted default apps without installation prompts.",

          "This architecture not only saves server computation for massive static web apps, makes it easier to setup complicated native like functionality and creates a way for web apps to safely integrate locally.",

          "And Ozone does it all in two vanilla javascript files.",
        ],
      },
      {
        id: "apple",
        name: "OWD apple",
        url: "https://runnova.github.io/apple/",
        icon: "https://runnova.github.io/apple/assets/apple.png",
        short: "web based environment for running web worker based apps",
        links: [
          { label: "Try", url: "https://runnova.github.io/apple/" },
          { label: "repo", url: "https://github.com/runnova/apple" },
        ],
        long: [
          "Apple is a functional, local, CLI-based JavaScript environment with a virtual file system and an application system, where applications receive parameters on startup.",
          "It isn't intended for regular users, though anyone can use it. It has no visual interface by default and is an abstract system built purely for the sake of abstraction. It's open source and accepts pull requests.",
        ],
      },
    ],
  },
  {
    title: "Rotur",
    items: [
      {
        id: "indigo",
        name: "indigo",
        url: "https://runnova.github.io/indigo/",
        icon: "https://runnova.github.io/indigo/icon_small.svg",
        short: "originchats client",
        links: [
          { label: "repo", url: "https://github.com/runnova/indigo" },
          { label: "SolidJS", url: "https://www.solidjs.com" },
          { label: "Rotur", url: "https://rotur.dev" },
        ],
        long: [
          "The cooler OriginChats client, currently under development. It's licensed under MPL 2.0 and open to contributions.",
        ],
      },
      {
        title: "deprecated",
        items: [
          {
            id: "orion",
            name: "orion",
            url: "https://runnova.github.io/orion",
            icon: "https://runnova.github.io/orion/oclogo.png",
            short: "feature rich rotur client",
            links: [{ label: "repo", url: "https://github.com/runnova/orion" }],
            long: [
              "OrionClient is a reliable, functional and feature-rich client system for roturTW, built in pure HTML, CSS and JS with no external dependencies.",
              "It has features that are one of a kind, like credit dashboards and sidebar applications, and focuses on keeping network and memory load low for both the client and the server. It's based on Nova.CSS, with themes and a collection of Rotur apps that were moved over from NovaOS.",
              "It exists for user control: one of the most well-integrated, community-driven Rotur clients. While it follows Rotur's policy, Rotur has no control over how OrionClient implements features, and it offers an alternate UI that tells users what they're enabling through subtle but intuitive cues.",
            ],
          },
          {
            id: "orla",
            name: "orla",
            url: "https://adthoughtsglobal.github.io/Orla/",
            icon: "https://adthoughtsglobal.github.io/Orla/assets/favicon.png",
            short: "CLI, themable originchats client",
            links: [
              {
                label: "repo",
                url: "https://github.com/adthoughtsglobal/Orla",
              },
            ],
            long: [
              "Orla is a TUI-like chat application built on OriginChats, a client unlike any other. It isn't a fully fledged client that supports every feature as it's released; it's a more stable, optimal and reliable alternative with basic functionality plus a few convenient extras.",
              "It has three panes: an interactive logs pane for messages and actions, a commands and logs pane for navigating and seeing updates, and an information search pane.",
              "It also has a powerful theme engine: you can mix multiple theme stylesheets to build custom themes.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        id: "spa",
        name: "SPA",
        url: "https://adthoughtsglobal.github.io/spa/",
        icon: "",
        short: "a collection of useful single page apps and tools.",
        links: [],
        long: [
          "Single page apps, made with AI or without, that each do one specific task and are very handy when you need them.",
          "Examples include a tool that keeps your face at 50% of the webcam feed locally, a multi-step audio recorder with undo, a PNG to ICN converter for OriginOS, a player that sends different audio files to each ear, Rotur token and economy rank checkers, a scrolling titlebar teleprompter, a basic new tab page, and SpeedyOC for using OriginChats on low-end devices.",
        ],
      },
    ],
  },
  {
    title: "upcoming",
    items: [
      {
        id: "ledger",
        name: "Ledger",
        url: "",
        icon: "https://cdn-icons-png.flaticon.com/512/6664/6664427.png",
        unreleased: true,
        short: "my most complicated project yet, it's on development!",
        links: [],
        long: ["My most complicated project yet. It's in development."],
      },
      {
        id: "cyrus",
        name: "Cyrus",
        url: "",
        icon: "temp/cyrus.png",
        unreleased: true,
        short: "lightweight identity and connectivity layer for P2P apps.",
        links: [],
        long: ["A lightweight identity and connectivity layer for P2P apps."],
      },
    ],
  },
];

const PROJECT_INDEX = {};

function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function renderLinks(links) {
  const frag = document.createDocumentFragment();
  if (!links.length) return frag;
  frag.append(" [");
  links.forEach((l, i) => {
    if (i) frag.append(" \u2022 ");
    frag.append(el("a", { href: l.url, textContent: l.label }));
  });
  frag.append("]");
  return frag;
}

function renderLeaf(p) {
  PROJECT_INDEX[p.id] = p;
  const a = el("a");
  if (p.url) a.href = p.url;
  if (p.unreleased) a.className = "unreadable";
  if (p.icon) a.append(el("img", { src: p.icon, alt: p.name }), " ");
  a.append(p.name);

  const li = el(
    "li",
    { className: "leaf" },
    a,
    " " + p.short,
    renderLinks(p.links),
  );
  li.dataset.id = p.id;
  li.tabIndex = 0; // keyboard focus shows the description too
  return li;
}

function renderNode(node) {
  if (!node.items) return renderLeaf(node);
  return el("li", {}, node.title, renderList(node.items));
}

function renderList(nodes) {
  return el("ul", {}, ...nodes.map(renderNode));
}

// ---------------------------------------------------------------------------
// Detail panel (column 3)
// ---------------------------------------------------------------------------
const detail = document.getElementById("detail");
let activeLeaf = null;

function showDetail(leaf) {
  if (leaf === activeLeaf) return;
  const p = PROJECT_INDEX[leaf.dataset.id];
  if (!p) return;

  activeLeaf?.classList.remove("active");
  activeLeaf = leaf;
  leaf.classList.add("active");

  const head = el("div", { className: "detail-head" });
  if (p.icon) head.append(el("img", { src: p.icon, alt: "" }));
  head.append(el("h2", { textContent: p.name }));

  detail.replaceChildren(
    head,
    el("p", { className: "detail-short", textContent: p.short }),
    ...p.long.map((t) => el("p", { textContent: t })),
  );
}

function initProjects() {
  const root = document.getElementById("projects");
  root.replaceChildren(...PROJECTS.map(renderNode));

  // Delegated listeners: one set covers every .leaf.
  // The panel keeps the last project shown when the pointer leaves, so you
  // can move over to column 3 and read it.
  const leafOf = (e) => e.target.closest(".leaf");
  root.addEventListener("mouseover", (e) => {
    const leaf = leafOf(e);
    if (leaf) showDetail(leaf);
  });
  root.addEventListener("focusin", (e) => {
    const leaf = leafOf(e);
    if (leaf) showDetail(leaf);
  });
  // Touch screens have no hover: tapping a row (not a link) shows it.
  root.addEventListener("click", (e) => {
    const leaf = leafOf(e);
    if (leaf && !e.target.closest("a")) showDetail(leaf);
  });
}

initProjects();
