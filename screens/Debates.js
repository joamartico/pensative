import { useEffect } from "react";
import ThinkingTitle from "../components/ThinkingTitle";
import ThinkingTextArea from '../components/ThinkingTextArea';

const Debates = () => {
	const editable = true
	
	return (
		<>
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-back-button
							defaultHref="algo"
							default-href="home"
						/>
					</ion-buttons>

					<ion-title>title</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content style={{ padding: 20 }}>
				<div style={{ padding: 20, height: "100vh", width: "100vw" }}>
					
					hola
				</div>
			</ion-content>
		</>
	);
};

export default Debates;
