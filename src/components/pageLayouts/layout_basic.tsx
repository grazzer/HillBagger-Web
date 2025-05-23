interface LayoutProps {
  children: React.ReactNode;
}

export function Layout_Basic(props: LayoutProps) {
  return (
    //screen
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 flex-col bg-gray-100">
        {/* temp Top Bar */}
        {/* <div className="h-15 bg-red-200"> Header </div> */}
        {/* page container */}
        <div className="flex flex-col h-full">
          <div className="flex flex-1 flex-row">
            {/* sidebar */}
            <div className="flex xl:basis-1/12" />
            {/* main content*/}
            <div className="flex flex-1  flex-col xl:basis-10/12 xl:rounded-xl my-1 p-5 bg-white ">
              {props.children}
            </div>
            {/* sidebar */}
            <div className="flex xl:basis-1/12" />
          </div>
        </div>
      </div>
    </div>
  );
}
