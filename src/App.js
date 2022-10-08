import "./styles/styles.css";
import EducationalExperience from "./components/EducationalExperience.js";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

function App() {
	return (
		<div className="App">
			<GeneralInformation />
			<EducationalExperience />
			<PracticalExperience />
		</div>
	);
}

export default App;
