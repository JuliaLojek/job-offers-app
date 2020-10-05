module.exports = {
  roots: ["<rootDir>/src"],
  // preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["jsx", "ts", "tsx", "js", "json", "node"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  // testEnvironment: "node",
};
