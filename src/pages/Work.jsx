import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Code from '../components/Code/Code';
import Img from '../components/Img';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';
import ASO from '../images/aso.png';
import SLOOP from '../images/sendloop.jpg';
import ReactPlayer from 'react-player';
import TITLE2 from '../components/Title2';


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



		{/* <Grid>

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
	</div > */}


		<Section backgroundColor="#21364b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<TITLE2>ASO-Anime Shop Online</TITLE2>
						<Paragraph color="white">Junior Front-End Developer</Paragraph>
						<LazyLoad height={1300} offset={-50}>
							<Img src={ASO} sizeX="100%" />
						</LazyLoad>
						<Paragraph color="#ffffff">
							Anime Fans Love Us! We offer best service and great prices on Anime Products such as Clothes, Shoes and Accessories.
							Shipping to 185 Countries Our Anime Store operates worldwide and you can enjoy free delivery of all your Anime orders.
							100% Safe Payment Buy Anime Products with confidence using the world’s most popular and secure payment methods.
							</Paragraph>
						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-mongodb-plain colored" />
									<i className="icons devicon-express-original" />
									<i className="icons devicon-react-plain colored" />
									<i className="icons devicon-nodejs-plain colored" />
									<i className="icons devicon-webpack-plain colored" />
								</Col>
							</LazyLoad>
						</Row>
						<Paragraph>
							<Button color="#3e90ca" backgroundColor="#A8D7F9" href="https://www.anime-shop-online.com/">Visit ASO</Button>
						</Paragraph>
					</Col>
				</Row>
			</Grid>
		</Section>

		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<TITLE2>SendLoop</TITLE2><Paragraph>Junior Front-End Developer</Paragraph>
						<LazyLoad height={200} offset={-50}>
							<Img src={SLOOP} sizeX="100%" />
						</LazyLoad>
						<Paragraph color="#ffffff">
							Sendloop is an easy-to-use, fully featured email marketing software for e-commerce business, SMB owners, and digital services. It’s a customizable marketing automation platform designed specifically to benefit anyone interested in digital email marketing. The application provides advanced tools, integrations, and plugins that help you automatize email marketing campaigns.
				</Paragraph>
						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-react-plain colored" />
									<i className="icons devicon-html5-plain colored" />
									<i className="icons devicon-css3-plain colored" />
									<i className="icons devicon-javascript-plain colored" />
								</Col>
							</LazyLoad>
						</Row>
						<Paragraph>
							<Button color="white" backgroundColor="white" href="https://www.sendloop.com">Visit SendLoop</Button>
						</Paragraph>
					</Col>
				</Row>
			</Grid>
		</Section>
		<Section backgroundColor="#21364b">
			<Grid>


				<Row center="xs">



					<Col style={{ marginBottom: "50px" }} xs={12} >
						<TITLE2>School Projects</TITLE2><Paragraph>Chime- The Company Assistant Chatbot</Paragraph>

						<ReactPlayer marginTop="200px" xs={12} center="xs" width="cover" url='https://vimeo.com/313432879' playing loop=" true" />

						<Paragraph color="#ffffff">
							Chime- The Company Assistant Chatbot.  Integrating chime into your company will be simple and easy in the future. We are currently in early stages and only have limited amount of beta keys to give out to allow the bot to interact with your google calendar & other google products. Current Functionalities:
	 AI Music Finder / Recommendations, Stock Ticker Info/ Company News, Weather, Anonmyous Feedback & an Administrative Dashboard. Chatbot Integrations: Slack, Google Home (Alpha), Call Support (+1 210-745-6179 Temporary Number) & Facebook Messenger. Tech Used~ DialogFlow (Natural Language Processing(NLP) for Machine Learning), Googles API For A.I,
	Google Cloud Platform Apis, Google Calendar Api, Cloud Functions Api, Galiboo Music API for A.I. suggestions, News API & Open Weather Map.
				</Paragraph>

						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-mongodb-plain colored" />
									<i className="icons devicon-express-original" />
									<i className="icons devicon-react-plain colored" />
									<i className="icons devicon-nodejs-plain colored" />
									<i className="icons devicon-webpack-plain colored" />
									<i className="icons devicon-bootstrap-plain colored" />
									<i className="icons devicon-google-plain colored"></i>
								</Col>
							</LazyLoad>
						</Row>
						<Row center="xs">
							<div>

								<Button
									href="https://chime-bot.herokuapp.com/">
									Chime- Homepage
</Button></div>

							<div><Button href="https://chime-bot.herokuapp.com/dashboard">Dashboard</Button></div>
						</Row><div>
							<Button
								href="https://github.com/rileyjgr/chime">
								0101 [Code] 0101
</Button></div>
					</Col>

				</Row>
			</Grid>
		</Section>
		<Section backgroundColor="#31355b">
			<Grid>

				<Row center="xs">

					<Col xs={12} center="xs">
						<Paragraph>B.N.H.- Beer Near Here</Paragraph>

						<ReactPlayer style={{ marginBottom: "50px" }} xs={12} center="xs" width="cover" url='https://vimeo.com/313443907' playing loop=" true" />

						<Paragraph color="#ffffff">
							Find a brewery near you and what kind of beers they offer.  Get custom suggestions using keywords depending on your preference.
							</Paragraph>


						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col center="xs" xs={12}>
									<i className="icons devicon-html5-plain colored" />
									<i className="icons devicon-css3-plain colored" />
									<i className="icons devicon-javascript-plain colored" />
									<i className="icons devicon-jquery-plain colored"></i>
								</Col>
							</LazyLoad>
						</Row>
						<Row center="xs">

							<div>
								<Button
									href="https://Restrella99.github.io/BeerNearHere">
									Beer Near Here
</Button></div>
							<div>
								<Button href="https://github.com/REstrella99/BeerNearHere">
									0101 [Code] 0101
</Button></div></Row>
					</Col>

				</Row>
			</Grid>
		</Section>
	</div>
);


export default Work;
