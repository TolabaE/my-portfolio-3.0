import { useState , useEffect } from 'react';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successAlert } from '../utils/alerts.js';
import { SpinnerCircularFixed } from 'spinners-react';
import LoadingContact from './LoadingContact';

const Contact = () => {

    const [loading, setloading] = useState(false);
    const [active, setActive] = useState(false);

    const handleSumbit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        let info = {};
        data.forEach((value,key)=>info[key]=value);

        if (!info.mensaje || !info.correo || !info.nombre) return toast.info("campos incompletos");
        
        setloading(true);
        fetch(`${import.meta.env.PUBLIC_URL_SERVER}/email`,{
            method:'POST',
            body:JSON.stringify(info),
            headers:{
                'Content-type':'application/json'
            },
        })
        .then(res=>res.json())
        .then(result =>{
            if (result.status === "success") {
                setloading(false);
                successAlert(result.messages);
                e.target.reset();//limpia el formulario
            }
        }).catch(error => console.log(error));
    }

    useEffect(() => {

        //funcion que envia una peticiona al servidor, para que este activo, ya que se inactiva si no recibe ninguna solicitud.
        const connectServer = async() =>{
            const response = await fetch(`${import.meta.env.PUBLIC_URL_SERVER}/active`);
            const result = await response.json();
            if (result.status === "success") {
                setActive(true);
            }
        }
        connectServer();
    }, []);
    
    return (
        <>
            <h2 className="text-cyan-400 text-center text-2xl md:text-4xl font-semibold"><span className="text-white">Mis</span> Contactos</h2>
            <section className="etiqueta flex flex-col-reverse gap-7 lg:flex-row lg:justify-around items-center justify-center m-4 md:my-10 gap-y-8" id="contact">
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                {
                    active
                    ? <form className="form flex flex-col gap-6 rounded-md w-full md:w-3/4 lg:w-1/2 2xl:w-1/3" onSubmit={handleSumbit}>
                        <div className="flex flex-col gap-4 md:flex-row w-full">
                            <input type="text" name="nombre" placeholder="Nombre completo" className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400" />
                            <input type="email" name="correo" placeholder="Correo" className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400" />
                        </div>
                        <textarea name="mensaje" cols="30" rows="10" className="border-2 border-cyan-400 bg-transparent rounded-lg p-2 font-semibold text-cyan-400" placeholder="Descripción de la consulta..."></textarea>
                        {
                            !loading 
                            ? <input type="submit" value="Enviar" className="border-2  border-cyan-400 rounded-lg p-1 text-cyan-400 text-xl font-bold md:w-1/4 animation-btn" />
                            : <SpinnerCircularFixed size={70} thickness={100} speed={100} color="rgba(0, 232, 248, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> 
                        }
                    </form>
                    :<LoadingContact/>
                }
                <div className='w-full md:w-3/4 lg:w-1/3 h-56 flex flex-col gap-1 md:gap-3 bg-gray-800 p-10 rounded-xl'>
                    <h2 className='text-cyan-400 text-center text-lg md:text-xl font-semibold'>Información adicional</h2>
                    <p className="text-cyan-400 text-base md:text-lg">Correo: <span className="text-white">eduardoetolaba@gmail.com</span></p>
                    <p className=" text-cyan-400 text-base md:text-lg">Cuidad: <span className="text-white">CABA, Buenos Aires - Argentina</span></p>
                    <p className="text-cyan-400 text-base md:text-lg">Telefono: <span className="text-white">+54 11 69650202</span></p>
                </div>
            </section>
        </>
    );
}

export default Contact;
