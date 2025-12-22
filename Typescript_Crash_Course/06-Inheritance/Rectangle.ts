import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(private _width:number,private _height:number,x:number,y:number){
        super(x,y);
    }
     public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }


    public get width(): number {
        return this._width;
    }
    public set y(value: number) {
        this._width = value;
    }
    getInfo():string{
        return super.getInfo()+`, height =${this._height}, y=${this._width}`;
    }
    public calculateArea(): number {
        return this._width * this._height;
    }
}