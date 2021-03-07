import { useEffect } from "react";

const IonSegment = ({ value, onChange, segments, id, style }) => {
	useEffect(() => {
		const segmentEl = document.getElementById(id);
		segmentEl.addEventListener("ionChange", onChange);

		// cleanup this component
		return () => {
			segmentEl.removeEventListener("ionChange", onChange);
		};
	}, []);

	return (
		<ion-segment
			id={id}
			value={value}
			style={style}
		>
			{segments.map((segment) => (
				<ion-segment-button value={segment}>
					{segment}
				</ion-segment-button>
			))}
		</ion-segment>
	);
};

export default IonSegment;
