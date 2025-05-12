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
          </button>
        }
        dropdownComponent={
          <div className="w-[400px]">
            <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
            <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
            <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
          </div>
        }
        offsetTop={48}
        offsetLeft={-350}
      />
    </div>
  );
};

export default CreateButton;
