/**
 * Central SEO and Personal Branding Configuration
 * Production domain: https://ashwanikumardwivedi.netlify.app
 */

import { calculateExperience, CURRENT_EXPERIENCE } from "./utils/experience";

export const exp = CURRENT_EXPERIENCE;

export const SITE_CONFIG = {
  // Domain & Canonical URL configuration
  siteUrl: process.env.REACT_APP_SITE_URL || "https://ashwanikumardwivedi.netlify.app",
  futureCustomDomain: "https://ashwanidwivedi.com",
  
  // Identity & Branding
  fullName: "Ashwani Kumar Dwivedi",
  brandName: "Ashwani Dwivedi",
  title: `Ashwani Kumar Dwivedi | QA Automation Engineer | SDET (${exp.yearsText})`,
  shortRole: "QA Automation Engineer",
  tagline: `QA Automation Engineer (${exp.yrsExp}) | Playwright | TypeScript | Selenium | Java | GraphQL & REST API Testing | Bruno | CI/CD | Quality Engineering`,
  
  metaDescription: `Ashwani Kumar Dwivedi (Ashwani Dwivedi) is a QA Automation Engineer with ${exp.formattedDecimal || exp.decimal} years of experience at UST specializing in Playwright, TypeScript, GraphQL & REST API Testing, Bruno, Selenium, Java, and Shift-Left CI/CD Quality Engineering.`,
  
  email: "ashwanidwivedi7898@gmail.com",
  location: "Satna, Madhya Pradesh, India",
  resumeUrl: "https://drive.google.com/file/d/12awyDdWIE-EBh22qogLlvLKPFcY_Z7Ak/view?usp=sharing",
  
  // Dynamic Experience stats
  experienceStats: exp,
  
  // Real Profiles & Entity Linkages (sameAs signals for Google Knowledge Graph & SEO)
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ashwanid/",
    github: "https://github.com/ashwanicoding",
    leetcode: "https://leetcode.com/u/ashwani_44/",
    instagram: "https://www.instagram.com/ashwani_44",
  },
  
  // Professional Experience (Calculated dynamically)
  experience: [
    {
      role: "QA Automation Engineer",
      company: "UST",
      period: "January 2025 – Present",
      location: "Trivandrum, Kerala",
      type: "Full-Time",
      experienceTime: exp.yearsText,
      description: "Architecting API automation frameworks from scratch using Playwright, TypeScript, GraphQL API testing, REST-to-GraphQL migration verification, and CI/CD quality gates.",
      highlights: [
        "Built an API automation framework from scratch using Playwright and TypeScript for GraphQL API testing and automated regression testing.",
        "Developed reusable API utilities and test scripts to validate GraphQL queries, mutations, response payloads, and negative scenarios.",
        "Performed REST-to-GraphQL migration testing by comparing API behavior, response data, and functional outcomes to ensure migration accuracy.",
        "Collaborated with developers to analyze GraphQL schema changes, troubleshoot API issues, and improve test coverage and data validation.",
        "Integrated automated API tests into the CI/CD pipeline to support continuous regression testing."
      ],
      technologies: ["Playwright", "TypeScript", "GraphQL", "REST Assured", "Bruno", "Postman", "Jenkins", "GitLab CI/CD", "AWS CloudWatch Logs", "Git"]
    }
  ],
  
  // Specializations & Core Competencies
  specializations: [
    {
      title: "API & GraphQL Automation",
      desc: "Architecting API testing frameworks with Playwright and Bruno for GraphQL queries, mutations, and REST-to-GraphQL migration verification.",
      iconName: "api"
    },
    {
      title: "SDET & UI Test Automation",
      desc: "Building maintainable, robust, and scalable UI automation frameworks with Playwright, Selenium, and Cypress across modern web applications.",
      iconName: "playwright"
    },
    {
      title: "Quality Engineering & CI/CD",
      desc: "Implementing Shift-Left testing, BDD with Cucumber, TestNG test suites, Allure reporting, and CI/CD pipelines to prevent defects early.",
      iconName: "ci-cd"
    },
    {
      title: "Enterprise Test Framework Design",
      desc: "Modular test framework architecture with Java (JDK 21), TypeScript, TestNG, reusable test utilities, and deep database validation.",
      iconName: "java"
    }
  ],
  
  // Technical Knowledge Schema
  knowsAbout: [
    "Software Testing",
    "Test Automation",
    "Software Development Engineer in Test (SDET)",
    "Quality Engineering",
    "Playwright",
    "Selenium",
    "Cypress",
    "Appium",
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "TestNG",
    "Cucumber",
    "Behavior-Driven Development (BDD)",
    "API Testing",
    "API Automation",
    "GraphQL",
    "REST API",
    "REST Assured",
    "Bruno",
    "Postman",
    "Apache JMeter",
    "Wiremock",
    "Jenkins",
    "GitLab CI/CD",
    "AWS CloudWatch Logs",
    "Regression Testing",
    "Shift-Left Testing",
    "Migration Testing",
    "Maven",
    "Git",
    "MySQL"
  ]
};

/**
 * Returns complete Schema.org Person & WebSite JSON-LD object for SEO Entity Recognition
 */
export function getStructuredData(baseUrl = SITE_CONFIG.siteUrl) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": SITE_CONFIG.fullName,
        "alternateName": [
          SITE_CONFIG.brandName,
          "Ashwani Kumar",
          "Ashwani D."
        ],
        "jobTitle": "SDET / Test Automation Engineer",
        "description": SITE_CONFIG.metaDescription,
        "url": baseUrl,
        "email": `mailto:${SITE_CONFIG.email}`,
        "image": `${baseUrl}/logo.svg`,
        "sameAs": [
          SITE_CONFIG.socialLinks.linkedin,
          SITE_CONFIG.socialLinks.github,
          SITE_CONFIG.socialLinks.leetcode,
          SITE_CONFIG.socialLinks.instagram
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "UST"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Satna",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "India"
        },
        "knowsAbout": SITE_CONFIG.knowsAbout,
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Software Engineering"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": `${SITE_CONFIG.fullName} | Portfolio & Technical Hub`,
        "alternateName": `${SITE_CONFIG.brandName} - SDET & Test Automation Engineer`,
        "description": SITE_CONFIG.metaDescription,
        "publisher": {
          "@id": `${baseUrl}/#person`
        },
        "inLanguage": "en-US"
      }
    ]
  };
}
