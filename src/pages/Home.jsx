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
import clyrics from '../images/clyrics.jpg';
import upwork from '../images/upwork.png';
import columbia from '../images/columbia.jpg';
import Pic from '../images/raf.jpg';
import { NavLink } from 'react-router-dom';


const Home = () => (
	<div>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<div style={{ marginBottom: "435px" }} class="loader">
							<div class="wrapper">
								<div class="letters"><span class="letter">R</span><span class="letter">a</span><span class="letter">f</span><span class="letter">a</span><span class="letter">e</span><span class="letter">l</span><span class="letter"> </span><span class="letter">E</span><span class="letter">s</span><span class="letter">t</span><span class="letter">r</span><span class="letter">e</span><span class="letter">l</span><span class="letter">l</span><span class="letter">a</span>
								</div>
								<p style={{ fontFamily: "'Quattrocento', serif", color: "white" }}>Junior Full-Stack/Frontend Developer</p>
							</div>
						</div>
						<Social />
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img className="desk" src={Desk} sizeX="100%" sizeY="120%" max="600px" />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<br />
			<br /><br />
			<br />
			<Row center="xs">

				<Img src={Pic} paddingTop="50px" sizeX="225px" sizeY="225px" />
				<br />
				<br />
				<Col xs={12}>
					<br />
					<br />
					<SubTitle>Hello!</SubTitle>
				</Col>
				<Col xs={12} lg={6}>
					<div className="div">
						I'm a Junior Full-Stack/Frontend Developer with a zeal for innovation and advancing technology in the digital dimension. Being a recent graduate of Columbia University's first-ever Full-Stack Engineering Coding Bootcamp I will integrate my ingenuity into tech enterprises by building avant-garde applications and websites to accelerate my career.
					</div>
				</Col>


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
						<div className="div">TOP SKILLS- MongoDB, Express, ReactJS, Node JS, HTML5, CSS3/SASS/LESS & Javascript. </div>
						<br />
						<br />
						<i className="icons devicon-mongodb-plain colored" />
						<i className="icons devicon-express-original colored" />
						<i className="icons devicon-react-plain colored" />
						<i className="icons devicon-nodejs-plain colored" />

						<i className="icons devicon-html5-plain colored" />
						<i className="icons devicon-css3-plain colored" />
						<i className="icons devicon-javascript-plain colored" />

					</Col>




				</LazyLoad>
			</Row>
			<Row center="xs">

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

				<Col xs={12} md={4}>
					<NavLink to="/work">
						<Img src={upwork} sizeX="90%" sizeY="90%" />
					</NavLink>

				</Col>

				<Col xs={12} md={4}>
					<NavLink to="/work">
						<Img src={logo} sizeX="90%" sizeY="90%" />
					</NavLink>

				</Col>
				<Col xs={12} md={4}>
					<NavLink to="/work">
						<Img src={clyrics} sizeX="90%" sizeY="90%" />
					</NavLink>

				</Col>



			</Row>
		</Grid>
	</div >
);

export default Home;
