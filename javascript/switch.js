
// Switch case 
// equality 
// based on weekday number, you have to provide weekday
// 8

let wday = 2
let weekdayText = "";
if(wday == 1 || wday == 8 || wday == "mon" || wday == "MON" || wday == "Mon"){
    weekdayText = "Monday";
}else if(wday == 2 || wday == 9){
    weekdayText = "Tuesday"
}else if(wday == 3 || wday == 10){
    weekdayText= "Wednesday"
}


switch(wday){
    case 1:
    case 8:
    case "mon":  
    case "MON":
    case "Mon":  
        weekdayText = "Monday";
        break;
    case 2:
    case 9:  
    case "tue":    
        weekdayText = "Tuesday"
        break;
    case 3:
    case 10: 
    case "web":    
        weekdayText = "Wednesday"
        break;    
}


