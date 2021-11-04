class Digit {
    constructor(elements) {
        this.Elements = elements;
        this.Pointer = 0;
    }
    Tick() {
        this.Pointer = (this.Pointer + 1) % this.Elements.length;
        return this.Pointer == 0?true:false;
    }
    Current() {
        return this.Elements[this.Pointer];
    }
}

class DigitGroup {
    constructor() {
        this.Digits = [];
    }
    Inject(elements) {
        this.Digits.push(new Digit(elements));
    }
    Tick() {
        let expire = false;
        this.Dump();
        for(let i = 0; i < this.Digits.length; i++){
            if (!this.Digits[i].Tick()){
                break;
            }
            // if it's the last one and it still stricks, then expire
            expire = (i==(this.Digits.length-1))?true:false;
        }
        
        return expire;
    }
    Dump(){
        let str = "";
        for(let i = 0; i < this.Digits.length; i++){
            str += " " + this.Digits[i].Current();
        }
        console.log(str);
    }

    TickToExpire(){
        while(!this.Tick()) {
        }
    }
}

var group = new DigitGroup();
group.Inject(["a1", "a2"]);
group.Inject(["b1", "b2", "b3"]);
group.Inject(["c1", "c2", "c3", "c4", "c5"])
group.TickToExpire();
