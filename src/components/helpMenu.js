import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
export const HelpMenu = ((props) => {
    return _jsxs("div", Object.assign({ className: "help_menu" }, { children: [_jsx(HelpOutlineOutlinedIcon, { className: "white_button", sx: { color: "#FFF", fontSize: 60 }, onClick: () => props.helpHook(true) }, void 0), _jsx(SettingsOutlinedIcon, { className: "white_button setting_button", sx: { color: "#FFF", fontSize: 60 }, onClick: () => props.settingHook(true) }, void 0)] }), void 0);
});
