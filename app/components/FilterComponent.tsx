import { CreateOptions } from "../constants/HeaderConstants";

interface FilterComponentProps {
  onFilterClick: (filterName: string) => void;
  activeFilter: string;
}

const FilterComponent = (props: FilterComponentProps) => {
  const { onFilterClick, activeFilter } = props;

  const renderFilterOption = (type: string, label: string) => {
    const isActive = activeFilter === type;
    const baseClasses =
      "hover:font-semibold bg-neutral-100 p-2 rounded-md w-[100px] text-center border cursor-pointer";
    const activeClasses = isActive
      ? "bg-primary-200 border-primary-400 font-semibold"
      : "border-neutral-300 hover:bg-primary-200 hover:border-primary-400";

    return (
      <div
        key={type}
        onClick={() => onFilterClick(type)}
        className={`${baseClasses} ${activeClasses}`}
      >
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="flex items-center gap-2 p-4 bg-neutral-300 w-fit rounded-lg">
      {renderFilterOption("all", "All")}
      {CreateOptions?.map((item) =>
        renderFilterOption(item.type, item.filterName)
      )}
    </div>
  );
};

export default FilterComponent;
