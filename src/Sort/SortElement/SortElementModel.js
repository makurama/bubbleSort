import { makeAutoObservable } from "mobx";
import { v4 as uuid } from 'uuid';
//каждый бар имеет цвет и значение
export class SortElementModel {
    //uuid нужен для понимания с каким элементом работаем (id), т.к. если брать map(object, index), то при перерендере
    //ид будут постоянно меняться
    constructor() {
        this.value = Math.ceil(Math.random() * 100);
        this.color = "-webkit-linear-gradient(#FFF, #FFF)";
        this.id = uuid();
        makeAutoObservable(this); //устанавливаем наблюдение значениям, без этого не будет перерендера
    }
}
