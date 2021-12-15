import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { SortModel } from "../SortModel";
import { SortElementModel } from "../SortElement/SortElementModel";
import { SortElementViewModel } from "../SortElement/SortElementViewModel";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class BubbleViewModel {
    constructor() {
        this.sortData = null;
        this.unsortData = null;
        this.timeouts = [];
        this.sortResetFlag = false;
        this.bubbleSort = (sortData) => {
            let counter = 0; //нужен для таймаута, чтобы визуаилизировать сортировку
            for (let i = 0; i < sortData.numberList.length - 1; i++) {
                for (let j = 0; j < sortData.numberList.length - 1 - i; j++) {
                    counter++;
                    let timeout = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                        //timeout, чтобы отменить действие (в случае reset)
                        //async нужен для цепочки промисов, чтобы отрабатывала анимация
                        runInAction(() => {
                            //runInAction - по сути можно обойтись и без него, в большей части хороший тон,
                            //говорим о том, что изменяем состояние без действия
                            SortElementViewModel.setColor(j, i, sortData, false);
                            SortElementViewModel.setColor(j + 1, i, sortData, true);
                        });
                        if (sortData.numberList[j].value > sortData.numberList[j + 1].value) {
                            yield new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                                SortElementViewModel.animateToX(SortElementViewModel.getHTMLObject(sortData.numberList[j].id), sortData.speedSort, false);
                                //ожидаем последнюю анимацию перед рендером
                                yield SortElementViewModel.animateToX(SortElementViewModel.getHTMLObject(sortData.numberList[j + 1].id), sortData.speedSort, true);
                                resolve('');
                            })).then(r => {
                                runInAction(() => {
                                    if (!this.sortResetFlag) {
                                        [sortData.numberList[j], sortData.numberList[j + 1]] =
                                            [sortData.numberList[j + 1], sortData.numberList[j]]; //меняем 1 и 2 значение местами
                                    }
                                });
                            });
                        }
                        runInAction(() => {
                            if (!this.sortResetFlag) {
                                SortElementViewModel.setColor(j + 1, i, sortData, false);
                                SortElementViewModel.setColor(j, i, sortData, true);
                                if (sortData.numberList.length - 2 === i) { //чтобы закрасить последние элементы массива
                                    SortElementViewModel.setColor(j, i, sortData, false);
                                    sortData.sortDone = true;
                                }
                            }
                        });
                    }), sortData.speedSort * counter);
                    this.timeouts.push(timeout);
                }
            }
        };
        //makeAutoObservable устанавливает автоматически, и мы их переопределяем в overrides
        makeAutoObservable(this, {
            setSize: action,
            sortReset: action,
            getNewSortData: action,
            startSort: action,
            bubbleSort: action,
            sortData: observable // observable - указывает на отслеживаемое поле, нужно для рендера
        });
        this.loadModel();
    }
    setSpeed(speed) {
        this.sortData.speedSort = 2000 / speed;
        this.sortReset();
    }
    setSize(size) {
        this.sortData.listLength = size;
        this.sortReset();
    }
    sortReset() {
        this.timeouts.forEach((timeout) => clearTimeout(timeout));
        this.timeouts = [];
        this.getNewSortData();
    }
    getNewSortData() {
        //можно было использовать класс, а не интерфейс и наследоваться от родительского класса сортировки,
        //где данный метод был бы идентичен для всех дочерних классов,
        //но в угоду уменьшения кода был использован интерфейс
        this.sortData.numberList = (Array.from({ length: this.sortData.listLength }, () => new SortElementModel()));
        this.sortData.sortDone = false;
        this.sortResetFlag = true;
    }
    startSort() {
        if (this.timeouts.length > 0)
            return;
        this.sortResetFlag = false;
        this.unsortData = JSON.parse(JSON.stringify(this.sortData.numberList)); //т.к. будут === объекты
        this.bubbleSort(this.sortData);
    }
    loadModel() {
        this.sortData = new SortModel();
        this.getNewSortData();
    }
}
