
import { useEffect } from 'react';

const Debates = () => {
    console.log("SE EJECUTO EL LOG")
    useEffect(() => {
        console.log("CARGO EL EFECTO")
    }, [])
    return (
        <ion-content>
            DEBATES
        </ion-content>
    )
}

export default Debates
