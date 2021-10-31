import React, { useState } from "react";
import "./Table.css";
import numeral from "numeral";
import { TextField } from "@material-ui/core";

function Table({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="table">
      <TextField
        id="standard-basic"
        label="Search Country"
        variant="standard"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {/* <input
        type="text"
        placeholder="Search Country"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      /> */}

      {countries
        .filter((country) => {
          if (searchTerm === "") {
            return country;
          } else if (
            country.country.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country) => (
          <tr>
            <td>{country.country}</td>
            <td>
              <strong>{numeral(country.cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
    </div>
  );
}

export default Table;
