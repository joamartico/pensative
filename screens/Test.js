import { useEffect } from "react";
import ThinkingTitle from "../components/ThinkingTitle";
import ThinkingTextArea from '../components/ThinkingTextArea';

const Test = () => {
	const editable = true
	console.log("TEST")
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
					<ThinkingTitle
						value={"title"}
						placeholder="Title"
						editable={editable}
					/>
					<ThinkingTextArea
						placeholder="Write what you are thinking"
						editable={editable}
					/>
				</div>
			</ion-content>
		</>
	);
};

export default Test;
