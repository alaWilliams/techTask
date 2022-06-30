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

function visitedLectures(arr) {
  let newArr = arr.filter(Number);
  return newArr.length;
}
 
function averageMark(arr) {
  let arrWithoutNull = arr.filter(Number);
  let total = 0;
  for (let i = 0; i < arrWithoutNull.length; i++) {
    total =+ arrWithoutNull.length;
    let avg = total / arrWithoutNull.length;
    return avg;
    };
  return avg
  };

for (const student of students) {
  document.getElementById('name').innerHTML = student.name;
  document.getElementById('last-name').innerHTML = student.lastName;
  document.getElementById('lectures').innerHTML = visitedLectures(student.marks);
  document.getElementById('average').innerHTML = averageMark(student.marks);
};