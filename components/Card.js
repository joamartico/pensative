import { useRouter } from 'next/router';
import { Link } from 'next/link';
import Thinking from '../screens/Thinking';


const Card = ({title, author, onClick, id}) => {
    const router = useRouter()

    const onCardClick = async () => {
        await onClick
        router.push(`thinking/${id}`)
    }

    return (
        // <ion-router-link href={`thinking/${id}`}>    √ (link con carga)
        //   <ion-nav root="thinking">   
        //  <ion-nav-link component={Thinking}>   
                <div 
                onClick={() => router.push(`/onboarding`)}
                style={{background: "white", width: "92%", margin: "4%", padding: 5, paddingLeft: 16, paddingRight: 16, borderRadius: 14}}
                >
                    <p style={{fontWeight: "bold", fontSize: author ? 20 : 16}}>{title}</p>
                    {author && <p style={{fontSize: 14, marginTop: -12}}>{author}</p>}
                </div>
        // </ion-nav-link>
        //  </ion-nav>
        //  </ion-router-link>


    )
}

export default Card
