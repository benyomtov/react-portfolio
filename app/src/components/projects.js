import calendar from '../images/calendar.PNG';
import weather from '../images/weather.PNG';
import lightbox from '../images/lightbox.PNG';
import smoking from '../images/smoking.PNG';

const projects = [
    {
        name: 'Weekly Calendar',
        github: 'https://val-gee.github.io/weekly-task-manager/',
        githublink: 'https://github.com/val-gee/weekly-task-manager',
        id: 1,
        url: calendar,
        technologies: "This is a motivational weekly calendar that uses HTML, CSS, JavaScript, MDBootstrap, Day.js, openWeather API, localStorage"
    },
    {
        name: 'Weather App',
        github: 'https://benyomtov.github.io/weather-dashboard/',
        githublink: 'https://github.com/benyomtov/weather-dashboard',
        id: 2,
        url: weather,
        technologies: "This is a simple weather app that uses HTML, CSS, JavaScript, Bootstrap, OpenWeather API, localStorage"
    },
    {
        name: 'LightBox',
        github: 'https://benyomtov.github.io/LightBox/',
        githublink: 'https://github.com/benyomtov/LightBox',
        id: 3,
        url: lightbox,
        technologies: "This is a simple art application built using React, Bootstrap, Canvas API"
    },
    {
        name: 'Smoking App',
        github: 'https://group7-smokequitter.herokuapp.com/',
        githublink: 'https://github.com/jsedlak146/group7-project2' ,
        id: 4,
        url: smoking,
        technologies: "This is a full-stack website designed to help smokers quit; it was built with HTML, CSS, JavaScript, Bootstrap, Handlebars, MySQL, Sequelize, Express, Node.js, Heroku",
    },
];

export default projects;