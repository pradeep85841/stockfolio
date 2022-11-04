import React, {useEffect} from "react"
import BlockCard from "../BlockCard/index"

import { useDispatch, useSelector } from "react-redux";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import Container  from "@material-ui/Container";
import CardActions from '@mui/material/CardActions';

import { useNavigate } from 'react-router-dom';

const Blocks = (props) => {
	const {blockList = [[]]} = props

	const Divcontent = useSelector(state => state.DIVIDENT);
	const Itcontent = useSelector(state => state.IT);
	const dispatch = useDispatch();
  
	const navigate = useNavigate();
  
	function handleClickDividend() {
	  navigate("/DividentBlockView");
	}

	function handleClickIT() {
		navigate("/ItBlockView");
	  }
  
	 function getDividendData() {
	  return  dispatch => {
		const payload ={  method: 'POST',
		body: JSON.stringify({blockName: 'dividentcatalogue'}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
	  }
	  }
		 fetch("http://localhost:3000/blockEstimate",payload)
		.then((res) => res.json())
		.then((json) =>{
		  let result = JSON.parse(JSON.stringify(json))
		  dispatch({
			type: "DIVIDENTBLOCK_DATA",
			data: result.result
		  })
		}
		);
	  };
	}
  

	function getITData() {
		return  dispatch => {
		  const payload ={  method: 'POST',
		  body: JSON.stringify({blockName: 'itcatalogue'}),
		  headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
		}
		   fetch("http://localhost:3000/blockEstimate",payload)
		  .then((res) => res.json())
		  .then((json) =>{
			let result = JSON.parse(JSON.stringify(json))
			dispatch({
			  type: "ITBLOCK_DATA",
			  data: result.result
			})
		  }
		  );
		};
	  }
	
	useEffect(() => {
	  dispatch(getITData());
	  dispatch(getITData());
	}, [dispatch]);


	return (
		<div>
			{blockList.map(() => (
				<BlockCard itContent ={Itcontent}  Divcontent={Divcontent}/>
			))}
		</div>
	)
}

export default Blocks