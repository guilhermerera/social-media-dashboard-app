import React from "react";
import OverviewItems from "./OverviewItems";

function Overview(props) {
	return (
		<section className='overview'>
			<h2 className='overview-headline'>Overview - Today</h2>
			<OverviewItems overviewData={props.overviewData}></OverviewItems>
		</section>
	);
}

export default Overview;
