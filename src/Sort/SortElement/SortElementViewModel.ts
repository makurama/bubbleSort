import {action, makeAutoObservable} from "mobx";
import {sortModelInterface} from "../Interface";


export class SortElementViewModel{
   //класс для поведения элементов сортировки
   constructor() {
      makeAutoObservable(this)
   }

   @action static async animateToX(sortElement: HTMLElement, speedSort: number, toLeft: boolean): Promise<string>{
      //метод для анимации передвижения элементов
      return await new Promise(async resolve => {
         let sortElementChild: HTMLElement = sortElement!.childNodes[0] as HTMLElement; //утверждаем тип, т.к. ChildNode не хочет в анимацию
         //и берем потомка. Нужно для вращения в обратные стороны, чтобы текст оставался ровно по оси
         let transformOrigin = toLeft? "left 50%" : "right 50%"

         sortElement!.animate([
            {transform: 'rotate(0)', transformOrigin: transformOrigin},
            {transform: 'rotate(180deg)', transformOrigin: transformOrigin},
         ], speedSort / 3)

         sortElementChild.animate([
            {transform: "rotate(0)"},
            {transform: "rotate(-180deg)"}
         ], speedSort / 3).addEventListener('finish', function() {
            resolve('');
         });
      })
   }

   @action static getHTMLObject(id: string): HTMLElement {
      return document.getElementById('sort_element_'+id)!;
   }

   @action static getColor(colorFlag: boolean): string {
      //получение цвета в порядке i % 2 : boolean
      return colorFlag? "#2af6dd" : "#a153f8"
   }

   @action static setColor(indexJ: number, indexI: number, sortData: sortModelInterface, getColor: boolean): void {
      if(getColor)
         sortData.numberList![indexJ].color = `-webkit-linear-gradient(#FFF, ${SortElementViewModel.getColor((indexI + 1) % 2 === 0)})`
      else
         sortData.numberList![indexJ].color = `-webkit-linear-gradient(#f853a2, #FFF)`;
   }
}