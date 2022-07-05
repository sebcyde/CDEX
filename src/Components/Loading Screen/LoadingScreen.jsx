import { useState, CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import './LoadingScreen.css';

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'white',
};

function LoadingScreen() {
	let [loading, setLoading] = useState(true);

	return (
		<div className="sweet-loading">
			<FadeLoader
				color={'#fff'}
				loading={loading}
				cssOverride={override}
				size={150}
			/>
		</div>
	);
}

export default LoadingScreen;
