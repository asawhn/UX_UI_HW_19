$(document).ready(function() {
    // Select the "Download Resume" button
    var downloadButton = $(".resume-button");

    // Select all "View Project" buttons
    var viewProjectButtons = $("button[name^='proj']");

    // Check if the "Download Resume" button is clicked
    var downloadButtonClicked = false;

    // Click event listener for the "Download Resume" button
    downloadButton.on("click", function() {
        if (!downloadButtonClicked) {
            // Using GSAP Library for animation
            gsap.to(downloadButton, {
                scale: 1.5, // Scaling Button
                duration: 0.3, // Animation duration
                yoyo: true, // Animates in "both directions"
                repeat: 1, // Animation repeats for smoother transition
                onComplete: function() {
                    // Change the text to "Downloaded!"
                    downloadButton.text("Downloaded!");
                }
            });

            // Button has been clicked, so set to true
            downloadButtonClicked = true;
        }
    });

    // same animation for project buttons
    viewProjectButtons.on("click", function() {
        // Using GSAP Library for animation again
        gsap.to($(this), {
            scale: 1.5, 
            duration: 0.3, 
            yoyo: true, 
            repeat: 1 
        });
    });
});
