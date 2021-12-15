import {observer} from "mobx-react";
import {Wrapper} from "../../components/Wrapper";
import React from "react";
import {sortElementInterface, sortMVInterface} from "../Interface";


export const BubbleView = observer((props: {model: sortMVInterface}) => {

   const sortElement = (elem: sortElementInterface, index: number, idFlag: boolean) => <div
      className={"sort_element"} id={idFlag? 'sort_element_'+elem.id : undefined} key={elem.id}>
      <div className={"sort_element_child"} style={{background: elem.color}}>{elem.value}</div>
   </div>

   return <Wrapper>
      <div className={"number_list"}>
         {props.model.sortData!.numberList!.map((elem: sortElementInterface, index: number) => sortElement(elem, index, true))}
      </div>

      {props.model.unsortData !== null &&
         <div className={props.model.sortData!.sortDone? "number_list unsorted_number_list active" : "number_list unsorted_number_list"}>
            {props.model.unsortData!.map((elem: sortElementInterface, index: number) => sortElement(elem, index, false))}
         </div>
      }
      </Wrapper>
   })