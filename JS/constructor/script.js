/**
 * Created by Paul on 17.06.16.
 */
/*function Profile(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`My name is ${this.name}.`)

    }
}
function Address(counrty, street, box) {
    this.country = country;
    this.street = street;
    this.box = box;
}

var max = new Profile('max', 24);
max.sayHello();
var myAddr = new Address('Ukraine', 'Soborny av.', 155);

var list = [
    max,
    fdsf,
    myAddr
];

list.forEach(function (item) {
    if(item instanceof Profile){
        console.log(`My name is ${item.name}. I'm ${item.age} yrs old`)
    }

    if(item instanceof myAddr){
        console.log(`My address is ${item.country}, ${item.street}, ${item.box}.`)
    }

});
*/
function Human(name, walk){
    this.name = name;
    this.walk = function (){
        return "I can walk"
    };
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}, ${this.walk}.`)
    }


};
function Worker(name, walk, work){
    Human.apply(this, arguments);
    this.work = function(){
        return "I can make shaurma"
    };
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}, ${this.walk} and ${this.work}.`)
    }

};

var ashot = new Worker('Ashot', this.walk, this.work);

ashot.sayHello();



///------------ Call

var a = {
    name: 'Max',
    work: function(num){
        console.log(this.name, num, summ, str)
    }
};

a.work();

var b = {
    name: 'Tamir'
};
var func = a.work;
func.call(a);
func.call(a, 1, 10, 'str');
func.apply(a, [1, 10, 'str']);

//////-------------------//-method, / - property
class Chat
    /listUsers[];
    //login(user);
    //logout(user)
class User
    /name: string;
    //chat(message) say;
class Admin
    User inheritance +
    chat(message)
    >>login-message
a = user
a.chat()
ch =chat;
ch.login(a);
ch.login(b);
in chat func - document.write