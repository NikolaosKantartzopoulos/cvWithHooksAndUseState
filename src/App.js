import "./styles/styles.css";
import TopComponent from "./components/TopComponent";
import EducationalExperience from "./components/EducationalExperience.js";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

function App() {
	return (
		<div className="App">
			<TopComponent />
			<GeneralInformation />
			<EducationalExperience />
			<PracticalExperience />
		</div>
	);
}

export default App;
