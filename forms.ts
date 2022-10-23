
var button:any;
var backbutton:any;
var formdatas:any;
var formelements:any;





interface ICreate{
    labelname:string;
    type:string;
    value?:any;

}



class Create implements ICreate{
    labelname:string;
    type:string;
    value?:any;


    constructor(labelname:string,type:string,value:any){
        this.labelname=labelname;
        this.type=type;
        this.value=value;
    }
}


interface IDisp{
    dispArray:Array<Create>
    createform();
}



//to display formdatas


class Dispclass implements IDisp{
    dispArray:Array<Create>
    constructor(pharray:any){
        this.dispArray=pharray
    }

     createform(){
            var disp=document.querySelector(".form") as HTMLInputElement;
            disp.innerHTML="";
            for (var i=0;i<this.dispArray.length;i++){
                var p=this.dispArray[i]
                if (p.type=="input"){
      
                    disp.innerHTML+=`<label class="labelclass">${p.labelname}</label>
                                    <input name="${p.labelname}" class="inputclass" type=${p.value}><br><br>`
                    
                }
    
                else if ((p.type)=="select"){
                    var s="";
                    s+=`<label class="labelclass">${p.labelname}</label>
                                        <select class="inputclass" name=${p.labelname}>` 
      
                    for(var j=0;j<p.value.length;j++){
                        s+=`<option>${p.value[j]}</option>`
                    }
                    s+=`</select><br><br>`
                    disp.innerHTML+=s;
    
                }
    
                else if((p.type)=="radio"){
                    
                        var s=""
                        s+=`<label class="labelclass">${p.labelname}</label>`
    
                            for(var j=0;j<p.value.length;j++){
                                // var x = j.toString()
                                        s+=`<input type="radio" id ="${p.value[j]}"name="${p.labelname}" class="inputclass" name=${p.labelname}>
                                        <label>${p.value[j]}</label>`
                                    }
                            s+=`<br><br>`
                            disp.innerHTML+=s;
                    }
    
                }
            }   
    }

function displayformdatas(){

  

    formelements.style.display="none";
    let submitbutton= <HTMLInputElement>document.getElementById('submit');
    
    
    submitbutton.style.display="none"

    let fname = document.getElementsByClassName('inputclass');
    // let lname = document.getElementsByClassName('labelclass');
    formdatas.innerHTML="";

   
    let arr1  = new Array()
    let arr2 = new Array()
    for (var i=0;i<fname.length;i++){
    
        if(fname[i].checked){
            // console.log(fname[i].name);
            
            arr1.push(fname[i].name)
            arr2.push(fname[i].attributes[1].nodeValue)
            // formdatas.innerHTML+=`${fname[i].name}:${fname[i].attributes[1].nodeValue}<br><br>`
        
        }
        else{
            // console.log(fname[i].name);
            // console.log(fname[i].value);
            arr1.push(fname[i].name)
            arr2.push(fname[i].value)
            // formdatas.innerHTML+=`${fname[i].name}:${fname[i].value}<br><br>`
      
        }
                
      
    }

    for (var j=0;j<arr1.length;j++){
        if (arr2[j]!="on"){
            formdatas.innerHTML+=`${arr1[j]}:${arr2[j]}<br><br>`

        }
    }

    formdatas.style.display="block";
  backbutton = document.getElementById('back');
  
  
  backbutton.style.display="block"}



// to display back form
  
function formmethod(){
    formelements= document.getElementsByClassName("form");
    backbutton = document.getElementById('back');
    backbutton.style.display="none"

    document.querySelector('form')?.reset();
    
    formdatas= document.querySelector('.output') as HTMLInputElement;
    formdatas.style.display="none";
  
    for (const element of formelements) {
      element.style.display = 'block';
    }
    let submitbutton= <HTMLInputElement>document.getElementById('submit');
    submitbutton.style.display="block"
    
  
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



document.addEventListener("DOMContentLoaded",()=>{

    //create form
    let l=new Dispclass([new Create("firstname","input","text"),new Create("lastname","input","text"),new Create("password","input","password"),
    new Create("Education Qualification","select",["High School","Under Graduate","Post Graduate",]),
    new Create ("gender","radio",["male","female"])])
    l.createform();


    //define backbutton

    backbutton = document.getElementById('back');
    backbutton.style.display="none"
    button = document.getElementById('submit');
    formdatas= document.querySelector('.output') as HTMLInputElement;

  button?.addEventListener('click', function handleClick(event) {
    formelements= <HTMLInputElement>document.getElementById('form');

    //to display formdatas
    displayformdatas()});

  backbutton = document.getElementById('back');
  backbutton.addEventListener('click', function handleClick(event) {
    
    //to display form elemetns
    
    formmethod()});



})



