
// Segments page interactive functionality
function toggleSegmentDetails(segmentId) {
    const element = document.getElementById(segmentId);
    const icon = element.parentElement.querySelector('.fa-chevron-down, .fa-chevron-up');
    
    if (element.classList.contains('d-none')) {
        element.classList.remove('d-none');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        element.classList.add('d-none');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Add smooth scrolling animation
document.addEventListener('DOMContentLoaded', function() {
    const segmentItems = document.querySelectorAll('.segment-item');
    segmentItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
