import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import StudyCard from './StudyCard';
import studies from '../JSON/studies.json';


const Carrusel = () => {

    const [navigation, setNavigation] = useState(false);
    const [array, setArray] = useState([]); 
    const [quantity, setQuantity] = useState(0);

    const checkWidthChange = () =>{
        //evento escucha por el cambio en el ancho de la pantalla.
        window.addEventListener('resize',(e)=>{
            let value = e.target.innerWidth;
            if (value >= 1024) {
                setQuantity(3);
                setNavigation(true);
            }else if(value >= 768){
                setQuantity(2);
                setNavigation(true);
            }else{
                setQuantity(1);
                setNavigation(false);
            }
        });
    };

    const setWidthStatic = ()=>{
        let anchoPantalla = window.innerWidth;
        if (anchoPantalla >= 1024) {
            setQuantity(3);
            setNavigation(true);
        }else if(anchoPantalla >= 768){
            setQuantity(2);
            setNavigation(true)
        }else{
            setQuantity(1);
            setNavigation(false);
        }
    };
    
    useEffect(() => {
        setArray(studies);
        checkWidthChange();//esta funcion se ejecuta unicamente cuando hay cambios en el tamaño de la pantalla
        setWidthStatic();//esta funcion toma el ancho de pantalla original del dispositivo.
    }, []);

    return (
        <div className='my-6 md:my-4 p-2 md:p-8'>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                navigation={navigation}
                modules={[Navigation,Pagination,Autoplay]}
                spaceBetween={20}
                slidesPerView={quantity}
                >
                    {
                        array.map(item =>(
                            <SwiperSlide key={item.id} className='p-5'>
                                <StudyCard
                                    imagen={item.certificado}
                                    instituto={item.facultad}
                                    estado={item.state}
                                    fecha={item.inicio}
                                    titulo={item.carrera}
                                />
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    );
}

export default Carrusel;
