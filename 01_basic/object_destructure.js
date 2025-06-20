let course = {
    name: "JavaScript",
    duration: 3,
    topics: ["Variables", "Functions", "Objects", "Arrays"],
    instructor: {
        name: "John Doe",
        experience: 5
    }
};

let {name : courseName} = course
console.log(courseName); 


let {duration : time} = course
console.log(time);

let {topics : courseTopics} = course
console.log(courseTopics[2]);
