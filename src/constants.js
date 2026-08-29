import cyImg from "./assets/images/cypressio-original.svg";
import pwImg from "./assets/images/playwright-original.svg";
import jmImg from "./assets/images/jmeter_image.png";

// Comprehensive Categorized Tech Stack for QA Automation Engineer
export const techCategories = [
  {
    id: "automation",
    category: "TEST AUTOMATION",
    description: "Core automation engines, web drivers, mobile and test runners",
    skills: [
      { name: "Playwright", link: pwImg, level: "Advanced", experience: "E2E, API & Component Testing" },
      { name: "Selenium WebDriver", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/selenium/selenium-original.svg", level: "Advanced", experience: "Grid, POM & Parallel Execution" },
      { name: "Cypress", link: cyImg, level: "Proficient", experience: "Web & Network Request Stubs" },
      { name: "Appium", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/android/android-original.svg", level: "Proficient", experience: "Mobile App Automation" },
      { name: "TestNG", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-plain.svg", level: "Advanced", experience: "Data-Driven & Parallel Suites" },
      { name: "Cucumber (BDD)", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/cucumber/cucumber-plain.svg", level: "Advanced", experience: "Gherkin & Living Documentation" },
    ]
  },
  {
    id: "programming",
    category: "PROGRAMMING LANGUAGES",
    description: "Strong foundation in object-oriented and modern typed languages",
    skills: [
      { name: "Java (JDK 21)", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-plain.svg", level: "Advanced", experience: "Modern Java & OOP Architecture" },
      { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", level: "Advanced", experience: "Strict Types & Custom Fixtures" },
      { name: "Python", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-plain.svg", level: "Intermediate", experience: "Automation & Scripting" },
      { name: "SQL", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original-wordmark.svg", level: "Advanced", experience: "Database & Backend Validation" },
      { name: "C Language", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg", level: "Intermediate", experience: "Algorithms & Core Fundamentals" },
    ]
  },
  {
    id: "api",
    category: "API & PERFORMANCE TESTING",
    description: "REST, GraphQL, microservices contract testing and load simulation",
    skills: [
      { name: "REST Assured", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced", experience: "Fluent BDD, POJO & Schema Assertions" },
      { name: "GraphQL", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg", level: "Advanced", experience: "Queries, Mutations & Schema Validations" },
      { name: "Playwright API", link: pwImg, level: "Advanced", experience: "Isolated Request Contexts & Fast Seeding" },
      { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced", experience: "Collections, Variables & Newman CLI" },
      { name: "Bruno", link: "https://raw.githubusercontent.com/usebruno/bruno/main/packages/bruno-app/src/assets/images/logo.png", level: "Advanced", experience: "Git-Integrated Open-Source API Client" },
      { name: "Apache JMeter", link: jmImg, level: "Proficient", experience: "Thread Groups & Performance Testing" },
      { name: "Wiremock", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-plain.svg", level: "Proficient", experience: "API Mocking & Stubbing" },
    ]
  },
  {
    id: "testing-types",
    category: "TESTING SPECIALIZATIONS",
    description: "Comprehensive software verification across all quality engineering disciplines",
    skills: [
      { name: "REST-to-GraphQL Migration", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg", level: "Advanced", experience: "Schema Parity & Payload Validation" },
      { name: "Regression Testing", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/selenium/selenium-original.svg", level: "Advanced", experience: "Continuous Automated Release Gates" },
      { name: "End-to-End (E2E) Testing", link: pwImg, level: "Advanced", experience: "Complete User & Business Journeys" },
      { name: "Functional Testing", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", level: "Advanced", experience: "Complex Workflows & Edge Cases" },
      { name: "Shift-Left Testing", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", level: "Advanced", experience: "Pre-Merge PR Quality Checks" },
      { name: "Smoke & Sanity Testing", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/cucumber/cucumber-plain.svg", level: "Advanced", experience: "Deployment & Environment Verification" },
    ]
  },
  {
    id: "cicd",
    category: "CI/CD, LOGGING & DEVOPS",
    description: "Continuous integration pipelines, build orchestration, and observability",
    skills: [
      { name: "Jenkins", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jenkins/jenkins-original.svg", level: "Advanced", experience: "Automated Build & Test Pipelines" },
      { name: "GitLab CI/CD", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/gitlab/gitlab-original.svg", level: "Proficient", experience: "Pipeline YAML & Stage Triggers" },
      { name: "AWS CloudWatch Logs", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: "Proficient", experience: "Log Analytics & Defect Observability" },
      { name: "Git & GitHub", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", level: "Advanced", experience: "Version Control & Branching Workflows" },
      { name: "Maven", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/maven/maven-original.svg", level: "Advanced", experience: "Build Lifecycles, Surefire & Plugins" },
      { name: "Allure Reporting", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-plain.svg", level: "Advanced", experience: "Visual Analytics, Traces & Test Metrics" },
    ]
  },
  {
    id: "tools",
    category: "IDEs & PRODUCTIVITY TOOLS",
    description: "Engineering development environments and debugging toolsets",
    skills: [
      { name: "IntelliJ IDEA", link: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/intellij/intellij-original.svg", level: "Advanced", experience: "Java, TestNG & REST Assured Profiling" },
      { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: "Advanced", experience: "TypeScript, Playwright & Bruno API Debugging" },
      { name: "Postman & Bruno Clients", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "Advanced", experience: "Interactive API Testing & Collections" },
    ]
  }
];

export const contactLinks = [
  { name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/ashwanid/' },
  { name: 'GitHub', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link: 'https://github.com/ashwanicoding' },
  { name: 'LeetCode', url: 'https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000', link: 'https://leetcode.com/u/ashwani_44/' },
  { name: 'Instagram', url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png', link: 'https://www.instagram.com/ashwani_44' },
];

// Expandable What I Do / Services Data
export const whatIDoServices = [
  {
    id: "test-automation",
    number: "01",
    title: "TEST AUTOMATION",
    tagline: "Designing maintainable automated test suites for reliable and scalable software delivery.",
    description: "Architecting resilient, scalable end-to-end automation frameworks using Playwright, Selenium WebDriver, and TypeScript/Java. Emphasizing Page Object Models, auto-waiting assertions, parallel execution, and zero-tolerance for flaky tests to accelerate release confidence.",
    deliverables: [
      "Multi-browser parallel test execution (Chromium, Firefox, WebKit)",
      "Page Object Model & Component-based architectural patterns",
      "Network mocking, route interception, and state hydration",
      "Comprehensive HTML, Allure, and video trace reporting"
    ],
    tools: ["Playwright", "Selenium", "TypeScript", "Java 21", "TestNG", "Appium"],
    codeSnippet: `// Resilient Playwright POM Execution
const checkoutPage = new CheckoutPage(page);
await checkoutPage.navigate();
await checkoutPage.applyPromo('QA-AUTOMATION-2026');
await expect(checkoutPage.discountTotal).toBeVisible();`
  },
  {
    id: "web-app-testing",
    number: "02",
    title: "WEB APPLICATION TESTING",
    tagline: "Validating functionality, usability, workflows, integrations, and end-to-end application behavior.",
    description: "Comprehensive functional and non-functional verification across complex single-page applications and enterprise web portals. Ensuring cross-browser compatibility, dynamic UI responsiveness, accessibility checks, and seamless user interaction journeys.",
    deliverables: [
      "Cross-browser and viewport responsive verification",
      "Deep workflow validation covering complex checkout & data entry",
      "Form validation, boundary analysis, and state error handling",
      "DOM stability verification and dynamic hydration checks"
    ],
    tools: ["Playwright", "Selenium", "Cypress", "Chrome DevTools"],
    codeSnippet: `// Multi-viewport responsive verification
test.use({ viewport: { width: 1440, height: 900 } });
await page.goto('/dashboard');
await expect(page.getByRole('navigation')).toBeVisible();`
  },
  {
    id: "api-testing",
    number: "03",
    title: "API & GRAPHQL TESTING",
    tagline: "Testing REST & GraphQL APIs, schema migration, request transformation, and validation.",
    description: "Building automated API test harnesses with Playwright API, REST Assured, Postman, and Bruno. Verifying GraphQL queries, mutations, REST-to-GraphQL migration parity, HTTP status codes, JSON schema contracts, and response payloads.",
    deliverables: [
      "Automated REST & GraphQL endpoint test suites",
      "GraphQL query & mutation validation with negative scenario testing",
      "REST-to-GraphQL migration parity and request transformation checks",
      "Fast API test data seeding with Bruno & Postman collections"
    ],
    tools: ["Playwright API", "GraphQL", "REST Assured", "Bruno", "Postman", "Wiremock"],
    codeSnippet: `// GraphQL Query & Mutation Verification with Playwright API
const response = await request.post('/graphql', {
  data: {
    query: \`query GetBasket($id: ID!) { basket(id: $id) { id totalItems status } }\`,
    variables: { id: 'BASKET-1029' }
  }
});
expect(response.ok()).toBeTruthy();
const body = await response.json();
expect(body.data.basket.status).toBe('ACTIVE');`
  },
  {
    id: "regression-testing",
    number: "04",
    title: "REGRESSION & MIGRATION TESTING",
    tagline: "Ensuring new releases and modernizations do not break existing functionality with structured test suites.",
    description: "Creating living regression test packs and migration verification suites that compare legacy vs modernized platform responses (e.g., ATG to Commercetools, REST to GraphQL). Ensuring zero unintended side effects when new features are merged.",
    deliverables: [
      "Selective test grouping with TestNG (@Test(groups={'smoke', 'regression'}))",
      "Legacy to modernized platform data consistency verification",
      "Automated sanity suites for post-deployment health checks",
      "Root cause defect isolation with AWS CloudWatch logs"
    ],
    tools: ["TestNG", "Cucumber BDD", "Playwright", "AWS CloudWatch", "GitLab CI/CD"],
    codeSnippet: `@Test(groups = {"regression", "migration"})
public void verifyCommercetoolsBasketParity() {
  BasketResponse legacy = atgClient.getBasket("BK-992");
  BasketResponse modern = ctClient.getBasket("BK-992");
  Assert.assertEquals(modern.getTotalPrice(), legacy.getTotalPrice());
}`
  },
  {
    id: "cicd-quality",
    number: "05",
    title: "CI/CD QUALITY ENGINEERING",
    tagline: "Integrating automated testing into continuous integration and delivery workflows.",
    description: "Implementing Shift-Left testing principles by integrating test automation directly into Jenkins, GitLab CI/CD, and GitHub Actions pipelines. Preventing defective pull requests from reaching production via automated pull request status checks and Allure reporting.",
    deliverables: [
      "Automated test execution on Jenkins and GitLab CI/CD triggers",
      "Automated PR merge gates blocking broken builds",
      "Allure reporting dashboards with video, trace & screenshot artifacts",
      "Automated failure triage and CloudWatch log correlation"
    ],
    tools: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Maven", "Allure Report"],
    codeSnippet: `// GitLab CI / Jenkins Test Stage
stage('API Regression Gate') {
  steps {
    sh 'npx playwright test --config=playwright.api.config.ts'
    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
  }
}`
  },
  {
    id: "test-strategy",
    number: "06",
    title: "TEST STRATEGY & ARCHITECTURE",
    tagline: "Building structured testing approaches focused on risk, coverage, reliability, and release confidence.",
    description: "Designing end-to-end quality blueprints that align engineering teams on testing pyramids, tool selection, defect classification, and living BDD documentation using Cucumber and Gherkin syntax.",
    deliverables: [
      "Test pyramid structuring (Unit vs Integration vs API vs E2E)",
      "BDD scenario authoring with product & engineering teams",
      "Flaky test quarantine and resolution workflows",
      "Quality metrics tracking: pass rates, execution duration, and defect escape rates"
    ],
    tools: ["Cucumber BDD", "Gherkin", "TestNG", "Clean Architecture", "Wiremock"],
    codeSnippet: `Feature: Basket Migration Quality Gate
  Scenario: Modernized basket calculation parity
    Given active cart on Commercetools modernized facade
    When user updates item quantity to 3
    Then total price matches ATG legacy formula within 0% margin`
  }
];

// Professional Experience at UST (1.7 Years of Experience)
export const experienceData = [
  {
    company: "UST",
    role: "QA Automation Engineer",
    period: "January 2025 — Present",
    location: "India",
    type: "Full-Time",
    shortSummary: "Architecting API automation frameworks from scratch using Playwright, TypeScript, GraphQL testing, and Shift-Left CI/CD quality gates.",
    keyResponsibilities: [
      "Built an API automation framework from scratch using Playwright and TypeScript for GraphQL API testing and automated regression testing.",
      "Developed reusable API utilities and test scripts to validate GraphQL queries, mutations, response payloads, and negative scenarios.",
      "Performed REST-to-GraphQL migration testing by comparing API behavior, response data, and functional outcomes to ensure migration accuracy.",
      "Collaborated with developers to analyze GraphQL schema changes, troubleshoot API issues, and improve test coverage and data validation.",
      "Integrated automated API tests into the CI/CD pipeline to support continuous regression testing."
    ],
    toolsUsed: ["Playwright", "TypeScript", "GraphQL", "REST Assured", "Postman", "Bruno", "Jenkins", "GitLab CI/CD", "AWS CloudWatch Logs", "Git"],
    highlightMetric: "Built from scratch GraphQL & REST automation with 100% migration parity"
  }
];

// Education Data from Resume
export const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "REVA University, Bangalore",
    period: "2022 — 2024",
    grade: "CGPA: 8.8",
    description: "Specialized in advanced software engineering, distributed systems, database management, and automated test architectures."
  },
  {
    degree: "B.Sc. CS (Bachelor of Science in Computer Science)",
    institution: "AKS University, Satna",
    period: "2019 — 2022",
    grade: "CGPA: 8.8",
    description: "Core computer science foundation covering algorithms, object-oriented programming, data structures, and database systems."
  }
];

// Certifications Data from Resume
export const certificationsData = [
  {
    title: "Cucumber Essential Training",
    issuer: "LinkedIn Learning",
    date: "Nov 2024",
    skill: "BDD Testing & Gherkin Specifications",
    link: "https://www.linkedin.com/learning/certificates/"
  },
  {
    title: "Selenium Essential Training",
    issuer: "LinkedIn Learning",
    date: "Oct 2024",
    skill: "Selenium WebDriver & Test Automation",
    link: "https://www.linkedin.com/learning/certificates/"
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Apr 2024",
    skill: "Azure Cloud Concepts, Architecture & Services",
    link: "https://learn.microsoft.com/en-us/users/ashwanikumar-44"
  }
];

// Real QA Projects with Comprehensive Case Studies (Aligned strictly with Resume)
export const projectData = [
  {
    id: "ecommerce-basket-orchestrator",
    name: 'Retail E-Commerce Basket Orchestrator - API & Migration Automation',
    category: 'API & Migration Automation',
    type: 'API AUTOMATION',
    url: 'https://github.com/AshwaniCoding',
    tags: ['Playwright', 'TypeScript', 'GraphQL', 'REST API', 'Commercetools', 'Migration'],
    desc: 'Automated test suite using Playwright & TypeScript for GraphQL-based basket orchestration, validating ATG-to-Commercetools migration and REST-to-GraphQL communication.',
    problemSolved: 'Validating complex REST-to-GraphQL request transformation through the Facade and GraphQL-to-REST communication between the Basket Orchestrator and downstream services.',
    contribution: 'Built from scratch Playwright + TypeScript automation covering queries, mutations, response validation, regression scenarios, and backward compatibility testing.',
    metrics: 'Validated ATG-to-Commercetools migration ensuring 100% basket data consistency and backward compatibility.',
    architecture: 'Modular Playwright GraphQL Client -> Query/Mutation Builders -> Schema Validator -> Facade Interceptor -> CI/CD Gate',
    keyFeatures: [
      'GraphQL queries and mutations automation with deep response payload verification',
      'End-to-end tests for REST-to-GraphQL request transformation via the Facade',
      'ATG-to-Commercetools migration testing verifying basket data and response consistency',
      'Reusable API automation utilities ensuring backward compatibility for legacy clients'
    ],
    caseStudy: {
      overview: "An enterprise-scale API automation suite for a high-volume retail e-commerce platform migrating from legacy Oracle ATG to Commercetools microservices via a GraphQL basket orchestration layer.",
      challenge: "Ensuring zero data loss or pricing discrepancies during REST-to-GraphQL request transformation across complex basket actions (discounts, cart merging, guest-to-customer transitions).",
      strategy: "Architect a robust Playwright + TypeScript test harness with typed GraphQL fixtures to validate queries, mutations, payload contracts, and negative edge cases.",
      automationApproach: "Automated end-to-end request transformation tests verifying data consistency between the Facade layer and downstream commerce microservices.",
      frameworkTools: "Playwright Test, TypeScript, GraphQL, REST Assured, Bruno, Postman, GitLab CI/CD, AWS CloudWatch.",
      testCoverage: "100% of critical basket orchestration workflows, GraphQL schema validations, and legacy ATG parity checks.",
      ciIntegration: "Automated regression execution integrated into GitLab CI/CD pipelines triggered on PR commits.",
      challengesFaced: "Dynamic GraphQL schema evolutions causing intermittent contract drift between teams.",
      solution: "Implemented automated GraphQL schema assertion checks and contract tests before running operational regression suites.",
      outcome: "Successfully verified migration with zero critical basket defects reaching production and 100% backward compatibility maintained."
    }
  },
  {
    id: "inventory-asset-management",
    name: 'Enterprise Inventory & Asset Management System - Automation Testing',
    category: 'Test Automation',
    type: 'UI & BACKEND AUTOMATION',
    url: 'https://github.com/AshwaniCoding',
    tags: ['Selenium', 'Java', 'TestNG', 'Database Testing', 'E2E Testing', 'Batch Workflows'],
    desc: 'Comprehensive automation framework for enterprise inventory workflows, multi-step batch asset transfers, agent assignments, and database validations.',
    problemSolved: 'Verifying serialized asset data and transaction integrity across multi-step asset transfers between agents and inventory locations with complex business rules.',
    contribution: 'Designed and automated batch transfer scenarios, developed reusable UI automation scripts with backend SQL validations, and built maintainable test components.',
    metrics: 'Achieved high regression coverage across critical asset lifecycle events with end-to-end database consistency checks.',
    architecture: 'Page Object Model -> Dynamic Test Data Provider -> Database Validator -> TestNG Parallel Runner -> Allure Reports',
    keyFeatures: [
      'Automated complex inventory workflows (user creation, asset assignment, inventory management)',
      'Multi-step batch transfer automation validating ownership, state, and transaction status',
      'Reusable UI automation scripts paired with SQL backend validations',
      'Reusable business workflow automation components improving maintainability'
    ],
    caseStudy: {
      overview: "An automated end-to-end testing suite for an enterprise asset and inventory management platform tracking thousands of serialized assets across multiple facilities.",
      challenge: "Complex multi-step batch transfers involving user permission checks, inventory state transitions, and audit trail generation required multi-tier validation.",
      strategy: "Combine UI automation with direct database verification to ensure UI state changes correspond exactly to serialized database records.",
      automationApproach: "Utilized Java with TestNG and Selenium WebDriver following the Page Object Model, with custom JDBC assertions checking database status after UI triggers.",
      frameworkTools: "Java 21, Selenium WebDriver, TestNG, JDBC, SQL, Maven, Allure Reporting, Git.",
      testCoverage: "User provisioning, multi-step asset transfers, bulk assignments, status audits, and reporting.",
      ciIntegration: "TestNG suite parameterized for nightly automated regression runs with Allure dashboard outputs.",
      challengesFaced: "Handling long-running asynchronous batch transfer processes without arbitrary thread sleeps.",
      solution: "Built dynamic polling wait utilities that query backend transaction state until completion or SLA timeout.",
      outcome: "Eliminated manual batch transfer verification effort and prevented asset state discrepancies."
    }
  },
  {
    id: "playwright-ts-framework",
    name: 'Playwright & TypeScript Test Automation Suite',
    category: 'Test Automation',
    type: 'AUTOMATION',
    url: 'https://github.com/AshwaniCoding',
    tags: ['Playwright', 'TypeScript', 'API Testing', 'CI/CD', 'Allure'],
    desc: 'A modern, high-speed end-to-end and API test automation framework built with Playwright and TypeScript, featuring parallel execution and auto-waiting.',
    problemSolved: 'Legacy automation suites suffered from slow execution times, brittle locators, and lack of unified API+UI validation capabilities.',
    contribution: 'Implemented modular Page Object Model with custom fixtures, auto-waiting locators, and direct API request seeding.',
    metrics: 'Reduced regression execution duration from 45 minutes to under 6 minutes with 100% assertion reliability.',
    architecture: 'Playwright Config -> Custom Fixtures -> Page Objects -> Request Contexts -> Allure Reporter',
    keyFeatures: [
      'Multi-browser parallel execution across Chromium, Firefox, and WebKit',
      'Unified UI and API testing in a single runner',
      'Web-first assertions eliminating flaky test sleeps',
      'HTML and Allure visual trace reporting'
    ],
    caseStudy: {
      overview: "An enterprise-grade test automation framework built from the ground up using Playwright and TypeScript, designed to provide ultra-fast, flake-free testing across web applications and REST APIs.",
      challenge: "Legacy automation suites suffered from slow execution times, high maintenance overhead from brittle locators, and lack of unified API+UI validation capabilities.",
      strategy: "Implement a modular Page Object Model combined with custom fixtures, auto-waiting locators, and direct API request seeding to eliminate repetitive UI login and cart setup steps.",
      automationApproach: "Utilized Playwright's native isolated browser contexts to enable 4x parallel worker threads with zero test state pollution across Chromium, Firefox, and WebKit.",
      frameworkTools: "Playwright Test Runner, TypeScript, Allure Reporting, Jenkins / GitLab CI/CD, dotenv configuration manager.",
      testCoverage: "95% critical E2E user paths, complete REST & GraphQL API CRUD operations, and cross-browser visual validation.",
      ciIntegration: "Sharded CI/CD workflow matrix executing test partitions on every pull request with automated Allure artifact publishing.",
      challengesFaced: "Handling dynamic asynchronous data loading and race conditions on high-latency network environments.",
      solution: "Leveraged Playwright's web-first assertions (expect(locator).toBeVisible()) and custom network route handlers instead of static thread sleeps.",
      outcome: "Reduced regression execution duration from 45 minutes to under 6 minutes while maintaining 100% test reliability."
    }
  },
  {
    id: "testng-cucumber-framework",
    name: 'Enterprise Java TestNG & Cucumber BDD Framework',
    category: 'Quality Engineering',
    type: 'AUTOMATION',
    url: 'https://github.com/AshwaniCoding',
    tags: ['Java 21', 'Selenium', 'Cucumber', 'TestNG', 'Allure', 'Maven'],
    desc: 'A robust BDD test automation framework utilizing Java (JDK 21), TestNG, Selenium WebDriver, and Cucumber with living Gherkin documentation.',
    problemSolved: 'Bridging the communication gap between business analysts, manual QA, and software developers during requirement changes.',
    contribution: 'Adopted Gherkin scenario outlines representing complex business workflows as living documentation backed by reusable step definitions.',
    metrics: 'Automated 500+ tests with multi-browser Selenium Grid support and 99.8% test stability.',
    architecture: 'Feature Files -> Step Definitions -> Page Actions -> WebDriver Factory -> TestNG Listeners',
    keyFeatures: [
      'Living BDD documentation with business-readable Gherkin syntax',
      'ThreadLocal WebDriver factory for thread-safe parallel execution',
      'Data-driven testing via Scenario Outlines and Excel/JSON feeds',
      'Rich Allure reports with step-by-step logs and screenshots'
    ],
    caseStudy: {
      overview: "A business-readable Behavior-Driven Development (BDD) test automation framework written in Java 21, integrating Cucumber Gherkin feature files with TestNG execution runners and Selenium WebDriver.",
      challenge: "Bridging the communication gap between business analysts, manual QA, and software developers during requirement changes.",
      strategy: "Adopt Gherkin scenario outlines to represent complex business workflows as living documentation, backed by reusable step definitions and Page Object classes.",
      automationApproach: "Multi-tiered architecture: Feature Files -> Step Definitions -> Page Actions -> WebDriver Factory -> Allure Listener.",
      frameworkTools: "Java 21, Selenium WebDriver 4.x, Cucumber-JVM, TestNG, Maven, Allure Reporter, Log4j2.",
      testCoverage: "Complete functional regression coverage across enterprise checkout, authentication, and user profile management.",
      ciIntegration: "Maven Surefire Plugin configured with parameterized testng.xml execution for targeted smoke and regression builds.",
      challengesFaced: "Managing driver binary lifecycles and grid configuration across distributed team machines.",
      solution: "Implemented Selenium 4 automated driver management and centralized BaseTest class with thread-safe ThreadLocal<WebDriver> instances.",
      outcome: "Enabled non-technical stakeholders to review and write test scenarios, accelerating requirement-to-test turnaround."
    }
  },
  {
    id: "api-automation-harness",
    name: 'REST & GraphQL API Automation Test Harness',
    category: 'API & Migration Automation',
    type: 'API TESTING',
    url: 'https://github.com/AshwaniCoding',
    tags: ['REST Assured', 'Bruno', 'Postman', 'GraphQL', 'Wiremock', 'Java'],
    desc: 'High-throughput API testing harness validating REST & GraphQL microservice contracts, JSON schemas, payload transformations, and latency SLAs.',
    problemSolved: 'Detecting breaking schema changes, payload serializations, and latency regressions across microservice endpoints before UI integration.',
    contribution: 'Developed automated REST Assured test suites, Bruno Git-integrated collections, and Postman regression runs with Newman CLI.',
    metrics: '100% endpoint coverage with strict schema validation and sub-400ms SLA assertions.',
    architecture: 'Request Specs -> BDD Given/When/Then -> POJO Serialization -> Wiremock Mocks -> Newman/TestNG Runners',
    keyFeatures: [
      'Comprehensive JSON schema validation and HTTP status code checks',
      'GraphQL queries and mutations with negative error scenarios',
      'Git-friendly Bruno API collections for version-controlled testing',
      'Wiremock service virtualization for isolated third-party testing'
    ],
    caseStudy: {
      overview: "A modular API testing harness utilizing REST Assured, Bruno, and Postman to perform contract verification, payload serialization validation, and regression tests on distributed microservices.",
      challenge: "Preventing regression and contract breakage between microservices during rapid release cycles.",
      strategy: "Establish automated contract tests with REST Assured and Bruno that validate status codes, schema validity, and SLA thresholds.",
      automationApproach: "Created reusable request specifications, POJO models, and Wiremock stubs for isolated component testing.",
      frameworkTools: "REST Assured, Bruno, Postman, Newman, Wiremock, Java 21, TestNG, Maven.",
      testCoverage: "100% of exposed REST and GraphQL endpoints validated across happy path and edge cases.",
      ciIntegration: "Automated Newman and Maven Surefire API tests running in CI/CD before any UI deployment.",
      challengesFaced: "Handling dynamic authentication tokens and rate-limiting during high-volume testing.",
      solution: "Built centralized token management utility with auto-refresh and cached sessions.",
      outcome: "Zero breaking API contracts escaped to frontend testing, cutting regression feedback time to seconds."
    }
  }
];

// Quality Mindset / Philosophy Principles
export const qualityPrinciples = [
  {
    number: "01",
    title: "PREVENT",
    headline: "Find problems early.",
    description: "Shift-Left testing is not just a slogan—it is an architectural discipline. Catching a defect at the API contract or unit level is 10x faster to fix than in E2E automation and 100x cheaper than in production.",
    badge: "Shift-Left"
  },
  {
    number: "02",
    title: "AUTOMATE",
    headline: "Automate repetitive & high-value testing.",
    description: "Manual regression drains engineering velocity. Automation frees engineers to focus on exploratory testing while ensuring core critical user journeys remain resilient 24/7.",
    badge: "Velocity"
  },
  {
    number: "03",
    title: "EXPLORE",
    headline: "Think beyond happy paths.",
    description: "Real-world users encounter network drops, boundary conditions, malformed payloads, and unexpected browser states. High-quality testing rigorously validates edge cases.",
    badge: "Resilience"
  },
  {
    number: "04",
    title: "MEASURE",
    headline: "Use meaningful feedback & coverage.",
    description: "Raw test counts mean nothing if tests are flaky. We measure actionable signals: execution time, defect discovery rates, and 99.8%+ test suite stability.",
    badge: "Observability"
  },
  {
    number: "05",
    title: "IMPROVE",
    headline: "Continuously improve quality processes.",
    description: "Quality is not a final checkpoint—it is an ongoing engineering culture. Continuously refactoring test architectures, isolating flakiness, and optimizing CI feedback keeps release pipelines sharp.",
    badge: "Culture"
  }
];

// Testing Workflow / Process Steps
export const testingWorkflowSteps = [
  {
    step: "01",
    name: "PLAN",
    subtitle: "Requirements & Risk Analysis",
    details: "Analyze user stories, acceptance criteria, edge-case risks, and map out testing scope across the Test Pyramid."
  },
  {
    step: "02",
    name: "DESIGN TESTS",
    subtitle: "Scenarios & BDD Gherkin",
    details: "Draft structured test cases and living Gherkin feature files that bridge business expectations with engineering verification."
  },
  {
    step: "03",
    name: "AUTOMATE",
    subtitle: "Frameworks & Robust POMs",
    details: "Develop maintainable automation scripts with Playwright, Selenium, or REST Assured using auto-waiting and zero-flakiness locators."
  },
  {
    step: "04",
    name: "EXECUTE",
    subtitle: "Parallel & CI/CD Pipelines",
    details: "Run automated suites across multi-browser matrix shards in Jenkins / GitLab CI/CD with fast feedback."
  },
  {
    step: "05",
    name: "REPORT",
    subtitle: "Allure Analytics & Triage",
    details: "Generate comprehensive visual reports with network traces, videos, and CloudWatch defect logs for immediate developer triage."
  },
  {
    step: "06",
    name: "IMPROVE",
    subtitle: "Refactor & Prevent Flake",
    details: "Continuously optimize execution runtimes, maintain test data fixtures, and incorporate lessons into future test cycles."
  }
];

// Technical Articles authored by Ashwani Dwivedi
export const articlesData = [
  {
    id: "playwright-api-testing-command",
    title: "One Playwright Command Changed My API Testing Workflow",
    publishDate: "2026",
    readingTime: "5 min read",
    category: "Playwright & API Testing",
    summary: "How leveraging Playwright's native `request.newContext()` and API fixtures eliminates boilerplate, speeds up test data setup, and unifies UI and API verification into a single pipeline.",
    fullContent: `
### Why API Testing with Playwright is a Game Changer

In traditional test automation setups, engineers often maintained two disconnected stacks: REST Assured or Postman for API testing, and Selenium or Cypress for UI end-to-end tests. This caused duplicate model definitions, disparate reporting, and clunky session token hand-offs.

When Playwright introduced first-class API testing capabilities via the \`request\` context, it changed everything.

#### The Command That Changed The Game:
\`\`\`typescript
import { test, expect } from '@playwright/test';

test('create user via API and verify in UI', async ({ request, page }) => {
  // 1. Instant API setup using Playwright request fixture (35ms)
  const response = await request.post('/api/v1/users', {
    data: { name: 'Ashwani Dwivedi', role: 'QA Automation Engineer' }
  });
  expect(response.ok()).toBeTruthy();
  const user = await response.json();

  // 2. Direct seamless transition to UI validation
  await page.goto(\`/users/\${user.id}\`);
  await expect(page.locator('[data-testid="user-role"]')).toHaveText('QA Automation Engineer');
});
\`\`\`

#### Key Takeaways for QA Engineers:
1. **Zero Context Switching**: Write API setup calls and UI verifications in the exact same test runner.
2. **Speed**: Skip slow UI form fills when creating pre-requisite test data. Seed via API in 50ms, then verify only the target UI flow.
3. **Unified Reporting**: Allure and Playwright HTML reports show both network requests and DOM traces in one unified timeline.
    `
  },
  {
    id: "truths-qa-engineers-2026",
    title: "12 Truths Every QA Engineer Needs to Accept in 2026",
    publishDate: "2026",
    readingTime: "7 min read",
    category: "Quality Engineering",
    summary: "Essential realities about modern test automation practices: why test automation is software engineering, why flaky tests must be eliminated, and why shift-left is non-negotiable.",
    fullContent: `
### 12 Hard Truths for Test Automation Engineers & QA Specialists in 2026

As software release cycles accelerate to continuous delivery, the role of Quality Engineering has evolved dramatically. Here are the core principles every QA engineer must embrace:

1. **Test Automation is Software Engineering**: If your test code is messy, undocumented, and lacks design patterns, your test suite will fail. Treat test code with the same rigor as production code.
2. **Flaky Tests Are Worse Than No Tests**: A flaky test breeds distrust. If a test is unreliable, fix it immediately, isolate the root cause, or quarantine it.
3. **Shift-Left is Not a Slogan, It's an Architecture**: Catching a defect in unit/contract testing is 10x cheaper than in E2E automation and 100x cheaper than in production.
4. **UI Tests Should Be the Tip of the Pyramid**: Don't automate every single permutation through the browser. Rely heavily on API and integration layers.
5. **AI Enhances, But Never Replaces Critical Thinking**: AI tools can generate boilerplate tests and suggest boundary conditions, but understanding business risk and edge cases requires human engineering insight.
6. **Fast Feedback Loops Win**: If your test suite takes 2 hours to run, developers won't wait for it. Parallelize, shard, and optimize.
7. **Maintenance Cost Dictates Framework Longevity**: Choose tools that provide automatic waiting, resilience against dynamic DOM changes, and clean debugging tools (like Playwright and modern BDD).
8. **Logging & Observability Matter**: A failed test must provide crystal-clear artifacts: screenshots, video, network logs, and stack traces.
9. **API Contracts Are Gold**: Schema validation with tools like Bruno, REST Assured, and Postman prevents breaking changes between microservices before frontend builds even begin.
10. **Quality is a Whole-Team Culture**: The QA engineer's job is not to be a gatekeeper, but to build the infrastructure that empowers everyone to ship quality code.
11. **Continuous Learning is Mandatory**: Frameworks evolve. Staying sharp in Java, TypeScript, CI/CD, and modern tooling is what keeps a QA engineer ahead.
12. **Simplicity Over Cleverness**: Write simple, readable tests that any teammate can debug in 2 minutes at 3 AM.
    `
  },
  {
    id: "rest-assured-vs-playwright-api",
    title: "Designing Resilient API Automation: REST Assured vs Playwright",
    publishDate: "2026",
    readingTime: "6 min read",
    category: "API Automation",
    summary: "A practical technical comparison of building enterprise API test suites in Java with REST Assured versus TypeScript with Playwright API fixtures.",
    fullContent: `
### Comparing Two Heavyweights in API Automation

When architecting an API automation suite, two industry favorites frequently emerge: **REST Assured** in the Java ecosystem, and **Playwright API** in the JavaScript/TypeScript ecosystem.

#### REST Assured (Java)
- **Strengths**: Fluent BDD syntax (\`given().when().then()\`), deep integration with Java/TestNG/JUnit, seamless Jackson/Gson POJO serialization, and native enterprise adoption.
- **Best Suited For**: Teams with established Java backends and TestNG/Cucumber frameworks.

#### Playwright API (TypeScript)
- **Strengths**: Blazing execution speed, zero JVM startup overhead, built-in JSON parsing, direct fixture support in \`playwright.config.ts\`, and instant dual-mode UI+API execution.
- **Best Suited For**: Full-stack web teams, modern CI/CD pipelines needing lightweight Docker containers, and end-to-end integration flows.

#### The Verdict:
Both tools deliver high reliability. At UST and across enterprise projects, pairing Java/TestNG with REST Assured delivers deep schema validation, while TypeScript with Playwright empowers ultra-fast, cross-layer smoke tests.
    `
  }
];

