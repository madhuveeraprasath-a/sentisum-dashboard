import { DashboardItem } from "@/app/constants/Interface";

interface TextCardProps {
  data: DashboardItem;
}

const TextCard = (props: TextCardProps) => {
  const { data } = props;

  return (
    <div className="px-4">
      <div dangerouslySetInnerHTML={{ __html: data?.text || "" }}></div>
    </div>
  );
};

export default TextCard;
