let inputvalue= '0';
function appendToDisplays(value){
    if ( inputvalue == 0){
        inputvalue = value;     
    }
    else{
        inputvalue+=value;
    }
    document.querySelector('.calco').textContent = inputvalue; 
}


function clearDisplay(){
    inputvalue= '0';
    document.querySelector('.calco').textContent= inputvalue;
}


function result(){
    try{
        inputvalue=eval(inputvalue).toString();
        document.querySelector('.calco').textContent= inputvalue;
    }
    catch(error){
        document.querySelector('.calco').textContent= 'error';

    }
}