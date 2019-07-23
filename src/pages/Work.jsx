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
import COUNTRYLYRICS from '../images/country-lyrics.com.jpg';
import UPWORKFREELANCE from '../images/upworkfreelance.png';
import CRYSTALCOLLECTOR from '../images/crystalcollector.png'
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

		<Section backgroundColor="#21364b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<TITLE2>Upwork</TITLE2><Paragraph>Jr. Full Stack/Front-End Developer</Paragraph>
						<LazyLoad height={200} offset={-50}>
							<Img src={UPWORKFREELANCE} sizeX="45%" />
						</LazyLoad>
						<Paragraph color="#ffffff">
							Through Upwork businesses get more done, connecting with freelancers to work on projects from web and mobile app development to SEO, social media marketing, content writing, graphic design, admin help and thousands of other projects. Upwork makes it fast, simple, and cost-effective to find, hire, work with, and pay the best professionals anywhere, any time.
							<br />
							<br />
							Communicated with clients to deliver quality projects based on their individual/company
	needs.  Worked independently or on a team to develop web applications using custom front-end
							HTML, CSS, Javascript/jQuery, ReactJS, NodeJS, Angular 4/5/6 & AngularJS. Extensive usage of Bootstrap, Media Queries, SASS for Responsive Design to fit
							devices of different visual sizes. Query information and maintain databases using MySQL, PostgresSQL & MongoDB. Optimized SEO to attract more organic visitors.
				</Paragraph>
						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-react-plain colored" />
									<i className="icons devicon-html5-plain colored" />
									<i className="icons devicon-css3-plain colored" />
									<i className="icons devicon-javascript-plain colored" />
									<i className="icons devicon-angularjs-plain colored" />
									<i className="icons devicon-mongodb-plain colored" />
									<i className="icons devicon-nodejs-plain colored" />
									<i className="icons devicon-jquery-plain colored" />
								</Col>
							</LazyLoad>
						</Row>
						<Paragraph>
							<Button color="white" backgroundColor="white" href="https://www.upwork.com/freelancers/~01a798916eb0e7c317">Visit My Upwork</Button>
						</Paragraph>
					</Col>
				</Row>
			</Grid>
		</Section>


		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<TITLE2>ASO-Anime Shop Online</TITLE2>
						<Paragraph color="white">Front-End Developer</Paragraph>
						<LazyLoad height={1300} offset={-50}>
							<Img src={ASO} sizeX="70%" />
						</LazyLoad>
						<Paragraph color="#ffffff">
							Anime Fans Love Us! We offer best service and great prices on Anime Products such as Clothes, Shoes and Accessories.
							Shipping to 185 Countries Our Anime Store operates worldwide and you can enjoy free delivery of all your Anime orders.
							100% Safe Payment Buy Anime Products with confidence using the world’s most popular and secure payment methods.
							<br />
							<br />
							Created a custom website using Wordpress and PHP.  Routinely utilized HTML5, CSS3, JavaScript and jQuery.  Optimized website to improve design and performance.  Helped create a branding strategy based on demographics.  Extensive usage of Bootstrap, Media Queries, Sass for Responsive Design to fit devices of different visual sizes.  Optimized SEO to attract more organic visitors, work on page ranking, creating and exchanging backlinks.
							</Paragraph>
						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-wordpress-plain colored" />
									<i className="icons devicon-php-plain colored" />
									<i className="icons devicon-html5-plain colored" />
									<i className="icons devicon-css3-plain colored" />
									<i className="icons devicon-javascript-plain colored" />
									<i className="icons devicon-jquery-plain colored" />
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

		<Section backgroundColor="#21364b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<TITLE2>Country Lyrics</TITLE2><Paragraph>Jr Front-End Developer</Paragraph>
						<LazyLoad height={200} offset={-50}>
							<Img src={COUNTRYLYRICS} sizeX="65%" />
						</LazyLoad>
						<Paragraph color="#ffffff">
							Country Lyrics, Tabs and Chords #1 source! Find Your Country Lyrics Now!
							<br />
							<br />
							Developed Frontend using HTML5, CSS3, SASS, JavaScript, and jQuery.  Used jQuery to target the DOM and assign events. Designed logos and pages.  Transferring HTML5 and JavaScript to ReactJS Components and making the SASS Modular.  Responsible for testing, troubleshooting and fixing bugs in the front-end area of the site.  Worked with a collaborative team of 10 people using GitHub to merge commits.  Extensive usage of Bootstrap, Media Queries, SASS for Responsive Design to fit devices of different visual sizes. Make the website cross-browser compatible across all devices.  Typed documents such as correspondence, drafts, memos, and emails, and prepared 3 reports weekly for management. Conducted research analysis to qualify design elements.  SEO, page ranking and building up backlinks. Configured Cloudflare for better performance.
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
							<Button color="white" backgroundColor="white" href="http://websites.milonic.com/country-lyrics.com">Visit Country Lyrics</Button>
						</Paragraph>
					</Col>
				</Row>
			</Grid>


			<Section backgroundColor="#31355b">
				<Grid>

					<Row center="xs">

						<Col style={{ marginBottom: "50px" }} xs={12} >
							<TITLE2 style={{ marginBottom: "50px" }}>Noteable Projects</TITLE2>

							<Paragraph>Crystal Collector Game</Paragraph>

							<LazyLoad height={200} offset={-50}>
								<Img src={CRYSTALCOLLECTOR} sizeX="65%" />
							</LazyLoad>



							<Paragraph color="#ffffff">
								Interactive Game for Web browsers
								<br />
								<br />
								Front End built using HTML, CSS & Javascript/jQuery.  Game functionalities created using Javascript.  Dynamically updated my HTML with jQuery.
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
										href="https://restrella99.github.io/Crystal-Collector-Game/">
										Visit Crystal Collector
