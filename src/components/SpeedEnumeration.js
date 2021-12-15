import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Wrapper } from "./Wrapper";
export const SpeedEnumeration = ((props) => {
    //тут хуками сделал логику для поведения, т.к. оно лаконичнее чем класс ради 1 метода
    const SPEED = ["1x", "2x", "4x"];
    const [checkedValue, setCheckedValue] = useState(2000 / props.model.sortData.speedSort);
    const SpeedEnumeration = ((speed, index) => {
        return _jsxs("div", Object.assign({ className: "array_panel" }, { children: [_jsx("input", { name: "select_speed", type: "radio", checked: parseInt(speed) === checkedValue, onChange: () => setCheckedValue(parseInt(speed)), onClick: () => props.model.setSpeed(parseInt(speed)) }, void 0), _jsx("p", { children: speed }, void 0)] }), index);
    });
    return _jsxs(Wrapper, { children: [_jsx("p", { children: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0431\u043E\u0440\u0430" }, void 0), SPEED.map((speed, index) => SpeedEnumeration(speed, index))] }, void 0);
});
