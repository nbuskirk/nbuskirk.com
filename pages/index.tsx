//prisma client
import prisma from '../lib/prisma';

//types
import type { NextPage, GetStaticProps } from 'next';
import { Project } from '@prisma/client'; // Prisma exports default types from schema
import { MenuWithItems } from 'src/types';

//components
import Head from 'next/head';
import Waves from '@components/Waves';
import NavBar from '@components/Navbar';
import Menu from '@components/Menu';

export const getStaticProps: GetStaticProps = async () => {
	const projects = await prisma.project.findMany();
	const menu = await prisma.menu.findUnique({
		where: {
			id: 2,
		},
		include: {
			menuItems: true,
		},
	});
	return {
		props: { projects, menu },
		revalidate: 10,
	};
};

interface HomePageProps {
	projects: Project[];
	menu: MenuWithItems;
}

const Home: NextPage<HomePageProps> = ({ projects, menu }) => {
	return (
		<div className='h-screen bg-black relative'>
			<Head>
				<title>nbuskirk.com - dev stuff by Nathan Buskirk</title>
				<meta
					name='description'
					content='Personal website of Nathan Buskirk -- Code examples, demos, repo stuff, react, typescript, css'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				></meta>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<Waves />
			<Menu menu={menu} />
		</div>
	);
};

export default Home;
