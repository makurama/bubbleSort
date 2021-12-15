import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from "mobx-react";
import { Wrapper } from "../../components/Wrapper";
export const BubbleView = observer((props) => {
    const sortElement = (elem, index, idFlag) => _jsx("div", Object.assign({ className: "sort_element", id: idFlag ? 'sort_element_' + elem.id : undefined }, { children: _jsx("div", Object.assign({ className: "sort_element_child", style: { background: elem.color } }, { children: elem.value }), void 0) }), elem.id);
    return _jsxs(Wrapper, { children: [_jsx("div", Object.assign({ className: "number_list" }, { children: props.model.sortData.numberList.map((elem, index) => sortElement(elem, index, true)) }), void 0), props.model.unsortData !== null &&
                _jsx("div", Object.assign({ className: props.model.sortData.sortDone ? "number_list unsorted_number_list active" : "number_list unsorted_number_list" }, { children: props.model.unsortData.map((elem, index) => sortElement(elem, index, false)) }), void 0)] }, void 0);
});
