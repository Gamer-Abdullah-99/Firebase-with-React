export let data = {
  authUser: {},
  studentsData: [
    {
      studentName: "akram",
      rollNo: "522",
      totalMarks: "267",
      feedback: "Average performance in class",
      grade: "C",
    },
    {
      studentName: "maaz",
      rollNo: "134",
      totalMarks: "168",
      feedback: "Bad performance in class",
      grade: "F",
    },
    {
      studentName: "abdullah",
      rollNo: "211",
      totalMarks: "480",
      feedback: "Good performance in class",
      grade: "A+",
    },
  ],
  users: [
    {
      userName: "haider",
      email: "haider@gmail.com",
      password: "123456",
      role: "teacher",
    },
    {
      userName: "abdullah",
      email: "abdullah@gmail.com",
      password: "123456",
      role: "student",
    },
    {
      userName: "akram",
      email: "akram@gmail.com",
      password: "123456",
      role: "student",
    },
  ],
  loginCheck() {},
};

export function reducer(state, action) {
  switch (action.type) {
    case "SIGNUP_USER": {
      let usersClone = state.users.slice(0);
      usersClone.push(action.payload);
      return {
        ...state,
        users: usersClone,
      };
    }
    case "LOGIN_USER": {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "SIGNOUT_USER": {
      return {
        ...state,
        authUser: {},
      };
    }
    case "ADD_STUDENTS_DATA": {
      let studentsDataClone = state.studentsData.slice(0);
      studentsDataClone.push(action.payload);
      return {
        ...state,
        studentsData: studentsDataClone,
      };
    }
    case "REMOVE_STUDENTS_DATA": {
      let a = action.payload;
      let x = state.studentsData;
      for (var i = 0; i < x.length; i++) {
        if (x[i].studentName === a) {
          x.splice(i, 1);
          console.log(x);
          break;
        } else {
          console.log("Hello");
        }
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
