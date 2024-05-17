import React from "react";
import ResizePanel from "react-resize-panel";

const ResizableComponent = () => {
  return (
    <div className="container mx-auto mt-8 w-full min-h-screen flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center">
        <div className="flex flex-grow justify-center w-full overflow-hidden">
          <ResizePanel
            direction="e"
            style={{
              width: "50%",
              minWidth: "50px",
              border: "5px solid black",
            }}
          >
            <div
              key="div0"
              className="w-full flex flex-col flex-grow justify-center overflow-hidden"
            >
              <h1 className="text-3xl font-bold mb-4 text-center">
                Component 1
              </h1>
            </div>
          </ResizePanel>
          <ResizePanel
            direction="w"
            style={{
              width: "50%",
              minWidth: "50px",
              border: "5px solid black",
            }}
          >
            <div
              key="div1"
              className="w-full flex flex-col flex-wrap flex-grow justify-center overflow-hidden"
            >
              <h1 className="text-3xl font-bold mb-4 text-center text-ellipsis text-nowrap">
                Component 2
              </h1>
            </div>
          </ResizePanel>
        </div>
        <ResizePanel
          direction="n"
          style={{
            height: "50%",
            minHeight: "50px",
            border: "5px solid black",
          }}
        >
          <div
            key="div3"
            className="w-full flex flex-col flex-grow justify-center"
          >
            <h1 className="text-3xl font-bold mb-4 text-center text-ellipsis text-nowrap">
              Component 3
            </h1>
          </div>
        </ResizePanel>
      </div>
    </div>
  );
};

export default ResizableComponent;
