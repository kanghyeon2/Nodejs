// 11_class.js

// 생성자 함수
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.getInfo = () =>{
        return `${this.name}, ${this.age}, ${this.city}`;
    }
}

let hong = new User("Hong", 30 , "Daegu");
console.log(hong.getInfo());

let Kim = new User("Kim", 25, "Jeju");
console.log(Kim.getInfo());

class Emp {
    constructor(id, name, dept){
        //해당 클래스가 가지는 필드 등록
        this._id = id; // _(언더바) private으로 선언 필드 get set 접근자로 접근
        this._name = name;
        this._dept = dept;
    }

    get id(){
        return this._id;
    }

    set name(name){ //필드로 접근
        this._name = name;
    }

    get name(){
        return this._name;
    }

    setDept(dept){ //함수로 접근
        this._dept = dept;
    }

    getDept(){
        return this._dept;
    }
}

let kang = new Emp(100, 'Kang', 'Sales');
//kang.id = 200; //100
kang._id = 200; //200 get만 존재 set이 존재x
kang.name = 'King'; //get set 둘다 존재 그래서 변경 가능
kang.setDept('Marketing');
console.log(kang);