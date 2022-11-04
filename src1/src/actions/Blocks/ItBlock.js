import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import { useNavigate } from 'react-router-dom';

function ItBlockData() {
  const content = useSelector(state => state.IT);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/ItBlockView");
  }

   function getData() {
    return  dispatch => {
      const payload ={  method: 'POST',
      body: JSON.stringify({blockName: 'itcatalogue'}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    }
       fetch("/blockEstimate",payload)
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
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="itblock"  onClick={handleClick}>
      {content.data && (
       <ul>
          {content.data.map((item,index)=>(
            <div key={index}>
          <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="100"
        src=""
        alt="It Sector img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          IT Block
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Top Performers in IT sector
        </Typography>
      </CardContent>
      <CardActions>
      <CardContent>
      <Typography variant="body2">Price</Typography>
      <Typography variant="body2" color="blue">{item.blockTotalPrice}/-</Typography>
      </CardContent>
      <CardContent>
      <Typography variant="body2">3ycagr</Typography>
      <Typography variant="body2" color="blue">{item.cagr}%</Typography>
      </CardContent>
      <CardContent>
      <Typography variant="body2">volatality</Typography>
      <Typography variant="body2" color="blue">{item.volatality}%</Typography>
      </CardContent>
      </CardActions>
    </Card>
            </div>         
          ))}

        </ul>
      )}
    </div>
  );
}

export default ItBlockData;