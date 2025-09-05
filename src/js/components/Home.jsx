
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container justify-content-center">
				<Jumbotron />
					<div className="row justify-content-center" > 
					<Card />
					<Card />
					<Card />
					<Card />
					</div>
			</div>
				<Footer/>
		
		</>
	);
};

export default Home;