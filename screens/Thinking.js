// import { useState } from "react";
// import ThinkingTextArea from "../components/ThinkingTextArea";
// import ThinkingTitle from "../components/ThinkingTitle";
// import { useRouter } from "next/router";
// import { Header } from "../components/Header";

// const Thinking = () => {
// 	const [title, setTitle] = useState("");
// 	// const router = useRouter();

// 	const editable = true; // debería ser un estado no?

// 	return (
// 		<>
// 			{
// 				// console.log(router.query.id)
// 				// console.log(router)
// 			}
// 			<Header />

// 			<ion-content style={{ padding: 20 }}>
// 				<div style={{ padding: 20, height: "100vh", width: "100vw" }}>
// 					<ThinkingTitle
// 						value={title}
// 						placeholder="Title"
// 						editable={editable}
// 					/>
// 					<ThinkingTextArea
// 						placeholder="Write what you are Thinking"
// 						editable={editable}
// 					/>
// 				</div>
// 			</ion-content>
// 		</>
// 	);
// };

// export default Thinking;
