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
  const sum = arrWithoutNull.reduce((accum, curr) => {
    return accum + curr
  }, 0);
  return sum / arrWithoutNull.length;
  };

for (const student of students) {
  document.getElementById('name').innerHTML = student.name;
  document.getElementById('last-name').innerHTML = student.lastName;
  document.getElementById('lectures').innerHTML = visitedLectures(student.marks);
  document.getElementById('average').innerHTML = averageMark(student.marks);
};