export interface sortModelInterface {
   listLength: number;
   sortDone: boolean;
   numberList: Array<sortElementInterface> | null;
   speedSort: number;
}

export interface sortMVInterface {
   sortData: sortModelInterface | null;
   unsortData: Array<sortElementInterface> | null;
   timeouts: Array<ReturnType<typeof setTimeout>>;
   setSpeed(speed: number): void;
   setSize(size: number): void;
   sortReset(): void;
   getNewSortData(): void;
   startSort(): void;
   bubbleSort(sortData: sortModelInterface): void;
   loadModel(): void;
}

export interface sortElementInterface {
   value: number;
   color: string;
   id: string;
}
//договор о том, что мы это реализиуем