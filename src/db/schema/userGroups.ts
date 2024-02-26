import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

import { users } from "./users";
import { relations } from "drizzle-orm";
import { groups } from "./groups";

export const userGroups = pgTable(
  "user_group",
  {
    groupId: uuid("group_id")
      .notNull()
      .references(() => groups.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.groupId, table.userId] }),
  }),
);

export const userGroupsRelations = relations(userGroups, ({ one }) => ({
  group: one(groups, {
    fields: [userGroups.groupId],
    references: [groups.id],
  }),
  user: one(users, {
    fields: [userGroups.userId],
    references: [users.id],
  }),
}));
