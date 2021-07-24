export const Environments = {
  dev: "development",
  prod: "production",
  test: "test",
}

export const getEnv = () => process.env.NODE_ENV

export const isDev = () => getEnv() === Environments.dev
export const isProd = () => getEnv() === Environments.prod
export const isTest = () => getEnv() === Environments.test

export const isBrowser = () => process.browser
export const isServer = () => process.server
