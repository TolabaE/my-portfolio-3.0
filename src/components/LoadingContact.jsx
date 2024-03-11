import React from 'react';

const LoadingContact = () => {
    return (
        <form className="flex flex-col gap-4 rounded-md w-full md:w-3/4 lg:w-1/2 2xl:w-1/3">
            <div className="flex flex-col gap-4 md:flex-row w-full">
                <div className='p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400 animation-loading'>Cargando . . .</div>
                <div className='p-2 border-2 border-cyan-400 bg-transparent rounded-lg md:w-1/2 font-semibold text-cyan-400 animation-loading'>Cargando . . .</div>
            </div>
            <div className='border-2 border-cyan-400 bg-transparent rounded-lg p-2 font-semibold text-cyan-400 animation-loading h-60 lg:h-64'>Cargando . . .</div>
            <input type="button" disable="true" value="- - - -" className="border-2  border-cyan-400 rounded-lg p-1 text-cyan-400 text-xl font-bold md:w-1/4 animation-loading" />
        </form>
    );
}

export default LoadingContact;
