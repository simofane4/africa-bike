// Set Default  Color
defaultColor();
function defaultColor(e) {
    if (window.localStorage.getItem('color') == null) {
        color = 'yellow'
    }else{
        color = window.localStorage.getItem('color');
    }
    document.getElementById('color-opt').href = '../../static/css/colors/' + color + '.css';
};