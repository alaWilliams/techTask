document.body.innerHTML = '<h1>Just checking</h1>'
const students = [
{
name: 'Martin',
lastName: 'Lant',
marks: [9, 8, null, 7, 5],
},

{
name: 'Francesco',
lastName: 'Portus',
marks: [5, 4, 2, 3, 2],
},

{
name: 'Bill',
lastName: 'Merdoc',
marks: [10, null, null, null, 10],
},

{
name: 'John',
lastName: 'Entman',
marks: [9, 8, 9, 7, 5],
},
];

//getting first names
Document.getElementById('name1') = students[0].name;
Document.getElementById('name2') = students[1].name;
Document.getElementById('name3') = students[2].name;
Document.getElementById('name4') = students[3].name;

//getting last names
Document.getElementById('last-name1') = students[0].lastName;
Document.getElementById('last-name2') = students[1].lastName;
Document.getElementById('last-name3') = students[2].lastName;
Document.getElementById('last-name4') = students[3].lastName;

//getting array of marks
let marks1 = students[0].marks;
let marks2 = students[1].marks;
let marks3 = students[2].marks;
let marks4 = students[3].marks;

//returning the quantity of lectures
function visitedLectures(arr) {
  let newArr = arr.filter(Number);
  console.log(newArr.length)
};

//counting the average mark
function averageMark(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
  total =+ arr.length;
  let avg = total / arr.length;
  console.log(avg);
  };
};

//setting the quantity of lectures
Document.getElementById('lectures1'){
  visitedLectures(marks1)
};
Document.getElementById('lectures2'){
  visitedLectures(marks2)
};
Document.getElementById('lectures3'){
  visitedLectures(marks3)
};
Document.getElementById('lectures4'){
  visitedLectures(marks4)
};

//setting the average grade
Document.getElementById('average1'){
  averageMark(marks1)
};
Document.getElementById('average2'){
  averageMark(marks2)
};
Document.getElementById('average3'){
  averageMark(marks3)
};
Document.getElementById('average4'){
  averageMark(marks4)
};