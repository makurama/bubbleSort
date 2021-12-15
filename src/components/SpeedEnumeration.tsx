import React, {useState} from "react";
import {Wrapper} from "./Wrapper";
import {sortMVInterface} from "../Sort/Interface";

export const SpeedEnumeration = ((props: {model: sortMVInterface}) => {
   //тут хуками сделал логику для поведения, т.к. оно лаконичнее чем класс ради 1 метода
   const SPEED = ["1x", "2x", "4x"];
   const [checkedValue, setCheckedValue] = useState(2000 / props.model.sortData!.speedSort);

   const SpeedEnumeration  = ((speed: string, index: number) => {
      return <div className="array_panel" key={index}>
            <input name="select_speed" type="radio" checked={parseInt(speed) === checkedValue}
                  onChange={() => setCheckedValue(parseInt(speed))}
                  onClick={() => props.model.setSpeed(parseInt(speed))}/>
            <p>{speed}</p>
      </div>
   })
   return <Wrapper>
      <p>Скорость перебора</p>
      {SPEED.map((speed: string, index: number) => SpeedEnumeration(speed, index))}
   </Wrapper>
})