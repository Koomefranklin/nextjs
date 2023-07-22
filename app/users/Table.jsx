import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
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
