function sum(x, y){
    return x + y;
}
//console.log(sum(1,1));

function sum_1(array){
    return array.reduce(function(prev, next){
        return prev + next;
    });
}
console.log(sum_1([1,2,3,4,5]));

/*function sum_universal(){
    return Array.prototype.reduce.call(arguments, function(prev, next){
        return prev + next;
    });
}
console.log(sum_universal(1,2,3,4,5,6,7,8,9));*/

/////////
function  sum_universal(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}
console.log(sum_universal(1,2,39));


///callee
(function(i){
    if(i>10){
        return;
    }
  console.log(i++);

    arguments.callee(i);
})(0);
console.log("===============");
////////
function coordinates(lat, lang){
    return {
        lat: lat,
        lang: lang,

        setLang: function(value){
            if(typeof(value) !== 'number'){
                return console.error('argument should be number')
            }
            this.lang = `${value}deg`;

        },

        setLat: function(value){
            if(typeof(value) !== 'number'){
                return console.error('argument should be number')
            }
            this.lat = `${value}deg`;
        },



        getCoordinates: function(){
            if(!this.lat || !this.lang){
                return console.error("not enough data :(")
            }
            return [
                this.lang,
                this.lat
            ].join()
        }
    };
}
function createUser(inputName, coordinates) {
    var user = {
        name: inputName,
        getName: function () {
            return user.name;
        },
        location: coordinates

    };
    return user;
}


/*var user = createUser('Max');
function greet(profile) {
    console.log(`Hello, ${profile.getName()}`)*/


//var profile = createUser('Max', coordinates(10,10));
//greet(user);
//console.log(profile);
var coord = coordinates();
/*coord.lang = 12;*/

coord.setLang("adsadsa");
coord.setLat(10);
console.log(coord.getCoordinates());

//////////////////class