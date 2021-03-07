import { isPlatform } from "@ionic/core";

import { useState, useEffect } from "react";
import IonSearchbar from "../components/IonSearchbar";
import IonSegment from "../components/IonSegment";
import Card from "../components/Card";
import { db } from "../firebase";

export default function Me() {
	const [thoughts, setThoughts] = useState([]);
	const [segmentValue, setSegmentValue] = useState("All");
	const [searchText, setSearchText] = useState();
	const [platform, setPlatform] = useState();

	useEffect(() => {
		isPlatform("ios") ? setPlatform("ios") : setPlatform("android");

		db.collection("thoughts")
			.where("author", "==", "Joaquín Marticorena")
			.onSnapshot((snapshot) => {
				setThoughts(
					snapshot.docs.map((doc) => {
						var newDoc = doc.data();
						newDoc.id = doc.id;
						return newDoc;
					})
				);
			});
	}, []);

	return (
		<>
			<ion-header>
				{platform == "ios" && (
					<ion-toolbar>
						<ion-title>Joaquín Marticorena</ion-title>
					</ion-toolbar>
				)}

				{platform == "android" && (
					<>
						<ion-toolbar style={{ alignItems: "center" }}>
							<ion-title>Joaquín Marticorena</ion-title>

							<ion-buttons
								slot="end"
								style={{ paddingBottom: 0, marginBottom: -30 }}
							>
								<ion-button>
									<ion-icon slot="icon-only" name="search" />
								</ion-button>

								<ion-button>
									<ion-icon
										slot="icon-only"
										name="ellipsis-vertical-outline"
									/>
								</ion-button>
							</ion-buttons>
						</ion-toolbar>

						<ion-toolbar>
							<IonSegment
								value={segmentValue}
								onChange={(e) => console.log(e.detail.value)}
								segments={["All", "Private", "Public"]}
								id="meSegment"
								style={{ marginTop: 10 }}
							/>
						</ion-toolbar>
					</>
				)}
			</ion-header>

			<ion-content>
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">Title</ion-title>
					</ion-toolbar>
				</ion-header>

				{platform == "ios" && (
					<>
						<IonSearchbar
							onChange={(e) => console.log(e.detail.value)}
							id="meSearch"
						/>
						<IonSegment
							value={segmentValue}
							onChange={(e) => console.log(e.detail.value)}
							segments={["All", "Private", "Public"]}
							id="meSegment"
							style={{
								width: "calc(100% - 26px)",
								marginLeft: "auto",
								marginRight: "auto",
								marginBottom: 30,
								marginTop: 5,
							}}
						/>
					</>
				)}

				<ion-list>
					{thoughts.map((thought, index) => (
						<>
							{thoughts[index].date !=
								thoughts[index - 1]?.date && (
								<ion-item-divider sticky>
									<ion-label>{thought.date}</ion-label>
								</ion-item-divider>
							)}

							<Card
								title={thought.title}
								key={index}
								id={thought.id}
							/>
						</>
					))}
					{/* {dates.map((dateItem, dateIndex) => (
						<ion-item-group key={dateIndex}>
							<ion-item-divider sticky>
								<ion-label>{dateItem.date}</ion-label>
							</ion-item-divider>
							{dateItem.thoughts.map((thought, thoughtIndex) => (
								<Card
									onClick={() => console.log(thought.title)}
									title={thought.title}
									key={thoughtIndex}
								/>
							))}
						</ion-item-group>
					))} */}
				</ion-list>
			</ion-content>
		</>
	);
}
