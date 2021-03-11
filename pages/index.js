import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

import FloatingButton from "../components/FloatingButton";

// const Routes = dynamic(() => import('../components/Routes'), {
// 	ssr: false,
//   });

import Routes from "../components/Routes"
import BottomTabs from "../components/BottomTabs";
	

const index = () => {

	return (
		<>
			{/* <Routes /> */}

			<BottomTabs />

		</>
	);
};

export default index;
