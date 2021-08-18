import React from "react";

function MainDataCard(props) {
	const userData = props.mainData.map((data, index) => (
		<article id={index} className={`main-data-card ${data.tag}`}>
			{(() => {
				switch (data.tag) {
					case "youtube":
						return <div className='youtube-icon'></div>;
					case "facebook":
						return <div className='facebook-icon'></div>;
					case "twitter":
						return <div className='twitter-icon'></div>;
					case "instagram":
						return <div className='instagram-icon'></div>;
					default:
						return "Followers";
				}
			})()}
			<p className='main-data-card-user'>{data.user}</p>
			<p className='main-data-card-number'>{data.number}</p>
			<p className='main-data-card-subtitle'>
				{(() => {
					switch (data.tag) {
						case "youtube":
							return "Subscribers";
						default:
							return "Followers";
					}
				})()}
			</p>
			{(() => {
				switch (data.tag) {
					case "youtube":
						return <p className='main-data-card-var red'>{data.var} Today</p>;
					default:
						return <p className='main-data-card-var green'>{data.var} Today</p>;
				}
			})()}
		</article>
	));

	return <section className='main-data'>{userData}</section>;
}

export default MainDataCard;
