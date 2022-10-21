// types
import { ReactElement, useState, useRef, useEffect } from 'react';
import { MenuWithItems } from 'src/types';

import {
	BeakerIcon,
	ChatBubbleLeftRightIcon,
	EnvelopeIcon,
	TvIcon,
	FolderPlusIcon,
} from '@heroicons/react/24/solid';

const Menu = ({ menu }: { menu: MenuWithItems }): ReactElement => {
	const menuRef = useRef(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [activeItem, setActiveItem] = useState(0);
	useEffect(() => {
		window.onkeydown = (event) => {
			setIsAnimating(true);
			if (event.key === 'ArrowDown') {
				activeItem > -2 ? setActiveItem(activeItem - 1) : '';
			} else if (event.key === 'ArrowUp') {
				activeItem < 2 ? setActiveItem(activeItem + 1) : '';
			}
		};
		window.addEventListener('wheel', (event) => {
			if (event.deltaY > 0)
				activeItem > -2 ? setActiveItem(activeItem - 1) : '';
			else if (event.deltaY < 0)
				activeItem < 2 ? setActiveItem(activeItem + 1) : '';
		});
	});

	return (
		<div className='text-white absolute top-1/2vh overflow-hidden'>
			<menu
				ref={menuRef}
				style={{
					transition: 'transform 0.5s linear',
					transform: `translateY(${activeItem * 38 + 'px'} )`,
				}}
				className='relative z-20 flex flex-col'
			>
				<li className='flex items-center'>
					<p>Portfolio</p>
				</li>
				<li className=' flex items-center'>
					<p>Demos</p>
				</li>
				<li className=' relative flex items-center'>
					<p>Projects</p>
				</li>
				<li className='flex items-center'>
					<p>Contact</p>
				</li>
				<li className='flex items-center'>
					<p>Social</p>
				</li>
			</menu>
			<menu className='absolute top-[76px] w-full bg-slate-600/75 z-10 rounded'>
				<li className='selector'>
					<p>{'\u00A0'}</p>
				</li>
			</menu>
		</div>
	);
};

export default Menu;
