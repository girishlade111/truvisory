# 🌟 Truvisory - Resources To Learn Anything 🌟

[![HitCount](http://hits.dwyl.com/girishlade111/truvisory.svg)](http://hits.dwyl.com/girishlade111/truvisory)
[![Objective](https://img.shields.io/badge/objective-sharing-important)](https://img.shields.io/badge/objective-sharing-important)
[![Outcome](https://img.shields.io/badge/outcome-interaction-blueviolet)](https://img.shields.io/badge/outcome-interaction-blueviolet)
[![SideEffects](https://img.shields.io/badge/sideeffect-inspiration-informational)](https://img.shields.io/badge/sideeffect-inspiration-informational)
[![License](https://img.shields.io/github/license/girishlade111/truvisory)](https://github.com/girishlade111/truvisory/blob/master/LICENSE)
[![Stars](https://img.shields.io/github/stars/girishlade111/truvisory)](https://github.com/girishlade111/truvisory/stargazers)

> **Truvisory** is an open-source initiative designed to share top-tier learning resources covering a wide array of domains including **Technology, Design, Self Branding, Motivation, and Career Growth**.
>
> *Knowledge is the foundation of progress - by sharing it with others, we create a better world.* 🌍

---

## 📑 Table of Contents

- [🚀 System Architecture](#-system-architecture)
- [✨ Key Features](#-key-features)
- [🛠️ Dev Stack](#️-dev-stack)
- [📖 Instructions & Getting Started](#-instructions--getting-started)
- [⚙️ Configurations](#️-configurations)
- [📊 Project Statistics](#-project-statistics)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🔗 Helpful Resource Links](#-helpful-resource-links)

---

## 🚀 System Architecture

Below is the **System Architecture** of Truvisory, visually representing the robust React-based frontend structure, UI component flow, and deployment pipeline.

```mermaid
flowchart TB
    %% Client Layer
    subgraph ClientLayer ["🖥️ Client Layer (Browser)"]
        ReactApp["⚛️ React App"] --> Components["🧩 Components"]
        Components --> Router["🔀 Router (react-router-dom)"]
        Components --> ThemeProv["🎨 Theme Provider (styled-components)"]
        Components --> StateMgmt["💾 State Management (React Hooks)"]
    end

    %% UI Components
    subgraph UIComponents ["🎨 UI Components"]
        Header["Header"]
        HomeLanding["Home / Landing"]
        PostsList["Posts List"]
        SocialMedia["Social Media"]
        Footer["Footer"]
        ToggleSwitch["Dark/Light Toggle"]
    end

    %% Styling & Theme
    subgraph StylingLayer ["💅 Styling Layer"]
        SassCSS["Sass / SCSS"]
        StyledComponents["Styled Components"]
    end

    subgraph ThemeSystem ["🌓 Theme System"]
        LightTheme["Light Theme"]
        DarkTheme["Dark Theme"]
        GlobalStyles["Global Styles"]
    end

    %% Assets
    subgraph Assets ["📁 Assets"]
        Images["Images & SVGs"]
        Fonts["Custom Fonts"]
        Icons["Font Awesome Icons"]
    end

    %% Deployment
    subgraph Deployment ["🚀 Deployment"]
        GHPages["GitHub Pages"]
        BuildOut["Optimized Build Output"]
    end

    %% Connections
    ReactApp --> UIComponents
    UIComponents --> StylingLayer
    UIComponents --> ThemeSystem
    StylingLayer --> Assets
    StateMgmt --> GHPages
    GHPages --> BuildOut
```

### 🔄 CI/CD & Build Workflow

```mermaid
flowchart LR
    %% Workflow Steps
    subgraph Development
        DevLocal["💻 Local Dev"] --> YarnStart["▶️ yarn start"]
        YarnStart --> HotReload["🔥 Hot Reload"]
    end

    subgraph Build
        HotReload --> YarnBuild["📦 yarn build"]
        YarnBuild --> OptBundle["⚡ Optimized Bundle"]
    end

    subgraph Deploy
        OptBundle --> GhPagesCmd["🚀 gh-pages"]
        GhPagesCmd --> LiveSite["🌐 Live Website"]
    end
```

---

## ✨ Key Features

Truvisory is packed with features focused on **user experience** and **seamless access** to content:

- **📚 Comprehensive Resource Library**: Curated, high-quality learning resources covering highly demanded skills across multiple domains.
- **🌓 Dynamic Dark/Light Mode**: Smooth, user-preference-based theme switching configured with `styled-components`, allowing users to toggle between light and dark themes effortlessly.
- **📱 Fully Responsive Design**: Mobile-first architecture ensuring the web app looks gorgeous on any device, from mobile phones to large desktop monitors.
- **🗂️ Intuitive Category Navigation**: Content is cleanly organized into specific domains including:
  - 🔌 **Technology** - Programming, ML/DL, Data Science, Cloud Computing
  - 🎨 **Design** - UI/UX, Frontend Design Principles
  - 💼 **Self Branding** - Personal Branding, LinkedIn Optimization
  - 🚀 **Career Growth** - MS Admissions, Interview Preparation
  - 💡 **Motivation** - Productivity, Lifestyle Improvements
  - 🌐 **Open Source** - Contributing to Open Source Projects
- **🔗 Social Media Integration**: Quick links to connect, collaborate, and share with the broader community through integrated social media buttons.
- **⚡ Fast and Optimized UI**: Built with React's virtual DOM and animated with `react-reveal` for a snappy, interactive experience.
- **🎯 SEO Friendly**: Optimized for search engines with proper meta tags and semantic HTML structure.
- **♿ Accessibility Compliant**: Designed with accessibility in mind, ensuring all users can navigate and consume content easily.

---

## 🛠️ Dev Stack

Built leveraging **modern, industry-standard web technologies** to ensure scalability, performance, and developer happiness.

### **Frontend Core**

| Technology | Version | Description |
|------------|---------|-------------|
| **[React.js](https://reactjs.org/)** | `^16.13.1` | Component-based UI library for building the user interface |
| **[React Router DOM](https://reactrouter.com/)** | `^5.2.0` | Declarative client-side routing for navigation |
| **[Reactstrap](https://reactstrap.github.io/)** | `^8.4.1` | Bootstrap 4 components built for React |

### **Styling & Theming**

| Technology | Version | Description |
|------------|---------|-------------|
| **[Styled Components](https://styled-components.com/)** | `^5.1.1` | CSS-in-JS for scoped and dynamic theming |
| **[Sass](https://sass-lang.com/)** | `^1.32.0` | CSS extension language for advanced UI styling |

### **Animations & Tooling**

| Technology | Version | Description |
|------------|---------|-------------|
| **[React Reveal](https://www.revealjs.com/)** | `^1.2.2` | High-performance scroll animations |
| **[Create React App](https://create-react-app.dev/)** | `3.4.1` | Robust build setup and project scaffolding |
| **[gh-pages](https://www.npmjs.com/package/gh-pages)** | `^3.0.0` | Seamless branch deployment for GitHub Pages |

### **Testing & Quality**

| Technology | Version | Description |
|------------|---------|-------------|
| **[Jest](https://jestjs.io/)** | Bundled | JavaScript testing framework |
| **[React Testing Library](https://testing-library.com/react)** | `^9.3.2` | Testing utilities for React components |

---

## 📖 Instructions & Getting Started

Follow these **detailed instructions** to get the project up and running locally.

### 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v12+ recommended) - [Download Here](https://nodejs.org/)
- **Yarn** or **npm** (Yarn is preferred for this project) - [Download Yarn](https://yarnpkg.com/)
- **Git** - [Download Git](https://git-scm.com/)

### 💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/girishlade111/truvisory.git
   cd truvisory
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # OR
   npm install
   ```

3. **Start the development server:**
   ```bash
   yarn start
   ```
   > *The app will automatically launch in your default browser at `http://localhost:3000` with hot-reloading enabled.*

### 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Runs the app in development mode with hot-reload |
| `yarn build` | Builds the app for production into the `build` folder |
| `yarn test` | Launches the test runner in interactive watch mode |
| `yarn deploy` | Builds the application and pushes it to the `gh-pages` branch |
| `yarn eject` | Ejects from Create React App configuration (irreversible) |

---

## ⚙️ Configurations

To customize Truvisory for your own use, you can configure several core files:

### 1️⃣ **Theme Configuration** (`src/theme.js`)

You can tweak the primary colors, secondary colors, and background hex codes to personalize your Light and Dark modes.

```javascript
export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}
```

> 💡 **Tip:** Add more theme properties like `primary`, `secondary`, `accent`, etc., to expand your theming system.

### 2️⃣ **Homepage & Deployment** (`package.json`)

Before deploying, make sure to update the `"homepage"` key to point to your GitHub Pages URL:

```json
{
  "homepage": "https://<your-username>.github.io/<your-repo-name>/"
}
```

### 3️⃣ **Environment Variables**

Create a `.env` file at the root to configure custom titles or keys if you decide to extend the project:

```env
REACT_APP_TITLE=Truvisory Custom
REACT_APP_DESCRIPTION=Your custom description here
```

### 4️⃣ **Browser Support** (`package.json`)

The project supports the following browsers out of the box:

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

### 5️⃣ **PWA Configuration** (`public/manifest.json`)

Customize the Progressive Web App manifest for installability:

```json
{
  "name": "Truvisory",
  "short_name": "Truvisory",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

## 📊 Project Statistics

Here are some highlighted metrics showcasing the **scale and impact** of the project:

| Metric | Value | Description |
|--------|-------|-------------|
| **📚 Curated Resources** | **100+** | LinkedIn Resource Posts with valuable learning content |
| **🧩 Reusable Components** | **15+** | Modular React components for maintainability |
| **📂 Content Categories** | **6** | Major categories: Technology, Design, Self Branding, Career, Open Source, Motivation |
| **💰 Pricing** | **100% Free** | Completely free and open source |
| **🌐 Browser Support** | **Cross-Browser** | Chrome, Firefox, Safari, Edge compatible |
| **📱 Mobile Ready** | **Yes** | Fully responsive mobile-first design |
| **♿ Accessibility** | **WCAG** | Compliant with accessibility standards |

---

## 🤝 Contributing

We ❤️ contributions! Whether it's a bug fix, a new feature, or adding an awesome new resource link, your help is appreciated.

### 📝 Contribution Guidelines

1. **Fork** the repository by clicking the "Fork" button on the top right.
2. **Clone** your forked repository:
   ```bash
   git clone https://github.com/<your-username>/truvisory.git
   ```
3. Create a **feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
4. **Commit** your changes with a descriptive message:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push** to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
6. Open a **Pull Request** against the `master` branch.

> *Please ensure you read our [Contributing.md](Contributing.md) for detailed guidelines before submitting your PR.*

### 🐛 Reporting Issues

Found a bug? Create an issue with:
- Clear title and description
- Steps to reproduce the bug
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

```
MIT License

Copyright (c) 2020 Girish Lade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Helpful Resource Links

Explore some of our most popular curated resources:

- 💻 **Tech:** [Best resources to learn ML/DL and Data Science](https://www.linkedin.com/posts/ashutosh-hathidara-88710b138_mlfyworld-datascience-deeplearning-activity-6657887148286533632-6nBn)
- ☁️ **Cloud:** [Best resources to learn cloud architecture and computing](https://www.linkedin.com/posts/ashutosh-hathidara-88710b138_mlfyworld-cloud-knowledge-activity-6666189626375495680-Rc4p)
- 🎨 **Design:** [Best resources to learn UI/Front end Design](https://www.linkedin.com/posts/ashutosh-hathidara-88710b138_mlfyworld-designprinciples-ui-activity-6662611269973090304-LpdL)
- 📈 **Career:** [Start to end procedure to get admit for MS in USA](https://www.linkedin.com/posts/ashutosh-hathidara-88710b138_mlfyworld-msinusa-knowledge-activity-6670888411349565440-h3aR)
- 🧠 **Motivation:** [4 Golden Rules to push your work efficiency and lifestyle](https://www.linkedin.com/posts/ashutosh-hathidara-88710b138_mlfyworld-motivation-inspiration-activity-6685395886412984320-2UBT)

---

*Crafted with ❤️ by [Girish Lade](https://www.linkedin.com/in/ashutosh-hathidara-88710b138/)*