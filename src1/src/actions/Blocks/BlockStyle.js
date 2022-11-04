import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
//import CatalogueView from "../../components/CatalogueView.js";

function ItBlockData() {
  const content = useSelector(state => state.IT);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/CatalogueView");
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
      
      {item.blockTotalPrice}
      {item.cagr}
    {item.volatality}
            </div>         
          ))}

        </ul>
      )}
    </div>
  );
}

export default ItBlockData;