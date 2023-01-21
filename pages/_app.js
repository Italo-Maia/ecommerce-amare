// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { AuthProvider } from "../contexts/Auth/AuthProvider";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
