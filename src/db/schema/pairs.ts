import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

import { users } from "./users";

export const userGroups = pgTable(
  "user_groups",
  {
    id: uuid("id"),
    userId: text("user_id")
      .notNull()
      .unique()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.userId] }),
  }),
);
