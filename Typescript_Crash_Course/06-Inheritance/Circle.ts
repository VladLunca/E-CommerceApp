import {Shape} from './Shape';

export class Circle extends Shape{
    constructor(x:number,y:number,private _radius:number){
        super(x,y);
    }
    public get radius(): number{
        return this._radius;
    }
    public set radius(val:number){
        this._radius=val;
    }
    getInfo():string{
        return super.getInfo() + `, radius=${this._radius}`;
    }
    public calculateArea(): number {
        return Math.PI*this._radius*this._radius;//(Pow)
    }
}