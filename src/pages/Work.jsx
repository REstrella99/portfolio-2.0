import React from 'react';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Code from '../components/Code/Code';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Img from '../components/Img';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import Social from '../components/Social';
import Button from '../components/Button';
import logo from '../images/logo.jpg';
import ReactPlayer from 'react-player'

const Work = () => (
	<div>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>My Work</Title>
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Code />
					</Col>
				</Row>
			</Grid>
		</Section>



		<Grid>

			<Row center="xs">
				<Col xs={12}>
					<SubTitle></SubTitle>
				</Col>
				<Col xs={6}>
					<Img src={logo} style={{ marginTop: '100px' }} width="600px" height="350px" />
					<div>
						<Button
							href="https://www.anime-shop-online.com">
							Anime Shop Online
</Button></div>
				</Col>

			</Row>
		</Grid>
		<Row center="xs">
			<Col xs={2} md={1}>
				<Divider />
			</Col>
		</Row>

		<Grid>

			<Row center="xs">

				<Col xs={12} center="xs">
					<ReactPlayer xs={12} center="xs" width="cover" url='https://vimeo.com/313432879' playing loop=" true" />
					<div>
						<Button
							href="https://www.anime-shop-online.com">
							Chime- Personal/Company Assistant Chatbot
</Button></div><div>
						<Button
							href="https://github.com/rileyjgr/chime">
							0101 [Code] 0101
</Button></div>
				</Col>

			</Row>
		</Grid>
		<Row center="xs">
			<Col xs={2} md={1}>
				<Divider />
			</Col>
		</Row>
		<Grid>

			<Row center="xs">

				<Col xs={12} center="xs">
					<ReactPlayer xs={12} center="xs" width="cover" url='https://vimeo.com/313443907' playing loop=" true" />
					<div>
						<Button
							href="https://Restrella99.github.io/BeerNearHere">
							Beer Near Here
</Button></div>
					<div>
						<Button
							href="https://github.com/REstrella99/BeerNearHere">
							0101 [Code] 0101
</Button></div>
				</Col>

			</Row>
		</Grid>
	</div >

);

export default Work;