</Button></div>
								<div>
									<Button href="https://github.com/REstrella99/Crystal-Collector-Game">
										0101 [Code] 0101
</Button></div></Row>
						</Col>

					</Row>
				</Grid>
			</Section>

		</Section>
		<Section backgroundColor="#21364b">
			<Grid>


				<Row center="xs">



					<Col style={{ marginBottom: "50px" }} xs={12} >
						<Paragraph>Chime- The Company/Personal Assistant Chatbot</Paragraph>

						<ReactPlayer marginTop="200px" xs={12} center="xs" width="cover" url='https://vimeo.com/313432879' playing loop=" true" />

						<Paragraph color="#ffffff">
							Chime- The Company/Personal Assistant Chatbot.  Integrating chime into your company will be simple and easy in the future. We are currently in early stages and only have limited amount of beta keys to give out to allow the bot to interact with your google calendar & other google products.
							<br />
							<br />
							Current Functionalities:
	 AI Music Finder / Recommendations, Stock Ticker Info/ Company News, Weather, Anonmyous Feedback & an Administrative Dashboard. Chatbot Integrations: Slack, Google Home (Alpha), Call Support (+1 210-745-6179 Temporary Number) & Facebook Messenger.
	 						<br />
							<br />
							Technologies Used: ReactJS, Express, NodeJS, MongoDB, Javascript, React Bootstrap, Google's DialogFlow, Natural Language Processing(NLP) for Machine Learning, Googles Google Cloud Platform API's, Google Calendar API, Galiboo Music API for A.I. suggestions, News API & Open Weather Map.
				</Paragraph>

						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col xs={12}>
									<i className="icons devicon-mongodb-plain colored" />
									<i className="icons devicon-express-original" />
									<i className="icons devicon-react-plain colored" />
									<i className="icons devicon-nodejs-plain colored" />
									<i className="icons devicon-webpack-plain colored" />
									<i className="icons devicon-javascript-plain colored" />
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

					<Col style={{ marginBottom: "50px" }} xs={12} center="xs">
						<Paragraph>B.N.H.- Beer Near Here</Paragraph>

						<ReactPlayer style={{ marginBottom: "50px" }} xs={12} center="xs" width="cover" url='https://vimeo.com/313443907' playing loop=" true" />

						<Paragraph style={{ marginBottom: "25px" }} color="#ffffff">
							Find a brewery near you and what kind of beers they offer.  Get custom suggestions using keywords depending on your preference.
							<br />
							<br />
							Front End built using HTML, CSS & Javascript/jQuery.  Google maps API to render maps, Brewery API to geolocate any near you.
							</Paragraph>


						<Row center="xs">
							<LazyLoad height={200} offset={-250}>
								<Col style={{ marginBottom: "25px" }} center="xs" xs={12}>
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
