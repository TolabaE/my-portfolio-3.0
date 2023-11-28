import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import StudyCard from './StudyCard';

const estudios = [
    
    // {
    //     facultad:"Instituto superior en Lenguas Vivas",
    //     carrera:"Idioma Ingles",
    //     inicio:"Marzo 2020 - Presente",
    //     state:"cursand",
    //     certificado:"https://us.123rf.com/450wm/outchill/outchill1712/outchill171201487/91259550-ejemplo-texto-escrito-en-sello-con-textura-vintage-de-goma-redonda-amarilla.jpg?ver=6"
    // },
    // {
    //     facultad:"Colegio Secundario N° 5087 Cachi-Salta",
    //     carrera:"Titulo Bachiller",
    //     inicio:"Marzo 2014 - Diciembre 2018",
    //     state:"cursand",
    //     certificado:"https://us.123rf.com/450wm/outchill/outchill1712/outchill171201487/91259550-ejemplo-texto-escrito-en-sello-con-textura-vintage-de-goma-redonda-amarilla.jpg?ver=6"
    // },
    {
        id:2,
        facultad:"CoderHouse",
        carrera:"Curso de Desarrollo Web",
        inicio:"Marzo 2022 - Febrero 2023",
        state:"Finalizado",
        certificado:"./images/certificates/630c032d9112aa002425d43b.png"
    },
    {
        id:3,
        facultad:"CoderHouse",
        carrera:"Curso de Javascript",
        inicio:"Marzo 2022 - Febrero 2023",
        state:"Finalizado",
        certificado:"./images/certificates/632d086470a306000f24a413.png"
    },
    {
        id:4,
        facultad:"CoderHouse",
        carrera:"Curso de React JS",
        inicio:"Marzo 2022 - Febrero 2023",
        state:"Finalizado",
        certificado:"./images/certificates/634d2df86c0b1d000e1adb9f.png"
    },
    {
        id:5,
        facultad:"CoderHouse",
        carrera:"Curso Programación backend",
        inicio:"Marzo 2022 - Febrero 2023",
        state:"Finalizado",
        certificado:"./images/certificates/640cf6386936da000e35fa2a.png"
    },
    {
        id:1,
        facultad:"Fac. Ingeniería UBA",
        carrera:"Lic. Analista en Sistemas",
        inicio:"Marzo 2023 - presente",
        state:"Cursando",
        certificado:"https://upload.wikimedia.org/wikipedia/commons/1/14/Logo_de_la_Universidad_de_Buenos_Aires.jpg"
    },
    {
        id:6,
        facultad:"Educación IT",
        carrera:"Desarrollador Angular Js",
        inicio:"Junio 2023 - Julio 2023",
        state:"Finalizado",
        certificado:"./images/certificates/64035.jpg"
    },
    {
        id:7,
        facultad:"Fundación Empujar",
        carrera:"Curso de Inserción laboral",
        inicio:"Abril 2022 - Febrero 2023",
        state:"Finalizado",
        certificado:"./images/certificates/fundacionempujar.png"
    }
]



const Carrusel = () => {
    // const ancho = window.innerWidth;
    const [desktop, setDesktop] = useState(window.innerWidth);
    useEffect(() => {
        setDesktop(window.innerWidth)
    }, []);
    return (
        <div className='my-6 md:my-4 p-2 md:p-8'>
             <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={false}
                modules={[Navigation,Pagination]}
                spaceBetween={desktop >= 768 ? 50 : 10}
                slidesPerView={desktop >= 768 ? 3 : 2}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        estudios.map(item =>(
                            <SwiperSlide key={item.id}>
                                <StudyCard
                                    imagen={item.certificado}
                                    instituto={item.facultad}
                                    estado={item.state}
                                    fecha={item.inicio}
                                />
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    );
}

export default Carrusel;
