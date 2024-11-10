import React from 'react';
import Test from "../Test";
import { Tile } from 'carbon-components-react';
import './DashBoard.scss';
import {ReactComponent as ReactSvg} from '../assets/undraw_winners_ao2o.svg';
import {ReactComponent as ReactSvg2} from '../assets/undraw_empty_street_sfxm.svg';
import di from '../assets/di.png';
import micro from '../assets/micro.png'
import withAnimationEaseIn from "../Utilities/withAnimationEaseIn/withAnimationEaseIn.js";
import RatingTag from "../RatingTag/RatingTag";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const monthlySustainabilityData = [
    { month: 'Jan', score: 78.3 },
    { month: 'Feb', score: 82.6 },
    { month: 'Mar', score: 85.3 },
    { month: 'Apr', score: 81.1 },
    { month: 'May', score: 70.9 },
    { month: 'Jun', score: 63.5 },
    { month: 'Jul', score: 48.7 },
    { month: 'Aug', score: 74.7 },
    { month: 'Sep', score: 86.3 },
    { month: 'Oct', score: 89.2 },
    { month: 'Nov', score: 82.6 },
];

const purchaseVsSustainabilityData = [
    { purchase: 1, sustainabilityScore: 65.3 },
    { purchase: 2, sustainabilityScore: 48.6 },
    { purchase: 3, sustainabilityScore: 72.6 },
    { purchase: 4, sustainabilityScore: 68.4 },
    { purchase: 5, sustainabilityScore: 70.1 },
    { purchase: 6, sustainabilityScore: 73.6 },
    { purchase: 7, sustainabilityScore: 35.0 },
    { purchase: 8, sustainabilityScore: 47.1 },
    { purchase: 9, sustainabilityScore: 88.5 },
    { purchase: 10, sustainabilityScore: 69.2 },
	{ purchase: 11, sustainabilityScore: 84.4 },
];



