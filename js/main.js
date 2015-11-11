
var introduction = document.getElementById('self_introduction');
var hello_btn = document.getElementById('hello_btn');
var portrait = document.getElementById('portrait');
function display_introduction() {
    "use strict";
    hello_btn.style.visibility = 'hidden';
    hello_btn.style.width = '0';
    hello_btn.style.border = '0px';
    hello_btn.innerHTML = null;
    introduction.style.width = '70%';
    introduction.style.opacity = '1';
    introduction.innerHTML = "My name is Hieu Nguyen, but you can call me James. I am 20 years old Vietnamese guy, currently i am studying in Metropolia Ammattikorkeakoulu. FYI i am now living in Finland. I spent 12 years studying in Vietnamese Elementary school and High school before I came to this peaceful country. I am a mobile engineer in studying progress, a music enthusiast, a photographer in circumstances, and a friendly guy. You are always welcomed to come and say Hi!";
}

function hideBackground(background, content) {
    "use strict";
    document.getElementById(background).style.transitionDelay = '0s';
    document.getElementById(content).style.transitionDelay = '1s';
    document.getElementById(background).style.opacity = '0';
    document.getElementById(content).style.opacity = '1';

}
function showBackground(background, content) {
    "use strict";
    document.getElementById(background).style.transitionDelay = '1s';
    document.getElementById(content).style.transitionDelay = '0s';
    document.getElementById(background).style.opacity = '1';
    document.getElementById(content).style.opacity = '0';
}