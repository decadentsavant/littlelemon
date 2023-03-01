const fetchAPI = function(date) {
    let result = [];

    for(let i = 5; i <= 11; i++) {
        if(Math.random() < 0.5) {
            result.push(i + ':00pm');
        }
        if(Math.random() < 0.5) {
            result.push(i + ':30pm');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export { fetchAPI, submitAPI };