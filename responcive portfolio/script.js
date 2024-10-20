// show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
    nav = document.querySelector(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        });
    }
}

showMenu('#nav-toggle','#nav-menu');


//  Active && Remove Active

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach( (n) => n.classList.remove('active'));

function actionLink () {  // doubt ... arrow function not work...
    navLink.forEach( (n) => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu  = document.querySelector('#nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach( (e) => e.addEventListener('click',actionLink));

const viewPic = document.querySelector('.home');

