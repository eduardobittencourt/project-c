import { auth } from "@/auth";
import { db } from "@/db";
import { groups } from "@/db/schema/groups";
import { userGroups } from "@/db/schema/userGroups";
import { eq } from "drizzle-orm";

const getUserGroups = async () => {
  const session = await auth();

  if (!session?.user?.id) return [];

  const response = await db
    .select()
    .from(userGroups)
    .innerJoin(groups, eq(groups.id, userGroups.groupId))
    .where(eq(userGroups.userId, session.user.id));

  return response;
};

export default getUserGroups;
