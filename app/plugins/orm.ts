import { Context } from "@nuxt/types";

import VuexORM from '@vuex-orm/core';
import database from '~/database';

export default ({ store }: Context) => {
  VuexORM.install(database)(store);
}
