import { makeAutoObservable } from "mobx";
export class SortModel {
    constructor() {
        //SortModel, а не BabelModel т.к. если бы реализовали другую сортировку, например быструю или слиянием,
        //то брали этот же объект. Например с sortElement(M/VM) такая же история
        this.listLength = 5; //длинна листа для сортировки
        this.sortDone = false; //флаг конца сортировки
        this.numberList = null; //лист для сортировки
        this.speedSort = 2000; //лист для сортировки
        makeAutoObservable(this); //устанавливаем наблюдение значениям, без этого не будет перерендера
    }
}
