import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface Stats {
  title: string;
  description: string;
  tableHeaders: { label: string; value: string }[];
  tags: {
    label: string;
    volume: number;
    percentChange: number;
    increased: boolean;
  }[];
}

interface ReportCardProps {
  data: {
    stats: Stats;
  };
}

const ReportCard = ({ data }: ReportCardProps) => {
  const headers = data.stats.tableHeaders;
  const rows = data.stats.tags;

  return (
    <div className="px-4">
      <table className="w-full table-auto">
        <thead className="bg-neutral-100">
          <tr>
            {headers.map((header) => (
              <th
                key={header.value}
                className="text-left px-4 py-2 border-b border-neutral-300"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:shadow-lg">
              {headers.map((header) => {
                const value = row[header.value as keyof typeof row];
                const isPercentage = header.value === "percentChange";
                return (
                  <td
                    key={header.value}
                    className={`px-4 py-3 border-b border-neutral-300  ${
                      row.increased && "bg-error-200"
                    }`}
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
                            style={{ fontSize: 10, color: "#52BB8F" }}
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
  );
};

export default ReportCard;
