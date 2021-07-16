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
      launch_url: "https://nightwatchjs.org",

      screenshots: {
        enabled: false,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "firefox",
      },

      webdriver: {
        start_process: true,
        server_path: Services.geckodriver ? Services.geckodriver.path : "",
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox",

        alwaysMatch: {
          acceptInsecureCerts: true,

          "moz:firefoxOptions": {
            args: [
              // '-headless',
              // '-verbose'
            ],
          },
        },
      },

      webdriver: {
        start_process: true,
        port: 4444,
        server_path: Services.geckodriver ? Services.geckodriver.path : "",

        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",

        "goog:chromeOptions": {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: false,

          args: [
            // '--no-sandbox',
            // '--ignore-certificate-errors',
            // '--allow-insecure-localhost',
            // '--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: Services.chromedriver ? Services.chromedriver.path : "",

        cli_args: [
          // --verbose
        ],
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",

        "ms:edgeOptions": {
          w3c: false,

          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            // '--headless'
          ],
        },
      },

      webdriver: {
        start_process: true,

        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: "",

        cli_args: [
          // --verbose
        ],
      },
    },

    browserstack: {
      selenium: {
        host: "hub-cloud.browserstack.com",
        port: 443,
      },

      desiredCapabilities: {
        "bstack:options": {
          userName: "${BROWSERSTACK_USER}",
          accessKey: "${BROWSERSTACK_KEY}",
        },
      },

      disable_error_log: true,

      webdriver: {
        timeout_options: {
          timeout: 15_000,
          retry_attempts: 3,
        },

        keep_alive: true,
        start_process: false,
      },
    },

    "browserstack.local": {
      extends: "browserstack",

      desiredCapabilities: {
        "browserstack.local": true,
      },
    },

    "browserstack.chrome": {
      extends: "browserstack",

      desiredCapabilities: {
        browserName: "chrome",

        chromeOptions: {
          w3c: false,
        },
      },
    },

    "browserstack.firefox": {
      extends: "browserstack",

      desiredCapabilities: {
        browserName: "firefox",
      },
    },

    "browserstack.ie": {
      extends: "browserstack",

      desiredCapabilities: {
        browserName: "internet explorer",
        browserVersion: "11.0",
      },
    },

    "browserstack.safari": {
      extends: "browserstack",

      desiredCapabilities: {
        browserName: "safari",
      },
    },

    "browserstack.local_chrome": {
      extends: "browserstack.local",

      desiredCapabilities: {
        browserName: "chrome",
      },
    },

    "browserstack.local_firefox": {
      extends: "browserstack.local",

      desiredCapabilities: {
        browserName: "firefox",
      },
    },

    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        start_process: true,
        port: 4444,
        server_path: Services.seleniumServer ? Services.seleniumServer.path : "",

        cli_args: {
          "webdriver.gecko.driver": Services.geckodriver ? Services.geckodriver.path : "",
          "webdriver.chrome.driver": Services.chromedriver ? Services.chromedriver.path : "",
        },
      },
    },

    "selenium.chrome": {
      extends: "selenium_server",

      desiredCapabilities: {
        browserName: "chrome",

        chromeOptions: {
          w3c: false,
        },
      },
    },

    "selenium.firefox": {
      extends: "selenium_server",

      desiredCapabilities: {
        browserName: "firefox",

        "moz:firefoxOptions": {
          args: [
            // '-headless',
            // '-verbose'
          ],
        },
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
