import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

import { users } from "./users";
import { relations } from "drizzle-orm";

export const userGroups = pgTable(
  "user_group",
  {
    id: uuid("id").defaultRandom(),
    userId: text("user_id")
      .notNull()
      .unique()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.id, table.userId] }),
  }),
);

export const userGroupsRelations = relations(userGroups, ({ one }) => ({
  user: one(users, {
    fields: [userGroups.userId],
    references: [users.id],
  }),
}));
