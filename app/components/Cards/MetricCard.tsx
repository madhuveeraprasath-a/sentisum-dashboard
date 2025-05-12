import { DashboardItem } from "@/app/constants/Interface";

interface MetricCardProps {
  data: DashboardItem;
}

const MetricCard = (props: MetricCardProps) => {
  const { data } = props;

  console.log("MetricCard data", data);
  return <div className="px-4">Test</div>;
};

export default MetricCard;
