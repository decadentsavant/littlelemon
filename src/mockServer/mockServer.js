// creates random times that reservations are available
const fetchAPI = function() {
    let availableTimes = [];

    for(let i = 5; i <= 11; i++) {
        if(Math.random() < 0.5) {
            availableTimes.push(i + ':00pm');
        }
        if(Math.random() < 0.5) {
            availableTimes.push(i + ':30pm');
        }
    }

    if (availableTimes.length === 0) availableTimes.push("5:30pm")
    
    return availableTimes;
};

// send formData to actual database for production release
const submitAPI = function(formData) {
    return true;
};

export { fetchAPI, submitAPI };