import InfoBar from './components/InfoBar/InfoBar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<InfoBar />
			<Content />
		</BrowserRouter>
	);
}

export default App;
