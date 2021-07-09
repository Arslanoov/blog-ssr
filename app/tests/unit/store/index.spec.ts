import VuexORMGraphQL, { setupTestUtils, mock } from "@vuex-orm/plugin-graphql"
import User from "~/models/User"

setupTestUtils(VuexORMGraphQL)

mock("fetch").for(User).andReturn({ id: "1" })
// ...
