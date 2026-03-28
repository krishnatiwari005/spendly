// main.js — students will add JavaScript here as features are built

// Video Modal Functionality
(function() {
    const howItWorksBtn = document.getElementById('howItWorksBtn');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('modalClose');
    const videoFrame = document.getElementById('youtubeVideo');

    // Placeholder YouTube URL - replace with actual video ID
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (howItWorksBtn && modal) {
        // Open modal
        howItWorksBtn.addEventListener('click', function(e) {
            e.preventDefault();
            videoFrame.src = videoUrl;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal function
        function closeModal() {
            videoFrame.src = '';
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close on close button click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Close on overlay click (outside modal)
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
})();
