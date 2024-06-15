const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    // "prettier",
    "turbo",
    "@rushstack/eslint-config/profile/web-app",
    "plugin:jsx-a11y/recommended", // 플러그인 설정 추가
  ],
  globals: {
    React: true,
    JSX: true,
  },
  plugins: [
    "react-refresh", // 플러그인 추가
    "jsx-a11y", // 플러그인 추가
  ],
  env: {
    node: true,
    browser: true,
  },

  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // <img> 엘리먼트에 유의미한 대체 텍스트가 있는지 체크
    "jsx-a11y/alt-text": "warn", // 규칙 설정
    // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)
    "react/no-unknown-property": "off",
    // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
    "react/prop-types": "off",
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
