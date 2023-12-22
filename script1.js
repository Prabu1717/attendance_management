// Sample user data
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'teacher1', password: 'pass2', role: 'teacher' },
    { username: 'student1', password: 'pass3', role: 'student' },
];

// Function to handle role selection
function selectRole() {
    const roleSelection = document.querySelector('input[name="role"]:checked');

    if (roleSelection) {
        const selectedRole = roleSelection.value;
        document.getElementById('role-selection').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('loggedInUser').textContent = selectedRole;

        // Store the selected role in sessionStorage
        sessionStorage.setItem('selectedRole', selectedRole);
    } else {
        alert('Please select a role');
    }
}

// Function to perform login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Welcome, ${user.role} ${username}!`);
        // Set the user role in session storage for future use
        sessionStorage.setItem('userRole', user.role);
        // Redirect to dashboard.html after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to open folders based on the selected role
function openFolder(folderName) {
    const selectedRole = sessionStorage.getItem('selectedRole') || sessionStorage.getItem('userRole');

    if (selectedRole === 'teacher' && folderName === 'Attendance') {
        window.location.href = 'attendance.html';
    } else {
        alert(`Opening ${folderName} folder for ${selectedRole}`);
        // You can implement further functionality here based on the selected role and folder
    }
}
