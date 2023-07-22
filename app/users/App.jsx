"use client"

import { useState } from "react";

import "./App.css";
import Table from "./Table";
import {Modal} from "./Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
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
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
