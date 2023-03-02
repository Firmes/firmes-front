export const getZodiac = (month, day) => {

    // determinar el signo zodiacal basado en la fecha actual
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return {
            img: "/src/assets/aries.png",
            sign: "ARIES"
        };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return {
            img: "/src/assets/taurus.png",
            sign: "TAURUS"
        };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return {
            img: "/src/assets/gemini.png",
            sign: "GEMINI"
        };
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return {
            img: "/src/assets/cancer.png",
            sign: "CANCER"
        };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return {
            img: "/src/assets/leo.png",
            sign: "LEO"
        };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return {
            img: "/src/assets/virgo.png",
            sign: "VIRGO"
        };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return {
            img: "/src/assets/libra.png",
            sign: "LIBRA"
        };
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return {
            img: "/src/assets/scorpio.png",
            sign: "SCORPIO"
        };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return {
            img: "/src/assets/sagittarius.png",
            sign: "SAGITTARIUS"
        };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return {
            img: "/src/assets/capricorn.png",
            sign: "CAPRICORN"
        };
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return {
            img: "/src/assets/aquarius.png",
            sign: "AQUARIUS"
        };
    } else {
        return {
            img: "/src/assets/pisces.png",
            sign: "PISCES"
        };
    }

    /* var datecode = month * 100 + day; //this will give us a number represent month and day
    console.log(month, day);
    console.log(datecode);
    if (datecode <= 120) {        // Jan 20
        return {
            img: "/src/assets/capricorn.png",
            sign: "CAPRICORN"
        };
    } else if (datecode <= 219) { // Feb 19
        return {
            img: "/src/assets/aquarius.png",
            sign: "AQUARIUS"
        };
    } else if (datecode <= 320) { // Mar 20
        return {
            img: "/src/assets/pisces.png",
            sign: "PISCES"
        };
    } else if (datecode <= 420) { // Apr 20
        return {
            img: "/src/assets/aries.png",
            sign: "ARIES"
        };
    } else if (datecode <= 520) { // May 20
        return {
            img: "/src/assets/taurus.png",
            sign: "TAURUS"
        };
    } else if (datecode <= 621) { // Jun 21
        return {
            img: "/src/assets/gemini.png",
            sign: "GEMINI"
        };
    } else if (datecode <= 722) { // Jul 22
        return {
            img: "/src/assets/cancer.png",
            sign: "CANCER"
        };
    } else if (datecode <= 822) { // Aug 22 -- Wikipeday says that it's Aug 23 but then
        //           but then it starts again with Aug 23 so I
        // don't know what's up with that.
        return {
            img: "/src/assets/leo.png",
            sign: "LEO"
        };
    } else if (datecode <= 921) { // Sept 21
        return {
            img: "/src/assets/virgo.png",
            sign: "VIRGO"
        };
    } else if (datecode <= 1022) { // Oct 22
        return {
            img: "/src/assets/libra.png",
            sign: "LIBRA"
        };
    } else if (datecode <= 1121) { // Nov 21
        return {
            img: "/src/assets/scorpio.png",
            sign: "SCORPIO"
        };
    } else if (datecode <= 1221) { // Dec 21
        return {
            img: "/src/assets/sagittarius.png",
            sign: "SAGITTARIUS"
        };
    } else { //if we hit this case it means we hava greater date code than Dec 21
        return {
            img: "/src/assets/capricorn.png",
            sign: "CAPRICORN"
        };
    }
 */
}