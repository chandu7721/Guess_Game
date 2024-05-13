mass=parseFloat(prompt("Enter your mass in kgs"));
height=parseFloat(prompt("Enter your height in cms"));
height=(height/100)**2;
bmi=mass/height;
if(bmi<16.0){
alert("Underweight");}
else if(bmi<25.0){
alert("Normal");}
else if(bmi<35){
alert("Obseity");}
else{
    alert("Severe obsese");
}
console.log(bmi);