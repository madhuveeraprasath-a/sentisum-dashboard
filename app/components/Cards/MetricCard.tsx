import { DashboardItem } from "@/app/constants/Interface";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface MetricCardProps {
  data: DashboardItem;
}

const MetricCard = (props: MetricCardProps) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      {data?.metrics?.map((metric, index) => (
        <div
          key={`${metric.title}-${index}`}
          className={`flex flex-col gap-2 ${
            metric?.increased ? "bg-error-200" : "bg-success-200"
          }  p-4 rounded-md relative`}
        >
          <div
            className={`absolute top-1 left-2 px-2 py-1 text-xs bg-neutral-100 font-medium rounded-b`}
          >
            {metric?.category}
          </div>
          <p className="font-semibold pt-5"> {metric?.title}</p>
          <div className="flex items-center gap-4">
            <p className="text-[16px] md:text-2xl font-semibold">
              {metric?.volume}
            </p>
            <div className="flex items-center gap-1">
              {metric.increased ? (
                <ArrowUpOutlined style={{ fontSize: 10, color: "#F0473E" }} />
              ) : (
                <ArrowDownOutlined
                  style={{ fontSize: 10, color: "#52BB8F " }}
                />
              )}{" "}
              {metric?.percentChange}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCard;
