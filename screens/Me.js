import { isPlatform } from "@ionic/core";
import { Card } from "../constants/styledComponents";
import { useState } from "react";
import IonSearchbar from "../components/IonSearchbar";
import IonSegment from "../components/IonSegment";

const isMac =
	typeof window !== "undefined"
		? navigator.platform.toUpperCase().indexOf("MAC") >= 0
		: false;

const dates = [
	{
		date: "19/2",
		thoughts: [
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
		],
	},
	{
		date: "20/2",
		thoughts: [
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
		],
	},
	{
		date: "21/2",
		thoughts: [
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
		],
	},
	{
		date: "22/2",
		thoughts: [
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
		],
	},
	{
		date: "23/2",
		thoughts: [
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
			{
				title: "Life is like a beaten apple",
				text:
					"asjbasñvlbsd´klbvnsdkbvndskbs´dnbksdnb´ñksdnbkldsnbskdl´bnsdklbndskbdknskdn",
			},
		],
	},
];

export default function Me() {
	const [segmentValue, setSegmentValue] = useState("All");
	const [searchText, setSearchText] = useState();

	return (
		<>
			<ion-header>
				<ion-toolbar>
					<ion-title>Joaquín Marticorena</ion-title>
				</ion-toolbar>

				{false && (
					<ion-toolbar>
						<ion-segment
							value={segment}
							onIonChange={(e) => setSegment(e.detail.value)}
						>
							<ion-segment-button value="all">
								All
							</ion-segment-button>

							<ion-segment-button value="private">
								Private
							</ion-segment-button>

							<ion-segment-button value="public">
								Public
							</ion-segment-button>
						</ion-segment>
					</ion-toolbar>
				)}
			</ion-header>

			<ion-content>
				<ion-header collapse="condense">
					<ion-toolbar>
						<ion-title size="large">Joaquín Marticorena</ion-title>
					</ion-toolbar>

					<IonSegment
						value={segmentValue}
						onChange={(e) => console.log(e.detail.value)}
						segments={["All", "Private", "Public"]}
						id="meSegment"
					/>

					<ion-toolbar>
						<IonSearchbar
							onChange={(e) => console.log(e.detail.value)}
							id="meSearch"
						/>
					</ion-toolbar>
				</ion-header>

				<ion-list>
					{dates.map((date, dateIndex) => (
						<ion-item-group key={dateIndex}>
							<ion-item-divider sticky>
								<ion-label>29/04</ion-label>
							</ion-item-divider>
							{date.thoughts.map((thought, thoughtIndex) => (
								<Card key={thoughtIndex}>{thought.title}</Card>
							))}
						</ion-item-group>
					))}
				</ion-list>

				<ion-fab vertical="bottom" horizontal="end" slot="fixed">
					<ion-fab-button>
						<ion-icon style={{ fontSize: 40 }} name="thought" />
					</ion-fab-button>
				</ion-fab>
			</ion-content>
		</>
	);
}
