import { db } from "@/db";
import { groups } from "@/db/schema/groups";
import { userGroups } from "@/db/schema/userGroups";
import { users } from "@/db/schema/users";
import { eq } from "drizzle-orm";

const getGroup = async (groupId: string) => {
  const response = await db
    .select()
    .from(userGroups)
    .innerJoin(users, eq(userGroups.userId, users.id))
    .innerJoin(groups, eq(userGroups.groupId, groups.id))
    .where(eq(userGroups.groupId, groupId))
    .limit(1);

  return response;
};

export default getGroup;
