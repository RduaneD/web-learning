// Retrieve video data from URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const videoTitle = document.getElementById('video-title');
    const videoSource = document.getElementById('video-source');
    const videoDescription = document.getElementById('video-description');
    
    const courseId = getQueryParam('courseId');
    
    // Sample data for demonstration
    const courseData = {
        1: {
            title: 'HTML Basics',
            videoUrl: 'videos/html-basics.mp4',
            description: 'An introduction to HTML.'
        },
        2: {
            title: 'CSS Fundamentals',
            videoUrl: 'videos/css-fundamentals.mp4',
            description: 'Learn the basics of CSS.'
        },
        3: {
            title: 'JavaScript Essentials',
            videoUrl: 'videos/javascript-essentials.mp4',
            description: 'Essential JavaScript concepts.'
        }
        // Add more courses as needed
    };
    
    if (courseData[courseId]) {
        const course = courseData[courseId];
        videoTitle.textContent = course.title;
        videoSource.src = course.videoUrl;
        videoDescription.textContent = course.description;
    } else {
        videoTitle.textContent = 'Course not found';
        videoSource.src = '';
        videoDescription.textContent = 'No details available for this course.';
    }
});
