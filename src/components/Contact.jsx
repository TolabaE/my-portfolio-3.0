import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const handleSumbit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        let info = {};
        data.forEach((value,key)=>info[key]=value);
        if (!info.mensaje || !info.correo || !info.nombre) return alert("campos incompletos");
        fetch(`${import.meta.env.PUBLIC_URL_SERVER}`,{
            method:'POST',
            body:info,
            headers:{
                'Content-type':'application/json',
                Accept: "application/json",
            },
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
        })
        // console.log(import.meta.env.PUBLIC_KEY_SERVICES);
        // emailjs.sendForm(import.meta.env.PUBLIC_KEY_SERVICES,import.meta.env.PUBLIC_KEY_TEMPLATE,info ,import.meta.env.PUBLIC_KEY_PUBLIC)
        // .then(res=>res.json())
        // .then(result =>{
        //     console.log(result);
        // })
    }

    
    return (
        <section className="flex flex-col items-center justify-center m-4 md:my-10 gap-y-8" id="contact">
            <h2 className="text-cyan-400 text-center text-2xl md:text-4xl font-semibold">¡Contacto!</h2>
            <form className="form flex flex-col gap-4 rounded-md w-full md:w-3/4 lg:w-1/2" onSubmit={handleSumbit}>
                <div className="flex flex-col gap-4 md:flex-row w-full">
                    <input type="text" name="nombre" placeholder="Nombre y apellido" className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400" />
                    <input type="email" name="correo" placeholder="Correo" className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400" />
                </div>
                <textarea name="mensaje" cols="30" rows="10" className="border-2 border-cyan-400 bg-transparent rounded-lg p-2 font-semibold text-cyan-400" placeholder="Descripción de la consulta..."></textarea>
                <input type="submit" value="Enviar" className="border-2  border-cyan-400 rounded-lg p-1 text-cyan-400 text-xl font-bold md:w-1/4 animation-btn" />
            </form>
        </section>
    );
}

export default Contact;
