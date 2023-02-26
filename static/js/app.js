
//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }

    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.getElementById("back-to-top").style.display = "inline";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// Smooth scroll 
var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 400,
    offset: 70
});


// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});

//  Back To Top Smooth scroll 
var scroll = new SmoothScroll('#back-to-top', {
    speed: 1000
});

// Swicher
function toggleSwitcher() {
    var i = document.getElementById('style-switcher');
    if (i.style.left === "-189px") {
        i.style.left = "-0px";
    } else {
        i.style.left = "-189px";
    }
};

function setColor(theme) {
    window.localStorage.removeItem('color');
    window.localStorage.setItem("color", theme);
    document.getElementById('color-opt').href = '../../static/css/colors/' + theme + '.css';
    toggleSwitcher(false);
};

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


// Contact Form
$(document).ready(function(){
    $('#contact').on('submit',function(e){
        $("#simple-msg").empty();
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var comments = document.getElementById("comments").value;
        document.getElementById("error-msg").style.opacity = 0;
        document.getElementById('error-msg').innerHTML = "";
        if (name == "" || name == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Please enter a name</div>";
            fadeIn();
        }
        else if (email == "" || email == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Please enter a email</div>";
            fadeIn();
        }
        else if (subject == "" || subject == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Please enter a subject</div>";
            fadeIn();
        }
        else if (comments == "" || comments == null) {
            document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>Please enter a comments</div>";
            fadeIn();
        }
        else{
         const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value;
        $.ajax({
            type: "POST",
            url: "/contact/",
            headers: {
                "X-CSRFToken": csrftoken,
            },
            data: {
                name: name,
                email: email,
                subject: subject,
                comments:comments,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
            },
            success: function (data) {
                if (data.success_message) {
                    $("#simple-msg").empty();
                    $("#contect_form").trigger("reset");
                    $("#simple-msg").append("<fieldset><div id='success_page'><h5 class='text-success'>Email Sent Successfully.</h5><p>Thank you <strong>admin</strong>, your message has been submitted to us.</p></div></fieldset>");
                } else {
                }
            },
            error: function (error) {
                // handle error
            },
        });
        }
    });
}); 

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

// Tetx-rotate
var i = 0;
var text_rotate = [];
var time = 3000;

text_rotate[0] = "We love make things amazing and simple";
text_rotate[1] = "Create amazing landing page with Globing";
text_rotate[2] = "Perfact solution for small businesses";


function changeText() {
    document.getElementById("target").innerHTML = text_rotate[i];
    i = (i < text_rotate.length - 1) ? i + 1 : 0;
    setTimeout('changeText()', time);
}

//image-rotate
var i = 0;
var image_rotate = [];
var time = 3000;

image_rotate[0] = '/static/images/slide1.jpg';
image_rotate[1] = '/static/images/slide2.jpg';
image_rotate[2] = '/static/images/slide3.jpg';

function changeimage() {
    document.silde.src = image_rotate[i];
    i = (i < image_rotate.length - 1) ? i + 1 : 0;
    setTimeout('changeimage()', time);
}

// typed

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

function typewrite() {

    if (toRotate === 'undefined') {
        changeText()
    }
    else
        var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




