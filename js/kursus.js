// Placeholder data
const courses = [
    {
        id: 1,
        title: 'HTML Basics',
        description: 'Learn the basics of HTML.',
        duration: '3 hours',
        videoUrl: 'video/html-basics.mp4'
    },
    {
        id: 2,
        title: 'CSS Fundamentals',
        description: 'Understand the fundamentals of CSS.',
        duration: '4 hours',
        videoUrl: 'video/css-fundamentals.mp4'
    },
    {
        id: 3,
        title: 'JavaScript Essentials',
        description: 'Master the basics of JavaScript.',
        duration: '5 hours',
        videoUrl: 'video/javascript-essentials.mp4'
    },
    {
        id: 4,
        title: 'Responsive Web Design',
        description: 'Create responsive websites that work on any device.',
        duration: '6 hours',
        videoUrl: 'video/responsive-web-design.mp4'
    },
    {
        id: 5,
        title: 'Advanced JavaScript',
        description: 'Deep dive into JavaScript and learn advanced concepts.',
        duration: '7 hours',
        videoUrl: 'video/advanced-javascript.mp4'
    },
    {
        id: 6,
        title: 'Introduction to React',
        description: 'Learn the basics of React, a popular JavaScript library.',
        duration: '8 hours',
        videoUrl: 'video/introduction-to-react.mp4'
    },
    {
        id: 7,
        title: 'Backend Development with Node.js',
        description: 'Understand how to build backend services using Node.js.',
        duration: '10 hours',
        videoUrl: 'video/backend-development-nodejs.mp4'
    },
    {
        id: 8,
        title: 'Database Management with MySQL',
        description: 'Learn how to manage databases using MySQL.',
        duration: '6 hours',
        videoUrl: 'video/database-management-mysql.mp4'
    },
    {
        id: 9,
        title: 'Web Development with PHP',
        description: 'Learn how to build dynamic websites using PHP.',
        duration: '9 hours',
        videoUrl: 'video/web-development-php.mp4'
    },
    {
        id: 10,
        title: 'Version Control with Git',
        description: 'Master Git for version control and collaboration.',
        duration: '4 hours',
        videoUrl: 'video/version-control-git.mp4'
    }
];

const courseList = document.getElementById('course-list');

// Render course list
courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = course.title;
    li.onclick = () => showCourseDetail(course);
    courseList.appendChild(li);
});

// Show course details and redirect to video
function showCourseDetail(course) {
    const isLoggedIn = confirm("Apakah Anda sudah login?");
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    // Redirect to video page with courseId parameter
    window.location.href = `video.html?courseId=${course.id}`;
}
