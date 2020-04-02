function item() {

    let myInput = document.querySelector('input');
    if (myInput.value !== "") {
        let myDiv = document.createElement('myDiv');
        myDiv.setAttribute("class", "div_elem");
        document.body.append(myDiv);

        ///child element
        let Btn1 = document.createElement("button");
        Btn1.setAttribute("class", "Btn1_elem")
        Btn1.innerHTML = "Complete";

        let Btn2 = document.createElement("button");
        Btn2.setAttribute("class", "Btn2_elem")
        Btn2.innerHTML = "Delete";

        let Span = document.createElement("span");
        Span.innerHTML = myInput.value;
        let ligne = document.createElement("br");
        myDiv.appendChild(Btn1);
        myDiv.appendChild(Btn2);
        myDiv.appendChild(Span);
        myDiv.appendChild(ligne);
        let Button1 = document.getElementsByClassName("Btn1_elem");
        let Span1 = document.getElementsByTagName("span")
        for (let i = 0; i < Button1.length; i++) {
            Button1[i].addEventListener('click', function undo() {
                Button1[i].innerHTML = "undo";
                Span1[i].style.textDecorationLine = "line-through";

            })
        }
        //let close = document.getElementsByClassName("close");

        //for (let i = 0; i < close.length; i++) {
        // close[i].onclick = function() {
        //  var div = this.parentElement;
        //div.style.display = "none";
        // }
        //}
        let Button2 = document.getElementsByClassName("Btn2_elem");
        let DivParent = document.getElementsByClassName("div_elem");

        for (let i = 0; i < Button2.length; i++) {
            Button2[i].addEventListener('click', function delet() {
                DivParent[i].style.display = "none"

            })
        }


    } else alert("please add new task")





}