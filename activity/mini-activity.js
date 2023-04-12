const determineColor = (dayToday) => {
    let colorOfTheDay;
    
    if (typeof dayToday === 'string'){
        switch (dayToday.toLowerCase()) {
            case "monday":
                colorOfTheDay = "Black";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "tuesday":
                colorOfTheDay = "Green";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "wednesday":
                colorOfTheDay = "Yellow";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "thursday":
                colorOfTheDay = "Red";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "friday":
                colorOfTheDay = "Violet";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "saturday":
                colorOfTheDay = "Blue";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            case "sunday":
                colorOfTheDay = "White";
                console.log(`Today is ${dayToday&&dayToday[0].toUpperCase()+dayToday.slice(1)} wear ${colorOfTheDay}`);
                break;
            default:
                console.log("Invalid Input. Enter a valid day of the week.")
        }
    } else {
        console.log("Invalid Input. Please input a string.");
    }
}

determineColor("Monday")
determineColor("monday")
determineColor("MoNDay")