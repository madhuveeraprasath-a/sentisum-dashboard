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

  return (
    <div
      className="min-h-[300px] cursor-pointer bg-white rounded-lg p-4  transform transition-transform duration-500 hover:scale-[1.02] hover:border-primary-300 hover:border"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 2px 2px 4px, rgba(0, 0, 0, 0.05) -2px -2px 4px",
      }}
    >
      <div className="flex justify-between items-center mb-4">
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
