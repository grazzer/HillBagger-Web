import { Children } from "react";
export default function Box({
  children,
  title,
  titleTwo,
}: {
  children: React.ReactNode;
  title: string;
  titleTwo?: string;
}) {
  const myChildren = Children.toArray(children);

  if (myChildren.length === 2) {
    return (
      <div className="pb-5">
        <div className="flex -mb-1.5 flex-row ">
          <div className=" flex-1">
            <p className="inline ml-3 px-1.5 bg-white">{title}</p>
          </div>
          <div className="invisible md:visible flex-1 ">
            <p className="inline ml-3 px-1.5 bg-white">{titleTwo}</p>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col rounded-xl border border-gray-300">
          <div className="flex-1 flex-col py-3 pl-5">{myChildren[0]}</div>
          <div className="border-b m-2 md:mt-2 mt-6 border-l border-gray-300"></div>
          <div className="flex-1 flex-col py-3 pl-5">
            <div className="md:mt-0 -mt-10">
              <p className="inline visible md:hidden -ml-2 px-1.5 bg-white">
                {titleTwo}
              </p>
            </div>
            <div className="md:mt-0 mt-1.5">{myChildren[1]}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pb-5">
      <div className="flex -mb-1.5 flex-row ">
        <div className="flex-1">
          <p className="inline ml-3 px-1.5 bg-white">{title}</p>
        </div>
      </div>
      <div className=" flex sm:flex-row flex-col rounded-xl border border-gray-300">
        <div className="flex-1 flex-col py-3 pl-5">{children}</div>
      </div>
    </div>
  );
}
