


const opener = [...document.getElementsByClassName("opener")];
const questions = [...document.getElementsByClassName("question")];
const details = [...document.querySelectorAll("details")];



questions.forEach(question => {
    question.addEventListener('click', (event) =>{
        question.childNodes[1].classList.toggle("closer");
        

        details.forEach(detail =>{


            if(detail.children[0] !== question){
                detail.removeAttribute("open");
                const notClicked = detail.children[0];
                notClicked.childNodes[1].classList.remove("closer");
            }
        });

    });

    

}); 


questions.forEach(question => {

    question.addEventListener('keydown', (event) => {

        if(event.keyCode == 13 || event.keyCode == 32){

            question.childNodes[1].classList.toggle("closer");
        

        details.forEach(detail =>{


            if(detail.children[0] !== question){
                detail.removeAttribute("open");
                const notClicked = detail.children[0];
                notClicked.childNodes[1].classList.remove("closer");
            }
        });
        }
    })
})