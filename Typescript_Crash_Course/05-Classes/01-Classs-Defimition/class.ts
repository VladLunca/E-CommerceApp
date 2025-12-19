export class Customer{
    private _firstName: string; //public by default 
    private _lastName: string;

    constructor(first:string,last:string){
        this._firstName=first;
        this._lastName=last;
    }
    get firstName(){//works only on ES5 or higher

        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set firstName(value:string){
         this._firstName=value;
    }
    set lastName(value:string){
         this._lastName=value;
    }

}