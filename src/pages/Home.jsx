import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MusicPlayer from 'react-responsive-music-player';
import LazyLoad from 'react-lazyload';
import Me from '../images/me.svg';
import Desk from '../images/desk.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import Social from '../components/Social';
import Button from '../components/Button';
import logo from '../images/logo.jpg';
import columbia from '../images/columbia.jpg';


const Home = () => (
	<div>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>Rafael Estrella</Title>
						<Paragraph>Junior Frontend Developer</Paragraph>
						<Social />
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img src={Desk} sizeX="100%" sizeY="120%" max="600px" />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<Row center="xs">
				<Img src={Me} sizeX="152px" sizeY="200px" />
				<Col xs={12}>
					<SubTitle>Hi.</SubTitle>
				</Col>
				<Col xs={12} lg={6}>
					<div className="div">
						I'm a Junior Frontend Developer with a zeal for innovation and advancing technology in the digital dimension. Being a recent graduate of Columbia University's first-ever Full-Stack Engineering Coding Bootcamp I will integrate my ingenuity into tech enterprises by building avant-garde applications and websites to accelerate my career.
					</div></Col>


				<Col xs={12}>
					<Img src={columbia} sizeX="25%" sizeY="90%" /></Col>

			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<Row center="xs">
				<LazyLoad height={200} offset={-250}>
					<Col xs={12}>
						<SubTitle>Well versed in...</SubTitle>
						<i className="icons devicon-react-plain colored" />
						<i className="icons devicon-html5-plain colored" />
						<i className="icons devicon-css3-plain colored" />
						<i className="icons devicon-javascript-plain colored" />
						<i className="icons devicon-sass-original colored" />
						<i className="icons devicon-webpack-plain colored" />
					</Col>




				</LazyLoad>
			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={12}>
					<SubTitle>My Recent Work</SubTitle>
				</Col>
				<Col xs={12}>
					<Img src={logo} sizeX="50%" sizeY="50%" />
					<div>
						<Button
							href="https://www.anime-shop-online.com">
							Anime Shop Online
    </Button></div>
				</Col>

			</Row>
		</Grid>
	</div >
);

export default Home;
