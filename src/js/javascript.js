const username = document.querySelector('.username>input')
const email = document.querySelector('.email>input')
const dogface = document.getElementsByClassName('dogface')[0]
const password = document.querySelector('.password>input')
const passwordShow = document.querySelector('.password>.passShow')
const rightHand = document.getElementsByClassName('righthand')[0]
const leftHand = document.getElementsByClassName('lefthand')[0]
const tonguemove = document.querySelector('.mouthhole>.tongue>.tongue')
const passStrengthLine = document.querySelector('.passwordstrength>span')
const passStrengthAlert = document.querySelector('.passstrengthalert')
const signUpBtn = document.getElementsByClassName('signUp')[0]
const errorAlert = document.getElementsByClassName('error')
const main = document.querySelector('main>div')
const bottomside = document.getElementsByClassName('bottomside')[0]
const successfullSignUp = document.getElementsByClassName('successfullSignUp')[0]

//////////UserName Input//////////

username.addEventListener('focus', ()=>{
    let userlength = -(username.value.length) + 15
    if(username.value.length < 30){
        dogface.style.transform = 'translateX(-50%)rotate('+userlength+'deg)'
    }
    username.addEventListener('keydown', ()=>{
        let userlength = -(username.value.length) + 15
        errorAlert[0].innerHTML = ''
        if(username.value.length < 30){
            dogface.style.transform = 'translateX(-50%)rotate('+userlength+'deg)'
        }
    }) 
})
username.addEventListener('blur', ()=>{
    dogface.style.transform = 'translateX(-50%)rotate(0deg)'
})
username.addEventListener('input', (e)=>{
    let uservalue = e.target.value
    if(uservalue.search(/[^a-z | ^0-9 | ^. | ]/i) >= 0 || uservalue.includes(" ")){
        e.target.value= e.target.value.slice(0, e.target.value.length -1)
    }
})

//////////Email Input//////////

email.addEventListener('focus', ()=>{
    let userlength = -(email.value.length) + 15
    if(email.value.length < 30){
        dogface.style.transform = 'translateX(-50%)rotate('+userlength+'deg)'
    }
    email.addEventListener('keydown', ()=>{
        let userlength = -(email.value.length) + 15
        errorAlert[1].innerHTML = ''
        if(email.value.length < 30){
            dogface.style.transform = 'translateX(-50%)rotate('+userlength+'deg)'
        }
    }) 
})
email.addEventListener('blur', ()=>{
    dogface.style.transform = 'translateX(-50%)rotate(0deg)'
})
email.addEventListener('input', (e)=>{
    let emailvalue = e.target.value
    if(emailvalue.search(/[^a-z | ^0-9 | ^. | ]/i) >= 0 || emailvalue.includes(" ")){
        e.target.value= e.target.value.slice(0, e.target.value.length -1)
    }
})

//////////Password Input//////////

password.addEventListener('focus', () => {
    let visibility = password.getAttribute('data-visibility');
    if (visibility === 'off') {
        passhiddenon();
    } else if (visibility === 'on') {
        passhiddenoff()
    }
});

password.addEventListener('keydown', ()=>{
    errorAlert[2].innerHTML = ''
    password.value.trim()
})

passwordShow.addEventListener('click', () => {
    let visibility = password.getAttribute('data-visibility');
    if (visibility === 'off') {
        passhiddenoff()
        password.setAttribute('data-visibility', 'on');
        password.type = 'text';
        password.focus()
    } else if (visibility === 'on') {
        passhiddenon();
        password.setAttribute('data-visibility', 'off');
        password.type = 'password';
        password.focus()
    }
});

password.addEventListener('blur', (event) => {
    if (event.relatedTarget === passwordShow) {
        return;
    }
    rightHand.style.bottom = '-12%';
    rightHand.style.transform = 'rotate(180deg)scale(1.1)';
    leftHand.style.bottom = '-12%';
    leftHand.style.transform = 'rotate(180deg)scale(1.1)';
    tonguemove.classList.add('tonguemove')
});

