function vowels(str){
   let vow = 0;
    let glas = 'аияуеёыэоюАИЯОУЫЕЮЭЁ';

    for(let i = 0; i < str.length; i++){
        
        for (let k = 0; k < glas.length; k++) {
            str[i] == glas[k] ? vow++ : '';
            
        }
    }
    return vow
}