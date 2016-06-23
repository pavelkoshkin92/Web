/**
 * Created by Paul on 22.06.16.
 */
function test(){
    throw new Error('something is wrong');
}

function test_1() {
    try{
        test()
    }
    catch(e){
        console.error('error')
    }
    console.lot('blah-blah-blah');
    throw new Error('test 2 msg');
}
function test_m(){
    try{
        test_1();
    }
    catch(e){
        console.error(e.message, e.stack);
    }
}
function main(){
    test_m();
    console.log("OK")
}
main();