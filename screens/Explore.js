import { useState, useEffect } from "react";
import IonSearchbar from "../components/IonSearchbar";
import Card from "../components/Card";
import { db } from "../firebase";

const thoughtsRef = db.collection("thoughts");

const Explore = () => {
	const [searchText, setSearchText] = useState("");
	const [thoughts, setThoughts] = useState([]);

	useEffect(() => {
		db.collection("thoughts").onSnapshot((snapshot) => {
			setThoughts(
				snapshot.docs.map((doc) => {
					var newDoc = doc.data();
					newDoc.id = doc.id;
					return newDoc;
				})
			);
		});
	}, []); // NO HACE FALTA QUE SEA REAL TIME, COMO LO CAMBIO

	return (
		<>
			<ion-header>
				<ion-toolbar>
					<ion-title>Explore</ion-title>
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">Explore</ion-title>
					</ion-toolbar>
					<ion-toolbar>
						<IonSearchbar
							onChange={(e) => console.log(e.detail.value)}
							id="exploreSearch"
						/>
					</ion-toolbar>
				</ion-header>

				{thoughts.map((thought) => (
					<Card title={thought.title} author={thought.author} />
				))}
				{console.log(thoughts)}

				<ion-fab vertical="bottom" horizontal="end" slot="fixed">
					<ion-fab-button>
						<ion-icon style={{fontSize: 40}} name="thought" />
					</ion-fab-button>
				</ion-fab>
			</ion-content>
		</>
	);
};

export default Explore;