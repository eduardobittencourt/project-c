import getGroup from "@/services/getGroup";

type GroupDashboardProps = Readonly<{
  params: {
    groupId: string;
  };
}>;

export default async function GroupDashboard({
  params: { groupId },
}: GroupDashboardProps) {
  const group = await getGroup(groupId);

  return <h1>Bem vindo ao grupo {group[0].group.name}</h1>;
}
