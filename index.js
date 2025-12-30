 // Get elements
    const shareButton = document.getElementById('shareButton');
    const shareTooltip = document.getElementById('shareTooltip');

    // Add event listeners for tooltip
    shareButton.addEventListener('mouseenter', () => {
      shareTooltip.classList.add('active');
    });

    shareButton.addEventListener('mouseleave', () => {
      shareTooltip.classList.remove('active');
    });

    // Optional: Close tooltip if user clicks outside
    // document.addEventListener('click', (event) => {
    //   if (!shareButton.contains(event.target) && !shareTooltip.contains(event.target)) {
    //     shareTooltip.classList.remove('active');
    //   }
    // });

    // Optional: Make social icons clickable (example)
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        // e.stopPropagation(); // Prevent closing tooltip
        alert(`Sharing via this platform...`); // Replace with real logic
      });
    });