import React, { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import "./tagview.css";
const Tagview = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setTags(resp))
      .catch((error) => console.log(error));
  }, []);
  const columns = [
    { accessor: "id", label: "userId" },
    { accessor: "parentOrg", label: "ParentOrg" },
    { accessor: "parentRepo", label: "ParentRepo" },
    { accessor: "parentTag", label: "ParentTag" },
    { accessor: "childOrg", label: "ChildOrg" },
    { accessor: "childRepo", label: "ChildRepo" },
    { accessor: "date", label: "Date Time" },
  ];

  return (
    <div className="tagview">
      <Table rows={tags} columns={columns} />
    </div>
  );
};

export default Tagview;
