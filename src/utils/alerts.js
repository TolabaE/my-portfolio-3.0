import Swal from "sweetalert2";
import { SpinnerCircularFixed } from 'spinners-react';

export const loadingSpinner= (boolean) =>{
    return <SpinnerCircularFixed size={80} thickness={100} speed={100} color="rgba(57, 94, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
};