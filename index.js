module.exports = function (options) {

    var colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#b49255", "#a94136"];

    var bgcolor;

    var seed = Math.floor(Math.random()*10);

    var settings = Object.assign({
        name: 'Name',
        color: null,
    }, options);

    var initials = settings.name.split(' ').filter(function(el, index) { return el !== ' ' && index <= 1; }).map(function(el) { return el.substring(0, 1).toUpperCase(); }).join('');

    if (settings.color) {
        bgcolor = settings.color
    } else {
        var colorIndex = Math.floor((initials.charCodeAt(0) + seed) % colors.length);
        bgcolor = colors[colorIndex]
    }

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" style="background-color:'+bgcolor+';" viewBox="0 0 200 200" width="200" height="200"><text style="font-weight:400;" font-size="75" x="50%" y="50%" dy="0.35em" pointer-events="auto" fill="#ffffffff" font-family="Georgia,serif" text-anchor="middle">'+initials+'</text></svg>';

    return 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
};

