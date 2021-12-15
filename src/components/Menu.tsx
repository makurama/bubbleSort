import React from "react";
import {Wrapper} from "./Wrapper";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {sortMVInterface} from "../Sort/Interface";

export const Menu = ((props: {model: sortMVInterface}) => {
   return <Wrapper>
      <PlayCircleOutlineOutlinedIcon className={"white_button"}
                                       sx={{ color: "#FFF", fontSize: 60, '&:hover': {
                                          animation: "2s linear 0s normal none infinite running start_button_hover"}}}
                                       onClick={() => {props.model.startSort()}}/>

      <RestartAltIcon className={"white_button restart_button"}
                        sx={{ color: "#FFF", fontSize: 65 }}
                        onClick={() => props.model.sortReset()}/>
   </Wrapper>
})