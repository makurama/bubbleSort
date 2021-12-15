import {makeAutoObservable} from "mobx";
import {sortElementInterface} from "../Interface";
import { v4 as uuid } from 'uuid';

//каждый бар имеет цвет и значение
export class SortElementModel implements sortElementInterface{
   value: number = Math.ceil( Math.random() * 100 );
   color: string = "-webkit-linear-gradient(#FFF, #FFF)";
   id: string = uuid();
   //uuid нужен для понимания с каким элементом работаем (id), т.к. если брать map(object, index), то при перерендере
   //ид будут постоянно меняться

   constructor() {
      makeAutoObservable(this) //устанавливаем наблюдение значениям, без этого не будет перерендера
   }
}