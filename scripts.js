// Course Info Data
const courseInfoObj = {
  "id": 201,
  "name": "Technical Game Design",
};

// Assignment Group Data
const assignmentGroup = {
  "id": 8936,
  "name": "Fundamentals of Unity",
  "course_id": courseInfoObj.id, //[201 or courseInfoObj.id], // ID of the course the assignment group belongs to // hard code or set to grab from above?
  "group_weight": 25, // the percentage weight of the entire assignment group
  "assignments": [{ //Assignment's object info => add multiples later
      "id": 1,
      "name": "The Editor Interface", //3D Scene Navigation, Prefabs
      "due_at": 2023-10-15,  // the due date for the assignment
      "points_possible": 50,  // the maximum points possible for the assignment
    },
    { 
      "id": 2,
      "name": "3D Scene Navigation",
      "due_at": 2023-10-10,  // the due date for the assignment
      "points_possible": 50,  // the maximum points possible for the assignment
    },
    { 
      "id": 3,
      "name": "Prefabs",
      "due_at": 2023-10-20,  // the due date for the assignment
      "points_possible": 100,  // the maximum points possible for the assignment
    },
  ],
};

// Learner Submission Data
// Instructions say "An array of objects" => add multiples later
const learnerSubmissionArr = [
  {
    "learner_id": 32,
    "assignment_id": 56, // not sure if I should put a number or grab from: assignmentGroupArr.assignments.id,
    "submission": {
      "submitted_at": 2023-10-25,
      "score": 43,
    },
  },
  {
    "learner_id": 17,
    "assignment_id": 56, // not sure if I should put a number or grab from: assignmentGroupArr.assignments.id,
    "submission": {
      "submitted_at": 2023-10-25,
      "score": 65,
    },
  },
];



////////////////////////////////////////////////////////////////////////////////////////////
///////// First Steps ///////
//// Break it down in to simple steps; each object is students, assignments
//// 	1. start with just trying to generate an array of unique IDs
//// 	- Try to understand how we got from relations to results & the relation between the data

////// generate an array of unique IDs (grab the ids from multiple objects & put them in an array?)
//console.log(assignmentGroup.assignments[1]["points_possible"]);

////// access & iterate over entire array
////// grab the object + all key:values
// for (const data of assignmentGroupArr.assignments) {
//   console.log(data);
// }
//// for of loops only supports iterable objects like arrays, not objects

///// access & iterate over entire array
///// grab the object + specific key:values
// for (const id in assignmentGroupArr.assignments) {
//   console.log(id);
// }

//returns length of array
// for (const submission in learnerSubmissionArr) {
//   console.log(submission);
// }

// learnerSubmissionArr
// // console.log(learnerSubmissionArr[0]); "learner_id"

// array > each object > learner_id
// learnerSubmissionArr[]["learner_id"]

/////////////////////////////////////////////////////////////////////////////////////


// let courseInfo = () => {

// };


function getLearnerData(courseInfo, assignmentGrp, [submission]) {
  const assignments = assignmentGroup.assignments;
  const assignmentScores = {};
  const students = {};

  for (const submission of LearnerSubmissions) {
    const learnerIds = learnerSubmissionArr[i]["learner_id"];

  }


};

// Grabs student IDs
studentList = (studentId) => {
  const studentArr = [];
  for (let i = 0; i < studentId.length; i++) {
    studentArr = learnerSubmissionArr[i]["learner_id"];
    //console.log(`learner ids: ${learnerIds}`); 
    studentArr.push(studentId[i])
  };
};


studentList = (studentId) => {
  const studentArr = [];
  for (let i = 0; i < studentId.length; i++) {
    studentArr = learnerSubmissionArr[i]["learner_id"];
    //console.log(`learner ids: ${learnerIds}`); 
    studentArr.push(studentId[i])
  };
  return studentArr
};

console.log(studentList);



  let learnerIds = []
    for (let i = 0; i < learnerSubmissionArr.length; i++) {
      learnerIds = learnerSubmissionArr[i]["learner_id"];
      //console.log(`learner ids: ${learnerIds}`); 
      learnerIds.push()
    };
    return learnerIds;
};

// Grabs learner's score
learnerScore = (submissionScore) => {
  let submissionScore
    for (let i = 0; i < learnerSubmissionArr.length; i++) {
      submissionScore = learnerSubmissionArr[i]["submission"]["score"];
      //console.log(`submissions scores: ${submissionScore}`);
    };
    return submissionScore;
};


    // Iterates through the assignment group data 
    // grabs assignment points possible
pointsPossible = (possiblePoints) => {
  let possiblePoints
    for (let i = 0; i < assignmentGroup.assignments.length; i++) {
      possiblePoints = assignmentGroup.assignments[i]["points_possible"];
      //console.log(`possible points: ${possiblePoints}`);
    };
    return possiblePoints;
};


// calculates weighted average
submissionScore = learnerScore();
possiblePoints = pointsPossible();

calcWeightedAvg = (submissionScore, possiblePoints) => {
    let weightedAvg = submissionScore / possiblePoints;
    //console.log(`weight: ${weightedAvg}`);
    return weightedAvg;
};

// console.log(calcWeightedAvg(), pointsPossible(), learnerScore(), studentList())

console.log(calcWeightedAvg(10, 5))

// grab the data & add to the object in an Array
// output = [{}]



// const getLearnerData = (courseInfo, assignmentGrp, [submission]) => {
  
//   output = {}


  // Iterates through the learner submission data & grabs IDs
  // for (let i = 0; i < learnerSubmissionArr.length; i++) {

  // };






  //console.log(output)

  //   return learnerIds;
  // return submissionScore;
  // return possiblePoints;


// };






// for (const points_possible in assignmentGroup.assignments) {
//   console.log(assignmentGroup.assignments[points_possible]);
// }


//object > array > 
// const assignmentGroup = {
//   "id": 8936,
//   "name": "Fundamentals of Unity",
//   "course_id": courseInfoObj.id, //[201 or courseInfoObj.id], // ID of the course the assignment group belongs to // hard code or set to grab from above?
//   "group_weight": 25, // the percentage weight of the entire assignment group
//   "assignments": [{ //Assignment's object info => add multiples later
//       "id": 1,
//       "name": "The Editor Interface", //3D Scene Navigation, Prefabs
//       "due_at": 2023-10-15,  // the due date for the assignment
//       "points_possible": 50,  // the maximum points possible for the assignment
//     },




    
// object > array > points
// assignmentGroupArr > assignmentInfoObj > "points_possible": number









// getLearnerData(courseInfo, assignmentGrp, [submission])