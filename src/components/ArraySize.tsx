import React, {useState} from "react";
import {Wrapper} from "./Wrapper";
import {sortMVInterface} from "../Sort/Interface";

export const ArraySize = ((props: {model: sortMVInterface}) => {
   //тут хуками сделал логику для поведения, т.к. оно лаконичнее чем класс ради 1 метода
   const ARRAY_SIZE = [5, 10, 15];
   const [checkedValue, setCheckedValue] = useState(props.model.sortData!.listLength);

   const SelectArraySize = ((value: number, index: number) => {
      return <div className="array_panel sm_none" key={index}>
         <input name="select_array_size" type="radio" checked={value === checkedValue}
                onChange={() => setCheckedValue(value)}
                onClick={() => props.model.setSize(value)}/>
             <p>{value} элементов</p>
         </div>
   })
   return <Wrapper>
      <p>Размер массива</p>
      {ARRAY_SIZE.map((value: number, index: number) => SelectArraySize(value, index))}
   </Wrapper>
})