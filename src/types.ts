import { MenuItem } from '@prisma/client';

export type MenuWithItems = {
	id: string;
	name: string;
	menuItems: MenuItem[];
};
