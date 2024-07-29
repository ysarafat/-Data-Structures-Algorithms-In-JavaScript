const students = ['jordan', 'erick', 'john', 'michel'];

const findStudent = (students, studentName) => {
    for (let i =0; i < students.length; i++) {
        if(students[i] === studentName) {
            console.log(`Found ${studentName}`);
        }
    }
}

findStudent(students, "john")