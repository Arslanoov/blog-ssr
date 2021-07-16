import { Plugin } from "@nuxt/types"
import { initializeFirebase } from "~/utils/firebase"

const accessor: Plugin = ({ $fire }) => {
  initializeFirebase($fire)
}

export default accessor
