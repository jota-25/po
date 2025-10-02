document.addEventListener("DOMContentLoaded",() => {
    //alamcenamiento los id a trbaajar dentro de sus variables modal - modalImg
    const modal= document.getElementById("imgModal");
    const modalImg= document.getElementById("modalImg");
    const cerrar= document.querySelector(".cerrar");

    const imagenes=document.querySelectorAll(".flip-card-back img");
    
    imagenes.forEach(img =>{
        img.addEventListener("click", () => {
            modal.style.display= "flex";
            modalImg.src= img.src;
        });

    });

    cerrar.addEventListener("click", () => {

        modal.style.display= "none";
    });

    modal.addEventListener("click",(e) => {

        if(e.target === modal){
            modal.style.display = "none";
        }
    });
});






/*let nombres="Carlos Roque";
let datos=["Carlos Roque","Senati", "estudiante"];
console.log(nombres);
console.log(datos[2]);

// esto es un comentario    
//let edad =prompt("ingrese su edad")
//console.log(edad);


// trabajando con finciones 

function mostrarMensaje(){
    alert("Hola mundo");
}

function sumar(){
    let n1= parseInt(prompt("Ingrese tu primer numero"));
    let n2= parseInt(prompt("Ingrese tu segundo numero"));
    alert("EL resultado es: " +(n1 + n2));
}
function cambiarColor(){
    let texto= document.getElementById("texto");
    texto.style.color= "blue";
}
*/