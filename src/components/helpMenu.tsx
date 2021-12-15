import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React from "react";

export const HelpMenu = ((props: {helpHook: Function, settingHook: Function}) => {

   return <div className={"help_menu"}>
      <HelpOutlineOutlinedIcon className={"white_button"}
                                 sx={{ color: "#FFF", fontSize: 60 }}
                                 onClick={() => props.helpHook(true)}/>
      <SettingsOutlinedIcon className={"white_button setting_button"}
                              sx={{ color: "#FFF", fontSize: 60 }}
                              onClick={() => props.settingHook(true)}/>
   </div>
})