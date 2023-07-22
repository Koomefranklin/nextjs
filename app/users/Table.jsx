import React, {useState} from "react";
import "./Table.css"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Table = ({/* rows,*/ deleteRow, editRow }) => {
    const [rows, setRows] = useState([
        {
            fname: "Fabian",
            lname: "Matata",
            username: "fmatata",
            pfno: "KISE/T105",
            department: "ICT",
        },
        {
            fname: "Edwin",
            lname: "Sabaya",
            username: "esabaya",
            pfno: "KISE/100",
            department: "Research",
        },
        {
            fname: "Franklin",
            lname: "Koome",
            username: "fkoome",
            pfno: "KISE/340",
            department: "HR",
        },
    ]);
    if (!rows || !Array.isArray(rows)) {
        return <div>No data to display.</div>;
    }
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>P/F Number</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {rows.map((row, idx) => {

                    return (
                        <tr key={idx}>
                            <td>{row.fname}</td>
                            <td>{row.lname}</td>
                            <td>{row.username}</td>
                            <td>{row.pfno}</td>
                            <td>{row.department}</td>

                            <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                    />
                  </span>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
export default Table;