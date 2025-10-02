let nacimiento= prompt("En que año naciste");
let fecha_actual=new Date();
let anio_actual= fecha_actual.getFullYear();
let edad= anio_actual - nacimiento;
alert("Tienes "+ edad+ " años");

//cuestionaio
let score=0;
let q1= prompt("capital de peru: a) Santiago b) Lima c) Buenos Aires d)Bogota");
if(q1,toLowerCase()==="b"|| q1.toLowerCase()==="Lima"){
    score++;
}
let q2=prompt("5+5= ? a)11 b)10 c)15");
if(q2=== "c"|| q2==="10" ) score+++;
alert("Tu puntaje es "+ score+ "/2");