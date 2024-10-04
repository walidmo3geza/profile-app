import { useEffect } from "react";

function App() {
	useEffect(() => {
		const pdfUrl = "./Files/file.pdf";
		window.location.href = pdfUrl;
	}, []);

	return <div></div>;
}

export default App;
