// Sample student data
let studentData = [];

// Function to add a new student
function addStudent() {
    const studentName = document.getElementById('studentName').value;
    
    if (studentName.trim() !== '') {
        // Check if the student is already in the list
        if (!studentData.find(student => student.name === studentName)) {
            studentData.push({ name: studentName, status: 'absent' });
            updateStudentList();
        } else {
            alert('Student already exists in the list.');
        }
    } else {
        alert('Please enter a valid student name.');
    }
}

// Function to update the student list
function updateStudentList() {
    const studentListDiv = document.getElementById('student-list');
    studentListDiv.innerHTML = '';

    studentData.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.innerHTML = `<p>${student.name} - ${student.status}</p>`;
        studentListDiv.appendChild(studentDiv);
    });
}

// Function to mark attendance
function markAttendance() {
    const selectedStatus = document.getElementById('attendanceStatus').value;
    const loggedInUser = sessionStorage.getItem('userRole');

    if (loggedInUser === 'teacher') {
        const studentList = document.querySelectorAll('.student');
        
        studentList.forEach((studentDiv, index) => {
            const student = studentData[index];
            student.status = selectedStatus;
            studentDiv.innerHTML = `<p>${student.name} - ${student.status}</p>`;
        });
    } else {
        alert('Only teachers can mark attendance.');
    }
}

// Display the logged-in user
document.getElementById('loggedInUser').textContent = sessionStorage.getItem('userRole');

// Initially update the student list
updateStudentList();
