document.addEventListener("DOMContentLoaded", function() {
    const container2 = document.getElementById("container2");
    const buttonAgree = document.querySelector(".button-agree");
    const overlay = document.querySelector('.overlay');

    // Check if container2 is present
    if (container2) {
        // Wait for the container2 and overlay animation to start and then pause all animations
        setTimeout(pauseAllAnimations, 4000); // Adjust the time as per your requirement
    }

    // Event listener for the agree button
    buttonAgree.addEventListener("click", function() {
        // Resume or reverse animations for container2 and overlay
        container2.classList.add('slideDownReverse');
        overlay.classList.add('fadeOutOverlay');

        // Resume or start other animations
        resumeOrStartOtherAnimations();
    });

    function pauseAllAnimations() {
        // Select all elements that need to pause animating
        const animatedElements = document.querySelectorAll('.square, .square2, .Font-image, .Bintang-image, .line1, .line2');

        // Pause the animation of each element
        animatedElements.forEach(function(element) {
            element.style.animationPlayState = 'paused';
        });
    }

    function resumeOrStartOtherAnimations() {
        // Select all elements that had their animations paused
        const animatedElements = document.querySelectorAll('.square, .square2, .Font-image, .Bintang-image, .line1, .line2');

        // Resume or start the animation for each element
        animatedElements.forEach(function(element) {
            element.style.animationPlayState = 'running'; // Resume paused animations

            // If you have specific animations to start, add them here
            // For example:
            // if (element.classList.contains('some-class')) {
            //     element.classList.add('start-some-animation');
            // }
        });


    }
});





































document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button-disagree');
    var overlay = document.getElementById('overlay2');
    var moreInfoContainer = document.getElementById('moreInfoContainer');

    button.addEventListener('click', function() {
        overlay.style.display = 'block';
        overlay.style.animation = 'fadeInOverlay2 0.5s ease-out 0s forwards';
        moreInfoContainer.style.display = 'block';
        moreInfoContainer.classList.remove('fadeOut');
    });

    // Close functionality on clicking the overlay
    overlay.addEventListener('click', function() {
        this.style.animation = 'fadeOutOverlay2 0.5s ease-out forwards';
        moreInfoContainer.classList.add('fadeOut');
        setTimeout(() => {
            this.style.display = 'none';
            moreInfoContainer.style.display = 'none';
        }, 500); // matches the animation duration
    });
});















