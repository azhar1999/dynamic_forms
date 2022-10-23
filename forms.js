var button;
var backbutton;
var formdatas;
var formelements;
var Create = /** @class */ (function () {
    function Create(labelname, type, value) {
        this.labelname = labelname;
        this.type = type;
        this.value = value;
    }
    return Create;
}());
//to display formdatas
var Dispclass = /** @class */ (function () {
    function Dispclass(pharray) {
        this.dispArray = pharray;
    }
    Dispclass.prototype.createform = function () {
        var disp = document.querySelector(".form");
        disp.innerHTML = "";
        for (var i = 0; i < this.dispArray.length; i++) {
            var p = this.dispArray[i];
            if (p.type == "input") {
                disp.innerHTML += "<label class=\"labelclass\">".concat(p.labelname, "</label>\n                                    <input name=\"").concat(p.labelname, "\" class=\"inputclass\" type=").concat(p.value, "><br><br>");
            }
            else if ((p.type) == "select") {
                var s = "";
                s += "<label class=\"labelclass\">".concat(p.labelname, "</label>\n                                        <select class=\"inputclass\" name=").concat(p.labelname, ">");
                for (var j = 0; j < p.value.length; j++) {
                    s += "<option>".concat(p.value[j], "</option>");
                }
                s += "</select><br><br>";
                disp.innerHTML += s;
            }
            else if ((p.type) == "radio") {
                var s = "";
                s += "<label class=\"labelclass\">".concat(p.labelname, "</label>");
                for (var j = 0; j < p.value.length; j++) {
                    // var x = j.toString()
                    s += "<input type=\"radio\" id =\"".concat(p.value[j], "\"name=\"").concat(p.labelname, "\" class=\"inputclass\" name=").concat(p.labelname, ">\n                                        <label>").concat(p.value[j], "</label>");
                }
                s += "<br><br>";
                disp.innerHTML += s;
            }
        }
    };
    return Dispclass;
}());
function displayformdatas() {
    formelements.style.display = "none";
    var submitbutton = document.getElementById('submit');
    submitbutton.style.display = "none";
    var fname = document.getElementsByClassName('inputclass');
    // let lname = document.getElementsByClassName('labelclass');
    formdatas.innerHTML = "";
    var arr1 = new Array();
    var arr2 = new Array();
    for (var i = 0; i < fname.length; i++) {
        if (fname[i].checked) {
            // console.log(fname[i].name);
            arr1.push(fname[i].name);
            arr2.push(fname[i].attributes[1].nodeValue);
            // formdatas.innerHTML+=`${fname[i].name}:${fname[i].attributes[1].nodeValue}<br><br>`
        }
        else {
            // console.log(fname[i].name);
            // console.log(fname[i].value);
            arr1.push(fname[i].name);
            arr2.push(fname[i].value);
            // formdatas.innerHTML+=`${fname[i].name}:${fname[i].value}<br><br>`
        }
    }
    console.log(arr1);
    for (var j = 0; j < arr1.length; j++) {
        if (arr2[j] != "on") {
            formdatas.innerHTML += "".concat(arr1[j], ":").concat(arr2[j], "<br><br>");
        }
    }
    formdatas.style.display = "block";
    backbutton = document.getElementById('back');
    backbutton.style.display = "block";
}
// to display back form
function formmethod() {
    var _a;
    formelements = document.getElementsByClassName("form");
    backbutton = document.getElementById('back');
    backbutton.style.display = "none";
    (_a = document.querySelector('form')) === null || _a === void 0 ? void 0 : _a.reset();
    formdatas = document.querySelector('.output');
    formdatas.style.display = "none";
    for (var _i = 0, formelements_1 = formelements; _i < formelements_1.length; _i++) {
        var element = formelements_1[_i];
        element.style.display = 'block';
    }
    var submitbutton = document.getElementById('submit');
    submitbutton.style.display = "block";
}
//creating forms
// function createform(Array:any){
//         var disp=document.querySelector(".form") as HTMLInputElement;
//         disp.innerHTML="";
//         for (var i=0;i<Array.length;i++){
//             var p=Array[i]
//             if (p.type=="input"){
//                 disp.innerHTML+=`<label class="labelclass">${p.labelname}</label>
//                                 <input name="${p.labelname}" class="inputclass" type=${p.value}><br><br>`
//             }
//             else if ((p.type)=="select"){
//                 var s="";
//                 s+=`<label class="labelclass">${p.labelname}</label>
//                                     <select class="inputclass" name=${p.labelname}>` 
//                 for(var j=0;j<p.value.length;j++){
//                     s+=`<option>${p.value[j]}</option>`
//                 }
//                 s+=`</select><br><br>`
//                 disp.innerHTML+=s;
//             }
//             else if((p.type)=="radio"){
//                     var s=""
//                     s+=`<label class="labelclass">${p.labelname}</label>`
//                         for(var j=0;j<p.value.length;j++){
//                             // var x = j.toString()
//                                     s+=`<input type="radio" id ="${p.value[j]}"name="${p.labelname}" class="inputclass" name=${p.labelname}>
//                                     <label>${p.value[j]}</label>`
//                                 }
//                         s+=`<br><br>`
//                         disp.innerHTML+=s;
//                 }
//             }
//         }
document.addEventListener("DOMContentLoaded", function () {
    //create form
    var l = new Dispclass([new Create("firstname", "input", "text"), new Create("lastname", "input", "text"), new Create("password", "input", "password"),
        new Create("Education Qualification", "select", ["High School", "Under Graduate", "Post Graduate",]),
        new Create("gender", "radio", ["male", "female"])]);
    l.createform();
    //define backbutton
    backbutton = document.getElementById('back');
    backbutton.style.display = "none";
    button = document.getElementById('submit');
    formdatas = document.querySelector('.output');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
        formelements = document.getElementById('form');
        //to display formdatas
        displayformdatas();
    });
    backbutton = document.getElementById('back');
    backbutton.addEventListener('click', function handleClick(event) {
        //to display form elemetns
        formmethod();
    });
});
