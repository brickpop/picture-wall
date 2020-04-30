// This file is evaluated when exporting the frontend application

const lang = "en"
const DEVELOPMENT = process.env.DEVELOPMENT || process.env.NODE_ENV !== "production"
const PAGE_TITLE = process.env.PAGE_TITLE || "Wall poster"
const API_PREFIX = process.env.API_PREFIX || "http://localhost:8080"

module.exports = {
  LANG: lang,
  DEVELOPMENT,
  PAGE_TITLE,
  API_PREFIX
}

console.log("Building the frontend with ENV:", module.exports)
