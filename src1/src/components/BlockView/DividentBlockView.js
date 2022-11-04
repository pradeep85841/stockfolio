import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from '../LiveCharts/DividentChart.js'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function DividentBlockView() {

  const content = useSelector(state => state.DividentList);
  const dispatch = useDispatch();

  function getData() {
    return  dispatch => {
       axios.get("http://localhost:5000/dividentcatalogue")
      .then((res) => res.data)
      .then((json) =>{
        let result = JSON.parse(JSON.stringify(json))
        dispatch({
          type: "DividentList_DATA",
          data: result
        })
      }
      );
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (

    <div className="dividentblock" >
    {content.data && (
        

  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell align="right">stock</StyledTableCell>
            <StyledTableCell align="right">pchange</StyledTableCell>
            <StyledTableCell align="right">cagr</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">industry</StyledTableCell>
            <StyledTableCell align="right">timestamp</StyledTableCell>
            <StyledTableCell align="right">peratio</StyledTableCell>
            <StyledTableCell align="right">roe</StyledTableCell>
            <StyledTableCell align="right">esp</StyledTableCell>
            <StyledTableCell align="right">volatality</StyledTableCell>
            <StyledTableCell align="right">currentprice</StyledTableCell>
            <StyledTableCell align="right">dividentrate</StyledTableCell>
            <StyledTableCell align="right">marketcap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.data.map((row)=>(
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.stock}</StyledTableCell>
              <StyledTableCell align="right">{row.pchange}</StyledTableCell>
              <StyledTableCell align="right">{row.cagr}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.industry}</StyledTableCell>
              <StyledTableCell align="right">{row.timestamp}</StyledTableCell>
              <StyledTableCell align="right">{row.peratio}</StyledTableCell>
              <StyledTableCell align="right">{row.roe}</StyledTableCell>
              <StyledTableCell align="right">{row.esp}</StyledTableCell>
              <StyledTableCell align="right">{row.volatality}</StyledTableCell>
              <StyledTableCell align="right">{row.currentprice}</StyledTableCell>
              <StyledTableCell align="right">{row.dividentrate}</StyledTableCell>
              <StyledTableCell align="right">{row.marketcap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )}
    <div>
      <Chart />
    </div>
    </div>
  );
}
