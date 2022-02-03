function lockedProfile() {
    let profiles = Array.from(document.querySelectorAll('.profile'));
    profiles.forEach(profile => {
        let lockButton = profile.querySelectorAll('input[type="radio"]')[0];
        let unlockButton = profile.querySelectorAll('input[type="radio"]')[1];
        let hiddenDetails = profile.querySelector('div');
        let button = profile.querySelector('button');

        function ShowDetails() {
            if (button.textContent == 'Show more') {
                hiddenDetails.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent == 'Hide it') {
                hiddenDetails.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
        unlockButton.addEventListener('change', () => {
            button.addEventListener('click', ShowDetails);
        })
        lockButton.addEventListener('change', () => {
            button.removeEventListener('click', ShowDetails);
        })
    });


}