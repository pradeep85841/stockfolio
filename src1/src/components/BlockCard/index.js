import React from "react"
import Paper from "@mui/material/Paper"
import {Grid} from "@mui/material"
import Button from "@mui/material/Button"
import * as Classes from "./BlockCard.css"
import ItAsset from "../../assets/SCET_0005.png"

const BlockCard = (props) => {

	const {Itcontent , Divcontent} = props;
	console.log('Itcontent')
	console.log(Itcontent)
	return (
		<>
			<Grid container spacing={5}>
				{ Itcontent && Itcontent.data.map((item,index)=>( <Grid item xs={6}>
					<Paper className='block1-it'>
						<div className='block1-it-container'>
							<p className='text-14 card-title'>
								It's a good day to start investing
							</p>
							<h2 className='make-first-invest-text text-18'>
								Start to make your first investment
							</h2>
							<Button variant='contained'>Contained</Button>
						</div>
					</Paper>
				</Grid>))}

				{Itcontent && Itcontent.data.map((item,index)=>( <Grid item xs={6}>
					<Paper className='block1-it'>
						<div className='block1-it-container'>
							<p className='text-14 card-title'>
								<span className='highlited-label'>Popular</span> - Viewed over
								40K times in the last month
							</p>
							<div className='card-details'>
								<img className='card-img' src={ItAsset} />
								{/* <div> */}
								<div style={{padding: "0 20px"}}>
									<h2 style={{margin: "0"}} className='text-18'>
										IT Assets
									</h2>
									<p className='text-14 card-description'>
										Create wealth with equities, stay protected with Gold. The
										sweet spot
									</p>

									<div
										style={{display: "flex", justifyContent: "space-between"}}
									>
										<div>
											<p className='statbox__title'>Price</p>
											<p className='statbox__value'>₹ 250</p>
										</div>

										<div>
											<p className='statbox__title'>3Ycagr</p>
											<p className='statbox__value'>10.43%</p>
										</div>

										<div>
											<p className='statbox__title'>volatality</p>
											<p className='statbox__value'>Low</p>
										</div>
									</div>
								</div>

								{/* </div> */}
							</div>
						</div>
					</Paper>
				</Grid>))}
			</Grid>
		</>
	)
}

export default BlockCard