import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const ModalWrapper = ((props) => {
    return _jsx(_Fragment, { children: _jsx("div", Object.assign({ className: "back_modal", onClick: () => props.modalOpen(false) }, { children: _jsx("div", Object.assign({ className: "modal", onClick: e => e.stopPropagation() }, { children: props.children }), void 0) }), void 0) }, void 0);
});