document.addEventListener('DOMContentLoaded', function() {
    var rejectButton = document.querySelector('.button-Reject');

    rejectButton.addEventListener('click', function() {
        // Reload the current page without using the cache
        window.location.reload(true);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    var acceptButton = document.querySelector('.button-agree2');

    acceptButton.addEventListener('click', function() {
        // Query all switch inputs and set them to checked
        document.querySelectorAll('.big-switch input, .small-switch input').forEach(function(switchInput) {
            switchInput.checked = true;
        });
    });
});



















document.addEventListener("DOMContentLoaded", function() {
    const container2 = document.getElementById("container2");
    const overlay1 = document.querySelector('.overlay');
    const overlay2 = document.querySelector('.overlay2');
    const moreInfoContainer = document.querySelector(".moreInfo-container");
    const buttonAgree2 = document.querySelector('.button-agree2');
    const buttonAccSelect = document.querySelector('.button-AccSelect');

    // Function to toggle all switches to 'checked'
    function toggleAllSwitches() {
        document.querySelectorAll('.big-switch input, .small-switch input').forEach(function(switchInput) {
            switchInput.checked = true;
        });
    }

    // Function to check if any switch is checked
    function isAnySwitchChecked() {
        return Array.from(document.querySelectorAll('.big-switch input, .small-switch input')).some(input => input.checked);
    }

    // Function to close the moreInfoContainer
    function closeMoreInfoContainer() {
        moreInfoContainer.classList.add('fadeOut');
        setTimeout(() => {
            moreInfoContainer.style.display = 'none';
            closeOverlay2();
        }, 500); // Duration of fadeOut animation for moreInfoContainer
    }

    // Function to close overlay2
    function closeOverlay2() {
        overlay2.style.animation = 'fadeOutOverlay2 0.7s ease-out forwards';
        setTimeout(() => {
            overlay2.style.display = 'none';
            slideDownReverseContainer2();
        }, 700); // Duration of fadeOut animation for overlay2
    }

    // Function to reverse the animation of container2 and proceed to close overlay1
    function slideDownReverseContainer2() {
        container2.classList.add('slideDownReverse');
        setTimeout(() => {
            container2.style.display = 'none';
            closeFirstOverlay();
        }, 600); // Duration of slideDownReverse animation for container2
    }

    // Function to close the first overlay (overlay1)
    function closeFirstOverlay() {
        overlay1.classList.add('fadeOutOverlay');
        setTimeout(resumeOrStartOtherAnimations, 600); // Duration of fadeOutOverlay animation time
    }

    // Function to resume or start other animations
    function resumeOrStartOtherAnimations() {
        const animatedElements = document.querySelectorAll('.square, .square2, .Font-image, .Bintang-image, .line1, .line2');
        animatedElements.forEach(function(element) {
            element.style.animationPlayState = 'running';
        });
    }

    // Event listener for the "Accept all" button
    buttonAgree2.addEventListener("click", function() {
        toggleAllSwitches();
        setTimeout(closeMoreInfoContainer, 500); // Adjust delay based on switch toggle animation
    });

    // Event listener for the "Accept selected" button
    buttonAccSelect.addEventListener("click", function() {
        if (isAnySwitchChecked()) {
            setTimeout(closeMoreInfoContainer, 500); // Adjust delay as needed
        }
    });
});























document.addEventListener("DOMContentLoaded", function() {
    // Selecting big switches (1, 2, 3) and small switches (4, 5, 6)
    const bigSwitch1 = document.querySelector('.container-switch1 .big-switch input');
    const bigSwitch2 = document.querySelector('.container-switch2 .big-switch input');
    const bigSwitch3 = document.querySelector('.container-switch3 .big-switch input');
    const smallSwitch4 = document.querySelector('.container-switch4 .small-switch input');
    const smallSwitch5 = document.querySelector('.container-switch5 .small-switch input');
    const smallSwitch6 = document.querySelector('.container-switch6 .small-switch input');

    // Function to synchronize two switches bidirectionally
    function syncSwitches(switch1, switch2) {
        switch1.addEventListener('change', function() {
            switch2.checked = this.checked;
        });

        switch2.addEventListener('change', function() {
            switch1.checked = this.checked;
        });
    }

    // Synchronizing the states of corresponding switches
    syncSwitches(bigSwitch1, smallSwitch4);
    syncSwitches(bigSwitch2, smallSwitch5);
    syncSwitches(bigSwitch3, smallSwitch6);
});
















document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var button = document.querySelector('.button-AccSelect');

    function updateButtonClass() {
        var isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        button.classList.toggle('hover-green', isAnyChecked);
        button.classList.toggle('hover-red', !isAnyChecked);
    }

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateButtonClass);
    });

    updateButtonClass(); // Run on load
});


















document.addEventListener("DOMContentLoaded", function() {
    // ... kode lainnya ...

    const animatedElements = document.querySelectorAll('.square, .square2, .Font-image, .Bintang-image, .line1, .line2');
    let animationsDone = {}; // Objek untuk menyimpan status animasi

    // Inisialisasi status animasi untuk setiap elemen
    animatedElements.forEach(function(element) {
        animationsDone[element.className] = false; // Atur semula status animasi sebagai false
        element.addEventListener('animationend', function() {
            animationsDone[element.className] = true; // Perbarui status animasi menjadi true ketika selesai
            checkAnimationsAndRedirect();
        });
    });

    function checkAnimationsAndRedirect() {
        // Cek jika semua animasi telah selesai
        const allAnimationsDone = Object.values(animationsDone).every(status => status);
        if (allAnimationsDone) {
            // Menetapkan delay sebelum pengalihan halaman
            setTimeout(function() {
            window.location.href = '../HalamanUtama/Index.html';
            }, 3000); // Delay 3000 milidetik (3 detik)
        }
    }

    // ... kode lainnya ...
});
