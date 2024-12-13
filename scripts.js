
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451, // ID of the course the assignment group belongs to
  group_weight: 25, // the percentage weight of the entire assignment group
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25", // the due date for the assignment
      points_possible: 50 // the maximum points possible for the assignment
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

/////////////////////////////////////////////////////////////



//////// Function ////////
function getLearnerData(course, ag, submissions) { 

  // Array for final output
  let result = [];

  //////////////////// Course VAlidation ////////////////////////
  // Checks if the course and assignments correspond



  ////////////////////////////////////////////////////////
  try {
    if (course !== ag.course_id) {
      console.log("Course found");
    } else {
        throw "The course has no matching assignments available";
    } 
  } catch (error) {
      console.log(error);
      //alert("The course has no matching assignments available");
  };
  ////////////////////////////////////////////////////////
  // if (course !== ag.course_id) {
  //   throw new Error("Assignment group does not belong to the specified course");
  // }



  //////////////////// Student Objects ////////////////////////
  // Iterate through LearnerSubmissions array
  // Grab student ids
  // Store in a new array

  let learnerIds = [];

  for (let i = 0; i < submissions.length; i++) {
    // Check if ID is in the array & only add if it isn't 
    // (trying out newly learned placement for NOT operator to shorten if statement)
    if (!learnerIds.includes(submissions[i].learner_id)) {
      learnerIds.push(submissions[i].learner_id);
    }
    //console.log(learnerIds);
  }

  // Create objects for each student found to have a learner ID
  // Iterates through the previously created learner ID array to insert ID in to student object
  for (let i = 0; i < learnerIds.length; i++) {
    let studentObjs = {
      id: learnerIds[i],
    };

    //console.log(learnerIds);


      //////////////////// Student Assignment Score Calculation ////////////////////////
      // avg per assignment = assignment score / assignment points possible
      // weighted avg = total submission score / total assignment points


      // Store total possible points & scored points across assignments
      let scoreTotal = 0;
      let possiblePntsTotal = 0;

      let submission;

      for (let s = 0; s < submissions.length; s++) {
        if (
          submissions[s].learner_id === learnerIds[i] && 
          submissions[s].assignment_id === ag.assignments[i].id
        ) {
          submission = submissions[s];
          break;  // Once match is found, stop executing statement
        };
      };
      

      // Grab possible assignment points & scored points per assignments
      let assignmentScore = submission.submission.score;
      let possiblePnts = ag.assignments[i].points_possible;

      // Calculate student's individual assessment scores
      studentObjs[ag.assignments[i].id] = assignmentScore / possiblePnts;

      // Calculate totals for scores & assignments points
      scoreTotal += assignmentScore;
      possiblePntsTotal += possiblePnts;

      // Calculate student's weighted average
      studentObjs.avg = scoreTotal / possiblePntsTotal;

    //no time to attempt lateness check?
    // if() {
    //   //AssignmentScore = [math?]
      
    // }

    //put the above student objects in to the results output
    result.push(studentObjs);
    };

    //console.log(result);
    return result;
};




const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);