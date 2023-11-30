import React from 'react';

const StudyCard = ({instituto,imagen,titulo,fecha,estado}) => {
    return (
        <div className="flex flex-col border-2 border-cyan-400 p-4 my-8 rounded-xl md:p-4 gap-2">
            <h3 className="text-cyan-400 font-bold text-base md:text-xl text-center">{instituto}</h3>
            <img src={imagen} alt="imagen del certificado" className="w-full h-64 md:h-60 lg:h-72 rounded-md lg:hover:scale-110 lg:py-2"/>
            {/* <h2 className="text-cyan-400">Estudio Secundario</h2> */}
            <p className="text-base text-white font-semibold md:text-xl">{titulo}</p>
            <p className="text-sm md:text-base text-white"><span className="text-cyan-400">Periodo | </span> {fecha}</p>
            <p className="text-base text-white">Estado: <span className="text-cyan-400">{estado}</span></p>
        </div>
    );
}

export default StudyCard;
