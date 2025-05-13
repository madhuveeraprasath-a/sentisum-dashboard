import { DashboardItem } from "@/app/constants/Interface";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface ReportCardProps {
  data: DashboardItem;
}

const ReportCard = (props: ReportCardProps) => {
  const { data } = props;
  const headers = data?.stats?.tableHeaders;
  const rows = data?.stats?.tags;

  return (
    <div className="px-4">
      <div className="max-h-[300px] overflow-y-auto  rounded-md">
        <table className="w-full table-auto">
          <thead className="sticky top-0 bg-neutral-100 z-10">
            <tr>
              {headers?.map((header) => (
                <th
                  key={header.value}
                  className="text-xs md:text-[16px] text-left px-4 py-2 border-b border-neutral-300"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:shadow-md transition-shadow ${
                  row.increased && "bg-error-100"
                }`}
              >
                {headers?.map((header) => {
                  const value = row[header.value as keyof typeof row];
                  const isPercentage = header.value === "percentChange";
                  return (
                    <td
                      key={header.value}
                      className="px-4 py-3 border-b border-neutral-300"
                    >
                      {isPercentage ? (
                        <span
                          className={
                            row.increased
                              ? "text-green-600 font-medium"
                              : "text-red-600 font-medium"
                          }
                        >
                          {row.increased ? (
                            <ArrowUpOutlined
                              style={{ fontSize: 10, color: "#F0473E" }}
                            />
                          ) : (
                            <ArrowDownOutlined
                              style={{ fontSize: 10, color: "#52BB8F " }}
                            />
                          )}{" "}
                          {value}%
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportCard;
