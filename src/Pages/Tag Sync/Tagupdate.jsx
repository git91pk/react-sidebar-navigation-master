import { useEffect, useState } from "react";
import DataTable, { FilterField } from "../../ui/datatable";

async function apiFetch({ url, method, body }) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, {
    ...options,
    ...(method.toLowerCase() === "get" ? {} : { body: JSON.stringify(body) }),
  });

  return await response.json();
}

// marktellez
export default function TagUpdate({}) {
  const [tags, setTags] = useState([]);
  const [filters, setFilters] = useState({
    id: "",
    parentOrg: "",
    parentRepo: "",
  });

  const columns = {
    id: {
      label: "User Id",
      sortable: true,
      filter: (
        <FilterField
          value={filters.id}
          onChange={(id) =>
            setFilters((prev) => ({
              ...prev,
              id,
            }))
          }
        />
      ),
    },
    parentOrg: {
      label: "Parent Org",
      sortable: true,
      filter: (
        <FilterField
          value={filters.parentOrg}
          onChange={(parentOrg) =>
            setFilters((prev) => ({
              ...prev,
              parentOrg,
            }))
          }
        />
      ),
    },
    parentRepo: {
      label: "Parent Repo",
      sortable: true,
      filter: (
        <FilterField
          value={filters.parentRepo}
          onChange={(parentRepo) =>
            setFilters((prev) => ({
              ...prev,
              parentRepo,
            }))
          }
        />
      ),
    },
  };

  useEffect(() => {
    (async () => {
      setTags(require("../../mocks/api.json"));
    })();
  }, []);

  function filter(rows) {
    return rows.filter((row) =>
      Object.entries(filters).every(([key, value]) =>
        row[key]
          .toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      )
    );
  }

  return (
    <div style={{ marginLeft: "auto" }}>
      <h1> Tag Update</h1>

      <DataTable
        columns={columns}
        data={filter(tags)}
        renderFilters={(column) => columns[column].filter}
      />
    </div>
  );
}
