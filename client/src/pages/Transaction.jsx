import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Transaction() {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    fetch("api/v1/transactions/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setTransactionData(data));
  }, []);

  console.log(transactionData);

  return (
    <div className="max-w-3xl mx-auto mt-32">
      <h1 className="text-3xl font-bold text-center mb-9 text-slate-500">
        Transactions
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sender</StyledTableCell>
              <StyledTableCell>Reciever</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>TimeStamp</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.sender}
                </StyledTableCell>
                <StyledTableCell>{row.reciever}</StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell>
                  {row.timestamp.substring(0, 10)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
