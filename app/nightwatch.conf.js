const Services = {}

loadServices()

module.exports = {
  src_folders: ["tests/e2e"],

  page_objects_path: "",

  custom_commands_path: "",

  custom_assertions_path: "",

  globals_path: "",

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,

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
