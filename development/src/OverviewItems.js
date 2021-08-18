import React from "react";

function OverviewItems(props) {
	const OverViewData = props.overviewData.map((data, index) => (
		<articles id={index} className='overview-card-items'>
			<h3 className='overview-metrics'>{data.metrics}</h3>
			{(() => {
				switch (data.tag) {
					case "youtube":
						return <div className='youtube-icon-flex'></div>;
					case "facebook":
						return <div className='facebook-icon-flex'></div>;
					case "twitter":
						return <div className='twitter-icon-flex'></div>;
					case "instagram":
						return <div className='instagram-icon-flex'></div>;
					default:
						return "";
				}
			})()}
			<p className='overview-number'>{data.number}</p>
			{(() => {
				switch (data.tag) {
					case "youtube":
						return (
							<p className='overview-variation red-overview'>{data.var}%</p>
						);
					case "facebook":
						switch (data.metrics) {
							case "Page Views":
								return (
									<p className='overview-variation green-overview'>
										{data.var}%
									</p>
								);
							case "Likes":
								return (
									<p className='overview-variation red-overview'>{data.var}%</p>
								);
							default:
								return "";
						}
					case "twitter":
						return (
							<p className='overview-variation green-overview'>{data.var}%</p>
						);
					case "instagram":
						return (
							<p className='overview-variation green-overview'>{data.var}%</p>
						);
					default:
						return "";
				}
			})()}
		</articles>
	));

	return <div className='overview-card-group'>{OverViewData}</div>;
}

export default OverviewItems;