function passhiddenon() {
    rightHand.style.bottom = '53%';
    rightHand.style.transform = 'rotate(340deg)scale(1.1)';
    leftHand.style.bottom = '53%';
    leftHand.style.transform = 'rotate(20deg)scale(1.1)';
    tonguemove.classList.remove('tonguemove')
}

function passhiddenoff(){
    rightHand.style.bottom = '40%';
    rightHand.style.transform = 'rotate(340deg)scale(1.1)';
    leftHand.style.bottom = '40%';
    leftHand.style.transform = 'rotate(20deg)scale(1.1)';
    tonguemove.classList.remove('tonguemove')
}

//////////Password Strength//////////

password.addEventListener('input', (e)=>{
    let passvalue = e.target.value
    let strength = 0
    strength = 0
    
    if(passvalue.search(/[^a-z | ^0-9 | ^. | ]/i) >= 0 || passvalue.includes(" ")){
        e.target.value= e.target.value.slice(0, e.target.value.length -1)
    }

    passvalue.search(/[0-9]/) >= 0 && strength++
    passvalue.search(/[a-z]/) >= 0 && strength++
    passvalue.search(/[A-Z]/) >= 0 && strength++
    passvalue.length >= 8 && strength++
    switch(strength){
        case 0 : Empty() ; break
        case 1 : veryWeak() ; break
        case 2 : Weak() ; break
        case 3 : Good() ; break
        case 4 : Strong() ;
    } 
})
password.addEventListener('keyup', (pass)=>{
    
    if(pass.code == 'space'){
        console.log('blah blah');
        
    }
    
})

function Empty(){
    passStrengthLine.style.left = '-100%'
    passStrengthLine.style.backgroundColor = 'black'
    passStrengthAlert.innerHTML = 'Empty'
    passStrengthAlert.style.color = 'black'
}
function veryWeak(){
    passStrengthLine.style.left = '-75%'
    passStrengthLine.style.backgroundColor = '#EC1C22'
    passStrengthAlert.innerHTML = 'Very Weak'
    passStrengthAlert.style.color = '#EC1C22'
}
function Weak(){
    passStrengthLine.style.left = '-50%'
    passStrengthLine.style.backgroundColor = 'rgb(193, 0, 129)'
    passStrengthAlert.innerHTML = 'Weak'
    passStrengthAlert.style.color = 'rgb(193, 0, 129)'
}
function Good(){
    passStrengthLine.style.left = '-25%'
    passStrengthLine.style.backgroundColor = 'rgb(0, 67, 118)'
    passStrengthAlert.innerHTML = 'Good'
    passStrengthAlert.style.color = 'rgb(0, 67, 118)'
}
function Strong(){
    passStrengthLine.style.left = '0%'
    passStrengthLine.style.backgroundColor = 'DarkGreen'
    passStrengthAlert.innerHTML = 'Strong'
    passStrengthAlert.style.color = 'DarkGreen'
}

//////////Sign Up Button//////////
signUpBtn.addEventListener('click', ()=>{
    let errors = 0
    if(username.value.length < 6){
        errorAlert[0].innerHTML = 'Your Username must be more than 6 characters'
        errors++
    }
    if(username.value.length == 0){
        errorAlert[0].innerHTML = 'Fill the Blank'
        errors++
    }
    if(email.value.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)){
        errorAlert[1].innerHTML = 'Invalid Email' 
        errors++ 
    }
    if(email.value.length == 0){
        errorAlert[1].innerHTML = 'Fill the Blank'
        errors++
    }
    if(password.value.search(/[a-z]/) == -1 || password.value.search(/[A-Z]/) == -1 || password.value.search(/[0-9]/) == -1 || password.value.length < 8){
        errorAlert[2].innerHTML = 'Use at least 8 characters one uppercase letter one lowercase letter and one number in your password'
        errors++
    }
    if(password.value.length == 0){
        errorAlert[2].innerHTML = 'Fill the Blank'
        errors++
    }
    if(errors == 0){
        bottomside.style.display = 'none'
        successfullSignUp.style.display = 'block'
    }
})
