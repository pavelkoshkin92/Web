var date = moment();
document.querySelector('p.d1').innerHTML = date;

var date2 = moment().add(3, moment.YEAR);
document.querySelector('p.d2').innerHTML = date2;

document.querySelector('p.result').innerHTML = date.isBefore(date2);




