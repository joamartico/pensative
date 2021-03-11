import { useState, useEffect } from "react";
import IonSearchbar from "../components/IonSearchbar";
import Card from "../components/Card";
import { db } from "../firebase";
import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader";


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
				</ion-header>

				<IonSearchbar
					onChange={(e) => console.log(e.detail.value)}
					id="exploreSearch"
				/>

				{/* <div onClick={() => {
					console.log("apretado")
					ionDefineCustomElements("")
				}}>

				<ion-button>window on/off</ion-button> 
				</div> */}
				


				<ion-list>
				<Card title={"Example"} author={"author"} id="1" />

					{thoughts.map((thought) => (
						<Card title={thought.title} author={thought.author} id={thought.id} />
					))}
				</ion-list>

				
			</ion-content>
		</>
	);
};

export default Explore;
