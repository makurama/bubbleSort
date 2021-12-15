import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { BubbleViewModel } from "./Sort/BubbleSort/BubbleViewModel";
import { BubbleView } from "./Sort/BubbleSort/BubbleView";
import { ArraySize } from "./components/ArraySize";
import { Menu } from "./components/Menu";
import { SpeedEnumeration } from "./components/SpeedEnumeration";
import { HelpMenu } from './components/helpMenu';
import { ModalWrapper } from './components/modalWrapper';
const VM_BUBBLE = new BubbleViewModel();
function App() {
    const [settingOpen, setSettingOpen] = useState(false); //хук для модалки
    const [helpOpen, setHelpOpen] = useState(false); //хук для модалки
    const InfoText = () => _jsxs(_Fragment, { children: [_jsx("h1", { children: "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F" }, void 0), _jsxs("ul", { children: [_jsx("li", { children: "Play - \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0438" }, void 0), _jsx("li", { children: "Reset - \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u0430\u043D\u043D\u044B\u0445" }, void 0), _jsx("li", { children: "Setting - \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F" }, void 0)] }, void 0), _jsx("h2", { children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432 \u0441\u0435\u0431\u044F" }, void 0), _jsxs("ul", { children: [_jsx("li", { children: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0431\u043E\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u0430\u0441\u0441\u0438\u0432\u0430" }, void 0), _jsx("li", { children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043C\u0430\u0441\u0441\u0438\u0432\u0430" }, void 0)] }, void 0)] }, void 0);
    //можно было передать контекстом, но т.к. уровень дерева не большой, то просто передал пропсом
    return (_jsxs("div", Object.assign({ className: "container" }, { children: [_jsx("div", Object.assign({ className: "flex_container screen_sort" }, { children: _jsx(BubbleView, { model: VM_BUBBLE }, void 0) }), void 0), _jsx("div", Object.assign({ className: "flex_container" }, { children: _jsx(Menu, { model: VM_BUBBLE }, void 0) }), void 0), _jsx(HelpMenu, { helpHook: setHelpOpen, settingHook: setSettingOpen }, void 0), settingOpen &&
                _jsxs(ModalWrapper, Object.assign({ modalOpen: setSettingOpen }, { children: [_jsx(ArraySize, { model: VM_BUBBLE }, void 0), _jsx(SpeedEnumeration, { model: VM_BUBBLE }, void 0)] }), void 0), helpOpen &&
                _jsx(ModalWrapper, Object.assign({ modalOpen: setHelpOpen }, { children: _jsx(InfoText, {}, void 0) }), void 0)] }), void 0));
}
export default App;
