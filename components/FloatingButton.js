import Link from "next/link";
import { db } from "../firebase";
import { useRouter } from 'next/router';



const FloatingButton = () => {
    const router = useRouter()

    const onClick = () => {
        db.collection("thoughts").add({author: "author"}).then(res => router.push(`/thinking/${res.id}`))
    }

	return (
		// <Link href="/thinking">
			<ion-fab vertical="bottom" horizontal="end" slot="fixed" onClick={() => onClick()}>
				<ion-fab-button>
					<ion-icon style={{ fontSize: 40 }} name="thought" />
				</ion-fab-button>
			</ion-fab>
		// </Link>
	);
};

export default FloatingButton;
