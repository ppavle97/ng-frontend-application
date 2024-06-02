import Navigation from '../components/Navigation/Navigation';
import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<title>NG Frontend Application</title>
				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>
			<body>
				<StyledComponentsRegistry>
					<ClientProviders>
						<Navigation />
						{children}
					</ClientProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
