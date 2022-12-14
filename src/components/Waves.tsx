import styles from '../styles/Waves.module.css';

const Waves = () => {
	return (
		<div className='h-screen w-screen flex items-center justify-center text-center'>
			<svg
				className={styles.waves}
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 24 150 28'
				preserveAspectRatio='none'
				shapeRendering='auto'
			>
				<defs>
					<path
						id='gentle-wave'
						d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
					/>
				</defs>
				<g className={styles.parallax}>
					<use href='#gentle-wave' x='48' y='0' fill='rgba(138,138,255,0.7' />
					<use href='#gentle-wave' x='48' y='3' fill='rgba(138,138,255,0.5)' />
					<use href='#gentle-wave' x='48' y='5' fill='rgba(138,138,255,0.3)' />
					<use href='#gentle-wave' x='48' y='7' fill='#000' />
				</g>
			</svg>
		</div>
	);
};

export default Waves;
