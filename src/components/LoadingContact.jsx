import React from 'react';

const LoadingContact = () => {
    return (
        <form className="flex flex-col gap-4 rounded-md w-full md:w-3/4 lg:w-1/2">
            <div className="flex flex-col gap-4 md:flex-row w-full">
                <input type="text" name="nombre" placeholder="Cargando..." className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400 animation-loading" />
                <input type="email" name="correo" placeholder="Cargando..." className="p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400 animation-loading" />
            </div>
            <textarea name="mensaje" cols="30" rows="10" className="border-2 border-cyan-400 bg-transparent rounded-lg p-2 font-semibold text-cyan-400 animation-loading" placeholder="Cargando..."></textarea>
            <input type="button" disable="true" value=". . . . ." className="border-2  border-cyan-400 rounded-lg p-1 text-cyan-400 text-xl font-bold md:w-1/4 animation-loading" />
        </form>
    );
}

export default LoadingContact;
