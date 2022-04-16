document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM Loaded');

    const toggleSwitch = document.getElementById('theme-switch');
    const checkBoxEl = document.getElementById('theme-switch');
    const bgPrimary = document.querySelectorAll('[background="primary"]');
    const bgSecondary = document.querySelectorAll('[background="secondary"]');
    const bgTertiary = document.querySelectorAll('[background="tertiary"]');
    const txtPrimary = document.querySelectorAll('[text-color="primary"]');
    const txtSecondary = document.querySelectorAll('[text-color="secondary"]');

    // let status;
    let storedTheme;

    // Switch to Light Theme
    const switchToLight = () => {
        window.localStorage.setItem("theme", JSON.stringify(1));
        bgPrimary.forEach(backgroundPrimary => {
            backgroundPrimary.classList.add('light-bg-1')
        })
        bgSecondary.forEach(backgroundSecondary => {
            backgroundSecondary.classList.add('light-bg-2')
        })
        bgTertiary.forEach(backgroundTertiary => {
            backgroundTertiary.classList.add('light-bg-3')
        })
        txtPrimary.forEach(textPrimary => {
            textPrimary.classList.add('primary-text-dark')
        })
        txtSecondary.forEach(textSecondary => {
            textSecondary.classList.add('secondary-text-dark')
        })
        toggleSwitch.setAttribute('theme', 'light');
    }

    // Switch to Light Theme
    const switchToDark = () => {
        window.localStorage.setItem("theme", JSON.stringify(0));
        // blockOne.classList.remove('light-bg-1');
        // blockTwo.classList.remove('light-bg-2');
        bgPrimary.forEach(backgroundPrimary => {
            backgroundPrimary.classList.remove('light-bg-1')
        })
        bgSecondary.forEach(backgroundSecondary => {
            backgroundSecondary.classList.remove('light-bg-2')
        })
        bgTertiary.forEach(backgroundTertiary => {
            backgroundTertiary.classList.remove('light-bg-3')
        })
        txtPrimary.forEach(textPrimary => {
            textPrimary.classList.remove('primary-text-dark')
        })
        txtSecondary.forEach(textSecondary => {
            textSecondary.classList.remove('secondary-text-dark')
        })
        toggleSwitch.setAttribute('theme', 'light')
    }

    // Check Local Storafe
    const getStatus = () => {
        getStorage = JSON.parse(window.localStorage.getItem('theme'));

        if (getStorage === 0) {
            console.log('Dark Theme')
        } else if (getStorage === 1) {
            console.log('Light Theme')
            // If Local storage is set to Light theme, add Light theme clases and activate switch
            switchToLight();
            checkBoxEl.checked = true;
        } else {
            // If local storage = null / none, set to dark theme
            console.log('Dark Theme')
            getStorage = 0;
            console.log(getStorage);
        }

        switch (getStorage) {
            case 0:
                // Set Global Variable to dark
                storedTheme = 0;
                break;
            case 1:
                // Set Global variable to light
                storedTheme = 1;
                break;
            default:
                console.log('No local storage')
                console.log('=============')
                break;
        }

    }

    // Check local storage on page load
    getStatus()

    // Event Listener for Switch Toggle
    toggleSwitch.addEventListener('click', () => {
        switch (storedTheme) {
            case 0:
                switchToLight()
                getStatus()
                break;
            case 1:
                switchToDark();
                getStatus()
                break;
            default:
                console.log('Nothing happened');
                break;
        }

    })

})