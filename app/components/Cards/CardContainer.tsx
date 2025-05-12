import { JSX } from "react";
import MetricCard from "./MetricCard";
import ReportCard from "./ReportCard";
import TextCard from "./TextCard";

const componentMap: Record<string, React.FC | (() => JSX.Element)> = {
  metric: MetricCard,
  text: TextCard,
  report: ReportCard,
};

const CardContainer = ({ data }: any) => {
  const Component = componentMap[data?.type] || MetricCard;

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
      className="relative min-h-[400px] cursor-pointer bg-white rounded-lg transform transition-transform duration-500 hover:scale-[1.02] hover:border-primary-300 hover:border"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 2px 2px 4px, rgba(0, 0, 0, 0.05) -2px -2px 4px",
      }}
    >
      <div
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded ${getTagColor()}`}
      >
        {getTypeLabel()}
      </div>

      <div className="flex justify-between items-center mb-4 border-b border-neutral-300 p-4">
        <div>
          <p className="text-[18px] font-semibold">{data?.title}</p>
          <p className="text-xs font-semibold text-neutral-600">
            {data?.description}
          </p>
        </div>
      </div>
      <Component />
    </div>
  );
};

export default CardContainer;
