
const marks = [40, 80,67];

// key values
// object - {} , arrays = []

const userProfile = {
    "name": "Vaibhav",
    "city" : "Pune",
    "Education": [
        {
            "education-level": "10th",
            "marks" : 800,
            "percentage": 80,
            "school":{
                "name" : "asdfa"
            }
        },
        {
            "education-level": "12th",
            "marks" : 300,
            "percentage": 60,
        }
    ]
}
console.log(userProfile["name"]);
console.log(userProfile["Education"][0]["school"]["name"]);


