import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
	const router = useRouter();
	return (
		<ion-header>
			<ion-toolbar style={{ paddingTop: "env(safe-area-inset-top)" }}>
				<ion-buttons slot="start">
					{/* <Link href="/"> */}
					<ion-back-button
						onClick={(e) => {
							e.preventDefault();
							router.back();
						}}
						default-href="/"
					/>
					{/* </Link> */}
				</ion-buttons>

				<ion-title></ion-title>
			</ion-toolbar>
		</ion-header>
	);
}
