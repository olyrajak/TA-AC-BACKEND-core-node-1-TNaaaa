const PI = 22 / 7;

function areasquare(a) {
    return a * a;
}

function arearectangle(l, b) {
    return l * b;
}

function areacircle(r) {
    return PI * r * r;
}

module.exports = {
    areasquare: areasquare,
    arearectangle: arearectangle,
    areacircle: areacircle
}