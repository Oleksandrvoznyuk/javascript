// if( 2*4 == 9 ){
//     console.log('Right');
// }else{
//     console.log('No');
// }


let num = 50;

// if(num < 49){
//     console.log('Not right');
// }else if( num > 100){
//     console.log('Too much');
// }else{
//     console.log('Right');
// }

// (num == 50) ? console.log('Yes') : console.log('No');

switch (num){
    case num < 49:
    console.log('No');
    break;

    case num > 100:
    console.log('Noo');
    break;

    case 50:
    console.log('Yess');
    break;

    default:
    console.log('Something wrong');
}