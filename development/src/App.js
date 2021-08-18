import Header from "./Header";
import MainData from "./MainData";
import Overview from "./Overview";
import "./darktheme.min.css";
// import "./lighttheme.min.css";
import "./App.css";

function App() {
	return (
		<main className='wrapper'>
			<div className='bg-object'></div>
			<Header
				mainTitle='Social Media Dashboard'
				subTitle='Total Followers: 23,004'></Header>
			<MainData
				mainData={[
					{ tag: "facebook", user: "@nathanf", number: "1987", var: "12" },
					{ tag: "twitter", user: "@nathanf", number: "1044", var: "99" },
					{
						tag: "instagram",
						user: "@realnathanf",
						number: "11k",
						var: "1099"
					},
					{ tag: "youtube", user: "Nathan F.", number: "8239", var: "144" }
				]}></MainData>
			<Overview
				overviewData={[
					{ metrics: "Page Views", tag: "facebook", number: "87", var: "3" },
					{ metrics: "Likes", tag: "facebook", number: "52", var: "2" },
					{ metrics: "Likes", tag: "instagram", number: "5462", var: "2257" },
					{
						metrics: "Profile Views",
						tag: "instagram",
						number: "52k",
						var: "1375"
					},
					{ metrics: "Retweets", tag: "twitter", number: "117", var: "303" },
					{ metrics: "Likes", tag: "twitter", number: "507", var: "553" },
					{ metrics: "Likes", tag: "youtube", number: "107", var: "19" },
					{ metrics: "Total Views", tag: "youtube", number: "1407", var: "12" }
				]}></Overview>
		</main>
	);
}

export default App;
