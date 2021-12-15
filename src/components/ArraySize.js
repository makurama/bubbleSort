import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Wrapper } from "./Wrapper";
export const ArraySize = ((props) => {
    //тут хуками сделал логику для поведения, т.к. оно лаконичнее чем класс ради 1 метода
    const ARRAY_SIZE = [5, 10, 15];
    const [checkedValue, setCheckedValue] = useState(props.model.sortData.listLength);
    const SelectArraySize = ((value, index) => {
        return _jsxs("div", Object.assign({ className: "array_panel sm_none" }, { children: [_jsx("input", { name: "select_array_size", type: "radio", checked: value === checkedValue, onChange: () => setCheckedValue(value), onClick: () => props.model.setSize(value) }, void 0), _jsxs("p", { children: [value, " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"] }, void 0)] }), index);
    });
    return _jsxs(Wrapper, { children: [_jsx("p", { children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043C\u0430\u0441\u0441\u0438\u0432\u0430" }, void 0), ARRAY_SIZE.map((value, index) => SelectArraySize(value, index))] }, void 0);
});
