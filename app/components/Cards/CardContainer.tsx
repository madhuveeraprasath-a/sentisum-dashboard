import { DashboardItem } from "@/app/constants/Interface";
import MetricCard from "./MetricCard";
import ReportCard from "./ReportCard";
import TextCard from "./TextCard";

interface CardContainerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: DashboardItem | any;
}

const CardContainer = (props: CardContainerProps) => {
  const { data } = props;

  const getComponent = () => {
    switch (data?.type) {
      case "metric":
        return <MetricCard data={data} />;
      case "text":
        return <TextCard data={data} />;
      case "report":
        return <ReportCard data={data} />;
      default:
        return null;
    }
  };
  const getTagColor = () => {
    switch (data?.type) {
      case "metric":
        return "bg-primary-300";
      case "text":
        return "bg-warning-300";
      case "report":
        return "bg-neutral-300";
      default:
        return "bg-gray-100";
    }
  };

  const getTypeLabel = () => {
    switch (data?.type) {
      case "metric":
        return "Metric";
      case "text":
        return "Text";
      case "report":
        return "Report";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      className="relative min-h-[400px] overflow-y-scroll cursor-pointer bg-white rounded-lg transform transition-transform duration-500 hover:scale-[1.02] hover:border-primary-300 hover:border"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 2px 2px 4px, rgba(0, 0, 0, 0.05) -2px -2px 4px",
      }}
    >
      <div
        className={`absolute top-0 left-4 px-2 py-1 text-xs font-medium rounded-b ${getTagColor()}`}
      >
        {data?.category} {getTypeLabel()}
      </div>

      <div className="flex justify-between items-center mb-4 border-b border-neutral-300 p-4 pt-6">
        <div>
          <p className="text-[18px] font-semibold">{data?.title}</p>
          <p className="text-xs font-semibold text-neutral-600">
            {data?.description}
          </p>
        </div>
      </div>
      {getComponent()}
    </div>
  );
};

export default CardContainer;
