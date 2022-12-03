
function woodCalculator(numberOfChairs,numberOfTables,numberOfBeds)
{
    if((numberOfBeds < 0)||(numberOfChairs < 0)||(numberOfTables < 0))
    {
        return -1;
    }
    else{
        var woodForChairs = numberOfChairs * 1;
        var woodForTables = numberOfTables * 3;
        var woodForBeds = numberOfBeds * 5;
    
        var totalAmountOfWood = woodForChairs + woodForTables + woodForBeds;
    
        return totalAmountOfWood;
    }
}

var chair = -3;
var table = 4;
var bed = 5;
console.log('Amount of wood requied: '+woodCalculator(chair,table,bed));