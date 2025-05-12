import { DashboardItem } from "@/app/constants/Interface";

interface TextCardProps {
  data: DashboardItem;
}

const TextCard = (props: TextCardProps) => {
  const { data } = props;
  console.log("MetricCard data", data);
  return <div className="px-4">Test</div>;
};

export default TextCard;
