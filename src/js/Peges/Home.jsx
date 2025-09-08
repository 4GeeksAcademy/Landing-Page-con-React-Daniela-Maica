import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container justify-content-center">
				<Jumbotron />
				<div className="row justify-content-center" >
				<Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe ipsam aut quae nostrum quos. Repellat tempora debitis nesciunt atque ratione, aliquid eum laudantium? Fuga iusto corporis suscipit quam debitis!" />
				<Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"/>
				<Card text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean."/>
				<Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe ipsam aut quae nostrum quos. Repellat tempora debitis nesciunt atque ratione, aliquid eum laudantium? Fuga iusto corporis suscipit quam debitis!"/>
				</div>
			</div>
			<Footer />

		</>
	);
};

export default Home;