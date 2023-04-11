import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";

function InterviewsTable({ apps }) {
  const rows = apps.map((app) => (
    <TableRow key={app.id}>
      <TableCell>
        {app.candidate.firstName} {app.candidate.lastName}
        {console.log(app)}
      </TableCell>
      <TableCell>{app.applicationState}</TableCell>
      <TableCell>
        {app.interviews.length != 0
          ? app.interviews[app.interviews.length - 1].interviewType
          : "No interview"}
      </TableCell>
      <TableCell>
        {app.interviews.length != 0
          ? app.interviews[app.interviews.length - 1].interviewerName
          : "No interview"}
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Candidate Fullname</TableCell>
              <TableCell>Application State</TableCell>
              <TableCell>Interviewer Name</TableCell>
              <TableCell>Interview State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default InterviewsTable;
