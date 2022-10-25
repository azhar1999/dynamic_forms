var button;
var backbutton;
var formdatas;
var formelements;
var Form = /** @class */ (function () {
    function Form(labelname, type, value) {
        this.labelname = labelname;
        this.type = type;
        this.value = value;
    }
    return Form;
}());
//to display formdatas
var CreateFormClass = /** @class */ (function () {
    function CreateFormClass(pharray) {
        this.dispArray = pharray;
    }
    CreateFormClass.prototype.createform = function () {
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
    return CreateFormClass;
}());
var DispformDatas = /** @class */ (function () {
    function DispformDatas() {
    }
    DispformDatas.prototype.displaymethod = function () {
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
                arr1.push(fname[i].name);
                arr2.push(fname[i].attributes[1].nodeValue);
            }
            else {
                arr1.push(fname[i].name);
                arr2.push(fname[i].value);
            }
        }
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[j] != "on") {
                formdatas.innerHTML += "".concat(arr1[j], ":").concat(arr2[j], "<br><br>");
            }
        }
        formdatas.style.display = "block";
        backbutton = document.getElementById('back');
        backbutton.style.display = "block";
    };
    return DispformDatas;
}());
var DispformElements = /** @class */ (function () {
    function DispformElements() {
    }
    DispformElements.prototype.displaymethod = function () {
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
    };
    return DispformElements;
}());
document.addEventListener("DOMContentLoaded", function () {
    //create form
    var l = new CreateFormClass([new Form("First Name", "input", "text"), new Form("Last Name", "input", "text"), new Form("Password", "input", "password"),
        new Form("Education Qualification", "select", ["High School", "Under Graduate", "Post Graduate",]),
        new Form("Gender", "radio", ["Male", "Female"])]);
    l.createform();
    //define backbutton
    backbutton = document.getElementById('back');
    backbutton.style.display = "none";
    button = document.getElementById('submit');
    formdatas = document.querySelector('.output');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
        formelements = document.getElementById('form');
        //to display formdatas
        var dispdatas = new DispformDatas();
        dispdatas.displaymethod();
    });
    backbutton = document.getElementById('back');
    backbutton.addEventListener('click', function handleClick(event) {
        //to display form elements
        var dispform = new DispformElements();
        dispform.displaymethod();
    });
});
