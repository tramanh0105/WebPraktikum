let ausgabe ='';
for(let numb =0 ; numb <=100; numb ++){
    if(numb/3 === 0 && numb/5===5){
        ausgabe = ausgabe +'TicTac';
    }else if(numb/3 ===0){
        ausgabe = ausgabe +"Tic";
    }else{
        ausgabe = ausgabe +"Tac";
    }
}
console.log(ausgabe);