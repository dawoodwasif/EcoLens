import React from 'react';
import './Contribute.scss';
import {ReactComponent as ReactSvg} from '../assets/undraw_data_processing_yrrv.svg';
import withAnimationEaseIn from "../Utilities/withAnimationEaseIn/withAnimationEaseIn.js";
import { TextInput, Form, FormGroup, Checkbox, ProgressIndicator, ProgressStep, Dropdown } from 'carbon-components-react';
import { messages_en } from "../Messages/messages_en";


const Contribute = (props) => {
	const Img = withAnimationEaseIn(ReactSvg);
	return (
		<React.Fragment>
			<div className={"ContributeWrapper"}>
				<div className={"ContributeLeft"}>
					<Img style={{width: "800px"}} />
				</div>
				<div className={"ContributeRight"}>
					<Form>
						<div className={"ContributeHeader"}>
							{messages_en.contributeHeader}
						</div>
						<div>
							<TextInput 
								labelText={"Product Name"}
								light={true}
							/>
							<Dropdown
								label={"Product category"}
								light={true}
								items={["Electronics", "Clothing", "Food", "Home Goods", "Other"]}
							/>
							<TextInput 
								labelText={"Link to product"}
								helperText={"Enter a link to this product (any online store will do)"}
								light={true}
							/>
							<FormGroup>
								<Checkbox defaultChecked labelText={"Amazon"}/>
								<Checkbox defaultChecked labelText={"Instacart"}/>
								<Checkbox defaultChecked labelText={"Best Buy"}/>
								<Checkbox defaultChecked labelText={"Walmart"}/>
								<Checkbox defaultChecked labelText={"Target"}/>
								<Checkbox defaultChecked labelText={"Other"}/>
							</FormGroup>
							<div style={{marginTop:"-20px", marginLeft: "60px"}}>
								<TextInput
									labelText={"Please enter a comma seperated list of online stores"}
									light={true}
								/>
							</div>
						</div>
					</Form>
					<button className={"ContributeButton"} onClick={() => {console.log("TODO")}}> Next </button>
					<div style={{paddingTop: "40px"}}>
						<ProgressIndicator
								currentIndex={0}>
								<ProgressStep
									index={0}
									current={true}
									complete={false}
									label={"Tell us about the product"}
								/>
								<ProgressStep
									index={1}
									current={false}
									complete={false}
									label={"What's your impression of this product's climate, water, and waste impact?"}
								/>
								<ProgressStep
									index={2}
									current={false}
									complete={false}
									label={"Review and submit"}
								/>
							</ProgressIndicator>
						</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Contribute;
