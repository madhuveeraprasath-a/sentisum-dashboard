import { PlusCircleOutlined } from "@ant-design/icons";
import {
  CreateOptionInterface,
  CreateOptions,
} from "../constants/HeaderConstants";
import { getIcon } from "../utills/getIcon";
import HoverDropdown from "./Navbar/HoverDropdown";

const CreateButton = () => {
  const onSubscribeHandler = () => {};

  return (
    <div>
      <HoverDropdown
        triggerComponent={
          <button
            onClick={onSubscribeHandler}
            className="bg-primary-500 text-white px-4 py-2 flex gap-1 rounded items-center font-semibold hover:bg-primary-600 transition-all duration-300"
          >
            CREATE
            <PlusCircleOutlined />
          </button>
        }
        dropdownComponent={(close) => (
          <div className="w-[200px]">
            {CreateOptions?.map((item: CreateOptionInterface) => (
              <div
                key={item.title}
                className="flex items-center gap-2 p-4 rounded-lg cursor-pointer hover:bg-neutral-400"
                onClick={() => {
                  close();
                }}
              >
                <div>{getIcon(item.type)}</div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-black">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}
        offsetTop={48}
        offsetLeft={-110}
      />
    </div>
  );
};

export default CreateButton;
