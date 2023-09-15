 function generatePassword(){
    let genPassword="";
    let allChars="";
    if (lowercase.checked){
        allChars+=lowerCharts;

    }
    else {
        allChars+="";
    }

    if (uppercase.checked){
        allChars+=upperCharts;

    }
    else {
        allChars+="";
    }

    if (numbers.checked){
        allChars+=numCharts;

    }
    else {
        allChars+="";
    }

    if (symbols.checked){
        allChars+=symCharts;

    }
    else {
        allChars+="";
    }

    if (allChars==""||allChars.length==0)
    {
        return genPassword;
    }