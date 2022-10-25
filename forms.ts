
var button: any;
var backbutton: any;
var formdatas: any;
var formelements: any;





interface IFormElements {

    labelname: string;
    type: string;
    value?: any;
}



class Form implements IFormElements {

    labelname: string;
    type: string;
    value?: any;


    constructor(labelname: string, type: string, value: any) {
        this.labelname = labelname;
        this.type = type;
        this.value = value;

    }

}


interface ICreate {

    dispArray: Array<Form>
    createform();

}



//to display formdatas


class CreateFormClass implements ICreate {

    dispArray: Array<Form>

    constructor(pharray: any) 
    {
        this.dispArray = pharray
    }

    createform() {

        var disp = document.querySelector(".form") as HTMLInputElement;
        disp.innerHTML = "";
        for (var i = 0; i < this.dispArray.length; i++) {

            var p = this.dispArray[i]

            if (p.type == "input") {

                disp.innerHTML += `<label class="labelclass">${p.labelname}</label>
                                    <input name="${p.labelname}" class="inputclass" type=${p.value}><br><br>`

            }

            else if ((p.type) == "select") {

                var s = "";
                s += `<label class="labelclass">${p.labelname}</label>
                                        <select class="inputclass" name=${p.labelname}>`

                for (var j = 0; j < p.value.length; j++) {

                    s += `<option>${p.value[j]}</option>`
                }
                s += `</select><br><br>`
                disp.innerHTML += s;

            }

            else if ((p.type) == "radio") {

                var s = ""
                s += `<label class="labelclass">${p.labelname}</label>`

                for (var j = 0; j < p.value.length; j++) {
                    // var x = j.toString()
                    s += `<input type="radio" id ="${p.value[j]}"name="${p.labelname}" class="inputclass" name=${p.labelname}>
                                        <label>${p.value[j]}</label>`
                }
                s += `<br><br>`
                disp.innerHTML += s;
            }

        }
    }
}

interface IDispForm {

    displaymethod()

}


class DispformDatas implements IDispForm {

    displaymethod() {

        formelements.style.display = "none";
        let submitbutton = <HTMLInputElement>document.getElementById('submit');


        submitbutton.style.display = "none"

        let fname = document.getElementsByClassName('inputclass');
        // let lname = document.getElementsByClassName('labelclass');
        formdatas.innerHTML = "";


        let arr1 = new Array()
        let arr2 = new Array()

        for (var i = 0; i < fname.length; i++) {

            if (fname[i].checked) {

                arr1.push(fname[i].name)
                arr2.push(fname[i].attributes[1].nodeValue)
            }
            else {

                arr1.push(fname[i].name)
                arr2.push(fname[i].value)

            }


        }

        for (var j = 0; j < arr1.length; j++) {
            if (arr2[j] != "on") {
                formdatas.innerHTML += `${arr1[j]}:${arr2[j]}<br><br>`

            }
        }

        formdatas.style.display = "block";
        backbutton = document.getElementById('back');
        backbutton.style.display = "block"
    }

}


class DispformElements implements IDispForm {

    displaymethod() {

        formelements = document.getElementsByClassName("form");
        backbutton = document.getElementById('back');
        backbutton.style.display = "none"

        document.querySelector('form')?.reset();

        formdatas = document.querySelector('.output') as HTMLInputElement;
        formdatas.style.display = "none";

        for (const element of formelements) {

            element.style.display = 'block';
        }
        
        let submitbutton = <HTMLInputElement>document.getElementById('submit');
        submitbutton.style.display = "block"


    }
}



document.addEventListener("DOMContentLoaded", () => {

    //create form
    let l = new CreateFormClass([new Form("First Name", "input", "text"), new Form("Last Name", "input", "text"), new Form("Password", "input", "password"),
    new Form("Education Qualification", "select", ["High School", "Under Graduate", "Post Graduate",]),
    new Form("Gender", "radio", ["Male", "Female"])])
    l.createform();


    //define backbutton

    backbutton = document.getElementById('back');
    backbutton.style.display = "none"
    button = document.getElementById('submit');
    formdatas = document.querySelector('.output') as HTMLInputElement;

    button?.addEventListener('click', function handleClick(event) {
        formelements = <HTMLInputElement>document.getElementById('form');

        //to display formdatas
        let dispdatas = new DispformDatas()
        dispdatas.displaymethod()
    });

    backbutton = document.getElementById('back');
    backbutton.addEventListener('click', function handleClick(event) {

        //to display form elements
        let dispform = new DispformElements()
        dispform.displaymethod()

    });

})



