// types
import { ReactElement } from 'react';
import { MenuWithItems } from 'src/types';

const Dashboard = ({ menu }: { menu: MenuWithItems }): ReactElement => {
	return (
		<div className='z-10 text-white'>
			<p>{menu.name}</p>
			<div>
				{menu.menuItems.map((menuItem) => (
					<p key={menuItem.id}>{menuItem.name}</p>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
