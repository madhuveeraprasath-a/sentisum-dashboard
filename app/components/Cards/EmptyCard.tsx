import {
  CreateOptionInterface,
  CreateOptions,
} from "@/app/constants/HeaderConstants";
import { getIcon } from "@/app/utills/getIcon";

interface EmptyCardProps {
  onCreateClickHandler: (type: string) => void;
}

const EmptyCard = (props: EmptyCardProps) => {
  const { onCreateClickHandler } = props;

  return (
    <div
      className="min-h-[300px] cursor-pointer bg-white rounded-lg transform transition-transform duration-500 hover:scale-[1.02] hover:border-primary-300 hover:border"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 2px 2px 4px, rgba(0, 0, 0, 0.05) -2px -2px 4px",
      }}
    >
      <div className="flex justify-between items-center mb-4 border-b border-neutral-300 p-4">
        <div>
          <p className="text-[18px] font-semibold">Quick Links</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {CreateOptions?.map((item: CreateOptionInterface) => (
          <div
            onClick={() => onCreateClickHandler(item.type)}
            key={item.title}
            className="flex items-center gap-2 p-4 rounded-lg cursor-pointer border-neutral-400 border-dotted border hover:bg-neutral-200 transition"
          >
            <div>{getIcon(item.type)}</div>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-black">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyCard;
