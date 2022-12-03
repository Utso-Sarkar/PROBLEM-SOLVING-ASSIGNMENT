function feetToMile(feet){
    const divisorValueForConversion = 5280;
    if(feet<0)
    {
       return -1;
    }
    else if(feet==0)
    {       
       return 0;
    }
    else{
        var mile = feet/divisorValueForConversion;
        return mile.toFixed(7);
    }

   

}
var feetInput = 15000;
var resFeetToMile = feetToMile(feetInput);
if(resFeetToMile<0)
{
    console.log('Distance can not be negative. Please provide right value');
}
else if(resFeetToMile==0){
    console.log('Distance can not be zero. Please provide right value')
}
else{
    console.log("Converted distance from feet to mile is:",resFeetToMile);
}