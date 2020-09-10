class Bank{
    constructor(code,address){
        this.code=code;
        this.address=address;
    }
    manages(obj){
        return obj;
    }
    maintaines(obj){
        return obj;
    }
}
class Account extends Bank{
    constructor(number,balance){
        this.number=number;
        this.balance=balance;
    }
    deposit(num){
        this.balance=this.balance+num;
    }
    withdraw(num){
        if(num<this.balance){
            this.balance=this.balance-num;
        }
    }
    createTransaction(){
        
    }
}
class Atm{
    constructor(tid,date,type,amount,postbalance){
        this.tid=tid;
        this.date=date;
        this.type=type;
        this.amount=amount;
        this.postbalance=postbalance;
    }
    modifies(){
       return tid,date,type,postbalance,amount; 
    }
}
class Savings extends Account{
    constructor(acno,balance){
        super(acno,balance);
        this.acno=acno;
        this.balance=balance;
    }
}
class Current extends Account{
    constructor(acno,balance){
        super(acno,balance);
        this.acno=acno;
        this.balance=balance;
    }
     withdraw(num){
        if(num<this.balance){
            this.balance=this.balance-num;
        }
    }
}


