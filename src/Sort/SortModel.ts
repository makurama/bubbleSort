import {makeAutoObservable} from "mobx";
import {sortModelInterface, sortElementInterface} from './Interface'

export class SortModel implements sortModelInterface{
   //SortModel, а не BabelModel т.к. если бы реализовали другую сортировку, например быструю или слиянием,
   //то брали этот же объект. Например с sortElement(M/VM) такая же история
   listLength: number = 5; //длинна листа для сортировки
   sortDone: boolean = false; //флаг конца сортировки
   numberList: Array<sortElementInterface> | null = null; //лист для сортировки
   speedSort: number = 2000; //лист для сортировки

   constructor() {
      makeAutoObservable(this) //устанавливаем наблюдение значениям, без этого не будет перерендера
   }
}