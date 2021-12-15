import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wrapper } from "./Wrapper";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export const Menu = ((props) => {
    return _jsxs(Wrapper, { children: [_jsx(PlayCircleOutlineOutlinedIcon, { className: "white_button", sx: { color: "#FFF", fontSize: 60, '&:hover': {
                        animation: "2s linear 0s normal none infinite running start_button_hover"
                    } }, onClick: () => { props.model.startSort(); } }, void 0), _jsx(RestartAltIcon, { className: "white_button restart_button", sx: { color: "#FFF", fontSize: 65 }, onClick: () => props.model.sortReset() }, void 0)] }, void 0);
});
