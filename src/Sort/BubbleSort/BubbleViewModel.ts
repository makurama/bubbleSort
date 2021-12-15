import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {SortModel} from "../SortModel";
import {SortElementModel} from "../SortElement/SortElementModel";
import {sortElementInterface, sortModelInterface, sortMVInterface} from "../Interface";
import {SortElementViewModel} from "../SortElement/SortElementViewModel";



export class BubbleViewModel implements sortMVInterface{
   sortData: sortModelInterface | null = null;
   unsortData: Array<sortElementInterface> | null = null;
   timeouts: Array<ReturnType<typeof setTimeout>> = [];
   sortResetFlag = false;

   constructor() {
      //makeAutoObservable устанавливает автоматически, и мы их переопределяем в overrides
      makeAutoObservable(this, {// makeAutoObservable устанавливает наблюдение значениям, без этого не будет перерендера
         setSize: action,
         sortReset: action,
         getNewSortData:action, // action - действие в mobx, нужны для изменения состояния (состояние не изменяется пока не завершится действие)
         startSort: action,
         bubbleSort: action,
         sortData: observable// observable - указывает на отслеживаемое поле, нужно для рендера
      })
      this.loadModel();
   }

   setSpeed(speed: number): void{ // установка скорости перебора значений
      this.sortData!.speedSort = 2000 / speed;
      this.sortReset();
   }

   setSize(size: number): void{ // установка размера массива
      this.sortData!.listLength = size;
      this.sortReset();
   }

   sortReset(): void{
      this.timeouts.forEach((timeout: ReturnType<typeof setTimeout>) => clearTimeout(timeout));
      this.timeouts = [];
      this.getNewSortData();
   }

   getNewSortData(): void{// новый массив для сортировки
      //можно было использовать класс, а не интерфейс и наследоваться от родительского класса сортировки,
      //где данный метод был бы идентичен для всех дочерних классов,
      //но в угоду уменьшения кода был использован интерфейс
      this.sortData!.numberList = ( Array.from(
         {length: this.sortData!.listLength},
         () => new SortElementModel()))

      this.sortData!.sortDone = false;
      this.sortResetFlag = true;
   }

   startSort(): void{//начать сортировку массива
      if(this.timeouts.length > 0)
         return

      this.sortResetFlag = false;
      this.unsortData = JSON.parse( JSON.stringify( this.sortData!.numberList ) ) //т.к. будут === объекты
      this.bubbleSort(this.sortData!);
   }

   bubbleSort = (sortData: sortModelInterface): void => {
      let counter: number = 0; //нужен для таймаута, чтобы визуаилизировать сортировку

      for(let i = 0; i < sortData.numberList!.length - 1; i++){
         for(let j = 0; j < sortData.numberList!.length - 1 - i; j++){
            counter++;

            let timeout: ReturnType<typeof setTimeout> = setTimeout(async () => {
               //timeout, чтобы отменить действие (в случае reset)
               //async нужен для цепочки промисов, чтобы отрабатывала анимация
               runInAction(() => {
                  //runInAction - по сути можно обойтись и без него, в большей части хороший тон,
                  //говорим о том, что изменяем состояние без действия
                  SortElementViewModel.setColor(j, i, sortData, false);
                  SortElementViewModel.setColor(j+1, i, sortData, true);
                  })

               if(sortData.numberList![j].value > sortData.numberList![j+1].value){
                  await new Promise(async resolve => {//вся цепочка промисов нужна для ожидания конца анимации, т.к. рэндер испортит её

                     SortElementViewModel.animateToX(
                        SortElementViewModel.getHTMLObject(sortData.numberList![j].id),
                        sortData.speedSort,
                  false
                     );
                         //ожидаем последнюю анимацию перед рендером
                     await SortElementViewModel.animateToX(
                        SortElementViewModel.getHTMLObject(sortData.numberList![j + 1].id),
                        sortData.speedSort,
                  true
                     );
                     resolve('')

                  }).then(r => {
                     runInAction(() => {
                        if(!this.sortResetFlag){
                           [sortData.numberList![j], sortData.numberList![j+1]] =
                              [sortData.numberList![j+1], sortData.numberList![j]]; //меняем 1 и 2 значение местами
                        }
                     })
                  })
               }

               runInAction(() => {
                  if(!this.sortResetFlag){
                     SortElementViewModel.setColor(j+1, i, sortData, false);
                        SortElementViewModel.setColor(j, i, sortData, true);

                  if(sortData.numberList!.length - 2 === i){ //чтобы закрасить последние элементы массива
                     SortElementViewModel.setColor(j, i, sortData, false);
                     sortData.sortDone = true;
                     }
                  }
               })

            }, sortData.speedSort * counter)
            this.timeouts.push(timeout)
         }
     }
   }

   loadModel(): void{ //загрузка модели, чтобы не мусорить в конструкторе
      this.sortData = new SortModel();
      this.getNewSortData();
   }
}