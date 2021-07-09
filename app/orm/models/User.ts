import { Model } from "@vuex-orm/core"

export default class User extends Model {
  public static entity: string = "users"
  public static primaryKey = "uuid"

  public static fields() {
    return {
      id: this.uid(),
    }
  }
}
