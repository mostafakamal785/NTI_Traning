const studnts = [
  { name: 'John', degree: [60, 80, 90], address: { city: 'New York' } },
  { name: 'Jane', degree: [70, 85, 95], address: { city: 'Los Angeles' } },
  { name: 'Jim', degree: [50, 75, 80] },
];
const showStudentInfo = (student) => {
  let total = 0;
  for (let score of student.degree) {
    total += score;
  }
  const average = total / student.degree.length;
  console.log(`
        🧾 Student Report:
            Name: ${student.name}
            City: ${student.address?.city ?? 'Not Available'}
            Total Marks: ${total}
            Average Marks: ${average.toFixed(2)}
        }
        `);
};
const showStudentsReport = (students) => {
    for (let student of students) {
        showStudentInfo(student);
    }
}
showStudentsReport(studnts);
const newStudent = { name: 'Jake', degree: [65, 70, 75], address: { city: 'Chicago' } };
const updatedStudents = { ...newStudent, graduate: true };
studnts.push(updatedStudents);
showStudentsReport(studnts);