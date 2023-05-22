var buttonStatus = false;

function pop(){

    console.log("haha");
    let rec = document.getElementsByClassName("rectangle")[0];
    let but = document.getElementsByClassName("button")[0];
    let text = document.getElementsByClassName("button-text")[0];

    if (!buttonStatus) {
        try {
            document.body.classList.remove("body-animation-reverse");

        } catch (error) {}

        document.body.classList.add("body-animation")
        rec.classList.add("rectangle-animation")
        text.textContent = "let's close";
        but.classList.add("button-animation");
    
        but.addEventListener("animationend", ()=>{
            but.classList.remove("button-animation")
        });

        
    } else{
        try {
            document.body.classList.remove("body-animation");
            rec.classList.remove("rectangle-animation")
        } catch (error) {}

        document.body.classList.add("body-animation-reverse")
        rec.classList.add("rectangle-animation-reverse")
        text.textContent = "pop it!"
        but.classList.add("button-animation");

        but.addEventListener("animationend", ()=>{
            but.classList.remove("button-animation")
        });
    }

    buttonStatus = !buttonStatus;
}

