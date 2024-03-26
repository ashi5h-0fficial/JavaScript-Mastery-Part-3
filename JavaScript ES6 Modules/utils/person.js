
export class person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    info(){
        console.log(`full name: ${this.fname} ${this.lname}, age:${this.age}`)
    }
}


