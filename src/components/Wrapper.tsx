import React from "react";

export const Wrapper = ((props: React.PropsWithChildren<React.ReactNode>) => {
   return <>
      <div className={"wrapper"}>
            {props.children}
      </div>
   </>
})