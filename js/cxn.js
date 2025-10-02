// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBCSkXBrU2hJEZPxcLEvNa6xte4Ov05P4g",
authDomain: "form-newproyect.firebaseapp.com",
projectId: "form-newproyect",
storageBucket: "form-newproyect.firebasestorage.app",
messagingSenderId: "916975722099",
appId: "1:916975722099:web:ab3f39f806fb27ff289406",
measurementId: "G-FDYRDPCV5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db= getFirestore(app);


const form= document.getElementById("contacto-form");

form.addEventListener("submit", async(e) => {

    e.preventDefault();

    const nombre= document.getElementById("nombre").value;
    const email= document.getElementById("email").value;
    const asunto= document.getElementById("asunto").value;
    const mensaje= document.getElementById("mensaje").value;
    const fecha = new Date();

    try{
        await addDoc(collection(db,"Clientes"), {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha,
           
        });
        console.log("Datos enviados");
        alert("Solicitud enviada");
        form.reset();
    } catch(error){
        console.log("Error en enviar datos");
        alert("Hubo un error al enviar datos");
    }
});