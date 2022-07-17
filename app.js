const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //Button click active class
    for (let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
         })
    }
    //sections Active class
    for (const Section of allSections){
    Section.addEventListener('click', function(event){
        const id = event.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            event.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

    
}

PageTransitions();