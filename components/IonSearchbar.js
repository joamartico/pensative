import { useEffect } from 'react';



const IonSearchbar = ({onChange, id}) => {
    useEffect(() => {
        const searchEl = document.getElementById(id)
        searchEl.addEventListener('ionChange', onChange);
    
        // cleanup this component
        return () => {
          searchEl.removeEventListener('ionChange', onChange);
        };
      }, []);

    return (
        <ion-searchbar id={id} animated show-cancel-button="focus" />
    )
}

export default IonSearchbar
