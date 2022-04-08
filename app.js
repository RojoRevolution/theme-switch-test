document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM Loaded');

    const toggleSwitch = document.getElementById('theme-switch')
    const blockOne = document.querySelector('.block-one')
    const blockTwo = document.querySelector('.block-two')

    // let status;
    let switchStatus;
    let storedTheme;

    const getStatus = () => {
        // let currentTheme = localStorage.getItem('theme')

        getStorage = JSON.parse(window.localStorage.getItem('theme'));
        // getStorage = localStorage.getItem('theme')
        // storedTheme = localStorage.getItem('theme')
        console.log('Current Storage: ', getStorage)

        // if (getStorage === null) {
        //     console.log('SHIT IS NULL YO')
        //     parseInt(getStorage) || 0;
        //     console.log(getStorage)
        // }

        if (getStorage === 0) {
            console.log('SHIT IS GOOD YO')
        } else if (getStorage === 1) {
            console.log('SHIT IS GOOD YO')
        } else {
            console.log('SHIT IS NULL YO')
            getStorage = 0;
            console.log(getStorage);
        }
        // else if (isNan(getStorage)) {
        //     console.log('Shit IS A STRING YO')
        //     getStorage = parseInt(getStorage);
        //     console.log('Strinng parsed to: ', getStorage)
        // }

        switch (getStorage) {
            case 0:
                console.log('Get Storage dark')
                storedTheme = 0;
                console.log('Theme = dark')
                console.log('=============')
                break;
            case 1:
                console.log('Get Storage light')
                storedTheme = 1;
                console.log('Theme = light')
                console.log('=============')
                break;
            // case null:
            //     console.log('Get Storage null')
            //     storedTheme = 0;
            //     console.log('Theme = dark')
            //     console.log('=============')
            //     break;
            default:
                console.log('No local storage')
                console.log('=============')
                break;
        }

        // console.log(toggleSwitch.getAttribute('value'))
        // let getStorage = JSON.stringify(localStorage.getItem('theme'))


        // let adjustedStatus = getStorage.replace(/["]+/g, '');
        // status = adjustedStatus;
        // console.log('Storage Status: ', status)
        // console.log(savedStatus)
        // let status = savedStatus;
        // status.replace(/["]+/g, '');
        // console.log('Status: ', status)
    }

    getStatus()


    // let dummyString = 'Hello Javascript- "This language" is very popular."'
    // let finalString = dummyString.replace(/["]+/g, '')
    // console.log("original string: " + dummyString)
    // console.log("final string: " + finalString)



    // init();
    // console.log(status)

    // ORIGINAL LISTENER
    // toggleSwitch.addEventListener('click', () => {
    //     console.log('click')

    //     let status = toggleSwitch.getAttribute('theme')
    //     // switchStatus = toggleSwitch.getAttribute('theme')
    //     // let switchStatus = status;
    //     console.log('Switch Status', status)
    //     console.log('Status after Click', status)

    //     switch (status) {
    //         case 'dark':
    //             blockOne.classList.add('light-bg-1');
    //             blockTwo.classList.add('light-bg-2');
    //             toggleSwitch.setAttribute('theme', 'light')
    //             localStorage.setItem("theme", 'light');
    //             break;
    //         case 'light':
    //             blockOne.classList.remove('light-bg-1');
    //             blockTwo.classList.remove('light-bg-2');
    //             toggleSwitch.setAttribute('theme', 'dark')
    //             localStorage.setItem("theme", 'dark');
    //             break;
    //         default:
    //             console.log('Nothing happened');
    //             break;
    //     }

    // })

    const switchToLight = () => {
        window.localStorage.setItem("theme", JSON.stringify(1));
        // localStorage.setItem("theme", 1);
        blockOne.classList.add('light-bg-1');
        blockTwo.classList.add('light-bg-2');
        toggleSwitch.setAttribute('theme', 'light');
        console.log('Theme switched to: ', 'Light');
        getStatus()
    }

    const switchToDark = () => {
        window.localStorage.setItem("theme", JSON.stringify(0));
        // localStorage.setItem("theme", 0);
        blockOne.classList.remove('light-bg-1');
        blockTwo.classList.remove('light-bg-2');
        toggleSwitch.setAttribute('theme', 'light')
        console.log('Theme switched to: ', 'Dark')
        getStatus()
    }

    toggleSwitch.addEventListener('click', () => {
        console.log('Theme on Click = ', storedTheme)
        // let status = toggleSwitch.getAttribute('theme')
        // switchStatus = toggleSwitch.getAttribute('theme')
        // let switchStatus = status;
        // console.log('Switch Status', status)
        // console.log('Status after Click', status)

        switch (storedTheme) {
            case 0:
                switchToLight()
                break;
            case 1:
                switchToDark();
                break;
            default:
                console.log('Nothing happened');
                break;
        }

    })

})