import { ReactElement } from 'react';
import { useState, useEffect } from 'react';

const NavBar = (): ReactElement => {
	const [DateState, setDateState] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => setDateState(new Date()), 1000);
		return () => {
			// cleanup the timer interval
			clearInterval(timer);
		};
	}, []);
	return (
		<header className='absolute top-10 right-0 z-10 w-25 mr-5 text-right'>
			<p className='text-white font-bold'>{DateState.toDateString()}</p>
			<p className='text-white text-sm'>
				{DateState.toLocaleString('en-us', {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					hour12: true,
				})}
			</p>
			{/*<p className='text-white text-sm'>Prisma added to project</p>*/}
		</header>
	);
};

export default NavBar;
