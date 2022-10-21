// types
import { ReactElement } from 'react';
import { MenuWithItems } from 'src/types';

import { BeakerIcon } from '@heroicons/react/24/solid';

const Menu = ({ menu }: { menu: MenuWithItems }): ReactElement => {
	console.log(menu);
	return (
		<div className='text-white z-20 h-screen w-screen absolute top-0 flex items-center justify-center overflow-hidden'>
			<menu className='grid gap-1 text-center'>
				<li>
					<button className='text-center p-5 bg-slate-300 rounded w-full text-slate-900'>
						Up
					</button>
				</li>
				<li className='p-5 bg-slate-900/75 rounded'>
					<p>Portfolio</p>
				</li>
				<li className='p-5 bg-slate-900/75 rounded'>
					<p>Demos</p>
				</li>
				<li className='p-5 bg-slate-600/75 rounded'>
					<p>Projects</p>
				</li>
				<li className='p-5 bg-slate-900/75 rounded'>
					<p>Contact</p>
				</li>
				<li className='p-5 bg-slate-900/75 rounded'>
					<p>Social</p>
				</li>
				<li>
					<button className='text-center p-5 bg-slate-300 rounded w-full text-slate-900'>
						Down
					</button>
				</li>
			</menu>
		</div>
	);
};

export default Menu;
