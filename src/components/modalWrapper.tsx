import React from "react";

export const ModalWrapper = ((props: {modalOpen: Function, children: React.PropsWithChildren<React.ReactNode>}) => {
   return <>
      <div className={"back_modal"} onClick={() => props.modalOpen(false)}>
            <div className={"modal"} onClick={e => e.stopPropagation()}>
               {props.children}
            </div>
      </div>
   </>
})