//components
import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Waves from 'src/components/Waves';
import prisma from '../lib/prisma';

// styles
import styles from '../src/styles/Home.module.css';

export const getStaticProps: GetStaticProps = async () => {
	const projects = await prisma.project.findMany();
	return {
		props: { projects },
		revalidate: 10,
	};
};

type project = {
	id: string;
	title: string;
	content: string;
};

interface HomePageProps {
	projects: project[];
}

const Home: NextPage<HomePageProps> = ({ projects }) => {
	return (
		<div style={{ height: '100vh', background: 'black' }}>
			<Head>
				<title>nbuskirk.com - dev stuff by Nathan Buskirk</title>
				<meta
					name='description'
					content='Personal website of Nathan Buskirk -- Code examples, demos, repo stuff, react, typescript, css'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Waves />
			<div className={styles.content}>
				<p className='text-white'>
					{projects.map(
						(project: project) => `${project.title} - ${project.content}`
					)}
				</p>
			</div>
		</div>
	);
};

export default Home;
