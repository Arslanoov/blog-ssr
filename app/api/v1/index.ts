import { isDev } from "~/tools/build/env"
import ApiError from "~/errors/api"

type Primitives = string | number | boolean | null
type ArrayParams = Array<Primitives | ArrayParams | ArrayParams[]>
type ObjectParams = {
  [key in string | number]: Primitives | ObjectParams | ObjectParams[]
}
type Params = Array<Primitives | ArrayParams | ObjectParams>

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

const apiRequest = async <R>(
  request: (...args: UnionToIntersection<Primitives>) => Promise<R>,
  params: Params
): Promise<R> => {
  try {
    const response = await Reflect.apply(request, null, params)
    isDev() && console.log("[API Success]:", response)
    return response
  } catch (e) {
    isDev() && console.error("[API Error]:", e.message)
    throw new ApiError(e)
  }
}

export { apiRequest }
