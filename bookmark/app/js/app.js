let btnHamburgerMenu = document.getElementById('hamburgerMenu');

//add the class hamburgerMenu-open to the hamburger menu
btnHamburgerMenu.addEventListener('click',()=>{
    if(btnHamburgerMenu.classList.contains('hamburgerMenu-open')){
        btnHamburgerMenu.classList.remove('hamburgerMenu-open')
    }else{
        btnHamburgerMenu.classList.add('hamburgerMenu-open')
    }
})

//Features

//get The Elements from the dom
const indicatorContainer = document.getElementsByClassName('indicator-container')[0];
const indicatorsDevs = indicatorContainer.getElementsByTagName('div');
const featuresBody = document.getElementsByClassName('features-body')[0];
const featuresDiv = featuresBody.getElementsByClassName('feature-div');


//add and remove the active class from the indicators
for(let i = 0; i< indicatorsDevs.length; i++){
    indicatorsDevs[i].addEventListener('click',()=>{
        indicatorContainer.getElementsByClassName('active')[0].classList.remove('active');
        indicatorsDevs[i].classList.add('active');
        featuresBody.getElementsByClassName('active')[0].classList.remove('active');
        featuresDiv[i].classList.add('active');
    })
}

//Q&A
const questions = document.getElementsByClassName('q');
const answers = document.getElementsByClassName('a');
for(let i = 0;i< questions.length; i++){
    questions[i].addEventListener('click',()=>{
        if(answers[i].classList.contains('slideToggle')){
            answers[i].classList.remove('slideToggle');
        }else{
            if(!answers[i].classList.contains('slideToggle')){
                try{
                    document.getElementsByClassName('slideToggle')[0].classList.remove('slideToggle');
                    answers[i].classList.add('slideToggle');
                }catch{
                    answers[i].classList.add('slideToggle');
                }
            }else{
                
            }
        }
    })
}