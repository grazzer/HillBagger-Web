import { useNavigate, useSearch } from "@tanstack/react-router";

export default function ClassificationSelector() {
  const navigate = useNavigate({ from: "/" });
  const { classification = "all" } = useSearch({
    from: "/",
  });

  console.log("classificationSelector", classification);

  const classList = [
    { id: "1", value: "all", label: "All" },
    { id: "2", value: "scotland", label: "Scotland" },
    { id: "3", value: "england", label: "England" },
    { id: "4", value: "wales", label: "Wales" },
    { id: "5", value: "ireland", label: "Ireland" },
    { id: "6", value: "munro", label: "Munro" },
    { id: "7", value: "corbett", label: "Corbett" },
    { id: "8", value: "graham", label: "Graham" },
    { id: "9", value: "donald", label: "Donald Hill" },
    { id: "10", value: "marilyn", label: "Marilyn" },
    { id: "11", value: "nuttall", label: "Nuttall" },
    { id: "12", value: "wainwright", label: "Wainwright" },
  ];

  const jsxRadioButtons = classList.map((item) => (
    <div key={item.id} className="justify-items-center">
      <div>
        <label className="text-gray-400 hover:text-mainActive focus-within:text-main has-checked:text-main">
          <input
            className="hidden"
            type="radio"
            checked={item.value === classification || false} // or false to avoid uncontrolled input warning
            name="classification"
            onChange={() => {
              navigate({
                search: () => ({
                  classification: item.value,
                  pagination: 0,
                  direction: "n1",
                  searchString: "",
                }),
              });
            }}
          />
          {item.label}
        </label>
      </div>
    </div>
  ));

  return (
    // <ul className="flex flex-row w-full flex-wrap justify-between items-center">
    //   {jsxRadioButtons}
    // </ul>
    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-x-5 gap-y-2 ">
      {jsxRadioButtons}
    </div>
  );
}
