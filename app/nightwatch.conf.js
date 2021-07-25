const Services = {}

loadServices()

module.exports = {
  src_folders: ["tests/e2e"],

  page_objects_path: "tests/e2e/page-objects/",
  custom_commands_path: "tests/e2e/custom-commands/",
  custom_assertions_path: "tests/e2e/custom-assertions/",
  globals_path: "tests/e2e/globals.js",

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: "http://localhost:8086",

      screenshots: {
        enabled: true,
        path: "tests/e2e/screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
      },

      selenium: {
        start_process: false,
      },

      webdriver: {
        start_process: true,
        server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver",
        port: 9515,
      },
    },
  },
}

function loadServices() {
  try {
    Services.seleniumServer = require("selenium-server")
  } catch {}

  try {
    Services.chromedriver = require("chromedriver")
  } catch {}

  try {
    Services.geckodriver = require("geckodriver")
  } catch {}
}