const DashBoard = (props) => {
	console.log(props);
	const Img = withAnimationEaseIn(ReactSvg);
	const Img2 = withAnimationEaseIn(ReactSvg2);
	return (
		<React.Fragment>
			<div className={"DashboardWrapper"}>
				<div style={{display: "flex", paddingTop: "60px", paddingLeft: "80px", paddingBottom: "40px"}}>
					<Img className={"DashboardVictoryImg"} style={{width: 800, maxHeight: "500px"}}/>
					<Tile className={"DashboardTileVictory"}>
						<div className={"DashboardTileHeader"}>
							You're on a roll!
						</div>
						<div className={"TileText"}>
							Your average purchase sustainability ranks:
						</div>
						<RatingTag score={3} />
						<div className={"TileText"}>
							On average, you ask <span style={{ fontWeight: "bold", fontStyle: "italic" }}>3</span> questions for each product using EcoLens!
						</div>
						<div className={"TileTextEmphasize"}>
							Way to go you!
						</div>
						<div className={"TileText"}>
							Just this month, you've used EcoLens <span style={{ fontWeight: "bold", fontStyle: "italic" }}>11</span> times! 
						</div>
						<div className={"TileText"}>
							Your favorite store to use EcoLens in is <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Amazon</span>.
						</div>
						<div className={"TileText"}>
							You are in the top <span style={{ fontWeight: "bold", fontStyle: "italic" }}>20%</span>  of shoppers in your region!
						</div>
					</Tile>
				</div>
				<div className={"DashboardBanner"}>
					<div>
						<div className={"BannerHeader"}>Online purchases recorded this month</div>
						<div className={"BannerContent"}>11</div>
					</div>
					<div>
						<div className={"BannerHeader"}>Total questions asked this month</div>
						<div className={"BannerContent"}>32</div>
					</div>
					<div>
						<div className={"BannerHeader"}>Average puchase sustainability score</div>
						<div className={"BannerContent"}>76.2</div>
					</div>
				</div>
				<div style={{display: "flex", paddingTop: "20px", paddingLeft: "30px", paddingBottom: "0px"}}>
					<Tile className={"DashboardTileVictory"}>
						<div className={"DashboardTileHeader"}>
							How you compare to others in your region
						</div>
						<div className={"TileText"}>
							Your favorite online store is <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Amazon</span>.
						</div>
						<div className={"TileText"}>
							Your average <span style={{ fontWeight: "bold", fontStyle: "italic" }}>Amazon</span> purchases ranks:
						</div>
						<RatingTag score={3} />
					
						<div className={"TileText"}>
							Did you know that your average purchases are <span style={{ fontWeight: "bold", fontStyle: "italic" }}>1.84</span>x better than the national average in the US?
						</div>
						<div className={"TileText"}>
							Your overall sustainability score this month is <span style={{ fontWeight: "bold", fontStyle: "italic" }}>3.34</span>x better than others in your region!
						</div>
						<div className={"TileTextEmphasize"}>
							That's incredible! You are setting a standard!
						</div>
					</Tile>
					<Img2 className={"DashboardVictoryImg"} style={{width: 700, maxHeight: "400px", marginLeft: "80px"}}/>
				</div>
				<div className={"DashboardTilesWrapper DashboardContent"}>
					<Tile className={"DashboardTile"}>
						<div className={"DashboardTileHeader"}>
							Your most noteworthy buy this month
						</div>
						<div style={{display:"flex", justifyContent:"flex-start", paddingTop: "20px"}}>
							<img src={di} style={{maxHeight: "80px", paddingRight: "30px", paddingLeft: "30px"}}/>
							<div>
								<div className={"TileTextEmphasize"} style={{marginTop: "-20px"}}>
									Tru Earth Hypoallergenic, Eco-friendly and Biodegradable Plastic-Free Laundry Detergent
								</div>
								<div className={"TileText"}>
									Bought from Amazon on 11/10/2024
								</div>
								<div className={"TileText"}>
									This item scored:
								</div>
								<div style={{marginTop: "10px"}}> 
									<RatingTag score={0.3} />
								</div>
							</div>
						</div>
					</Tile>
					<Tile className={"DashboardTile"}>
						<div className={"DashboardTileHeader"}>
							Your lowest scoring buy this month							
						</div>
						<div style={{display:"flex", justifyContent:"flex-start", paddingTop: "20px"}}>
							<img src={micro} style={{maxHeight: "90px", paddingRight: "30px", paddingLeft: "20px"}}/>
							<div>
								<div className={"TileTextEmphasize"} style={{marginTop: "-10px"}}>
									Panasonic 2.2 Cu. Ft. Microwave (NNST966W) - White
								</div>
								<div className={"TileText"}>
									Bought from Amazon on 11/09/2024
								</div>
								<div className={"TileText"}>
									This item scored:
								</div>
								<div style={{marginTop: "10px"}}> 
									<RatingTag score={9} />
								</div>
							</div>
						</div>
					</Tile>
				</div>
				<div className={"DashboardTilesWrapper DashboardContent"}>
					<Tile className={"DashboardTile"}
							style={{width: "600px", height: "350px"}}>
						<div className={"DashboardTileHeader"}>
							Your eco-shopping this month
						</div>
						<ResponsiveContainer width="100%" height="85%">
							<BarChart data={purchaseVsSustainabilityData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="purchase" label={{ value: 'Purchase Number', position: 'insideBottom', offset: -5 }} />
								<YAxis label={{ value: 'Sustainability Score', angle: -90, position: 'insideLeft', dy: 40 }} />
								<Tooltip />
								<Bar dataKey="sustainabilityScore" fill="#82ca9d" />
							</BarChart>
						</ResponsiveContainer>
						<div>
							
						</div>
						<div>
						</div>
						<div>
							
						</div>
						<div>
							
						</div>
						<div>
							
						</div>
					</Tile>
					<Tile className={"DashboardTile"}
							style={{width: "600px", height: "350px"}}>
						<div className={"DashboardTileHeader"}>
							Sustainability scores this year
						</div>

						<ResponsiveContainer width="100%" height="85%">
							<LineChart data={monthlySustainabilityData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
								<YAxis label={{ value: 'Average Sustainability Score', angle: -90, position: 'insideLeft', dy: 40 }} />
								<Tooltip />
								<Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
							</LineChart>
						</ResponsiveContainer>

						<div>
							
						</div>
						
						<div>
						</div>
						<div>
							
						</div>
						<div>
						
						</div>
						<div>
							
						</div>
					</Tile>
				</div>
				{/* <Test/> */}
			</div>
		</React.Fragment>
	);
}

export default DashBoard;
