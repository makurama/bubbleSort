import { action, makeAutoObservable } from "mobx";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class SortElementViewModel {
    //класс для поведения элементов сортировки
    constructor() {
        makeAutoObservable(this);
    }
    static animateToX(sortElement, speedSort, toLeft) {
        return __awaiter(this, void 0, void 0, function* () {
            //метод для анимации передвижения элементов
            return yield new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let sortElementChild = sortElement.childNodes[0]; //утверждаем тип, т.к. ChildNode не хочет в анимацию
                //и берем потомка. Нужно для вращения в обратные стороны, чтобы текст оставался ровно по оси
                let transformOrigin = toLeft ? "left 50%" : "right 50%";
                sortElement.animate([
                    { transform: 'rotate(0)', transformOrigin: transformOrigin },
                    { transform: 'rotate(180deg)', transformOrigin: transformOrigin },
                ], speedSort / 3);
                sortElementChild.animate([
                    { transform: "rotate(0)" },
                    { transform: "rotate(-180deg)" }
                ], speedSort / 3).addEventListener('finish', function () {
                    resolve('');
                });
            }));
        });
    }
    static getHTMLObject(id) {
        return document.getElementById('sort_element_' + id);
    }
    static getColor(colorFlag) {
        //получение цвета в порядке i % 2 : boolean
        return colorFlag ? "#2af6dd" : "#a153f8";
    }
    static setColor(indexJ, indexI, sortData, getColor) {
        if (getColor)
            sortData.numberList[indexJ].color = `-webkit-linear-gradient(#FFF, ${SortElementViewModel.getColor((indexI + 1) % 2 === 0)})`;
        else
            sortData.numberList[indexJ].color = `-webkit-linear-gradient(#f853a2, #FFF)`;
    }
}
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement, Number, Boolean]),
    __metadata("design:returntype", Promise)
], SortElementViewModel, "animateToX", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", HTMLElement)
], SortElementViewModel, "getHTMLObject", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", String)
], SortElementViewModel, "getColor", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, Boolean]),
    __metadata("design:returntype", void 0)
], SortElementViewModel, "setColor", null);
