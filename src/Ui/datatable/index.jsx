export function FilterField({ value, onChange = () => {} }) {
  return (
    <input
      className="border rounded-sm p-2 w-full"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default function DataTable({
  data = [],
  columns = {},
  renderRow = (row) => row,
  renderFilters = () => {},
}) {
  const columnKeys = Object.keys(columns);
  return (
    <>
      <table className={"table table-auto w-full"}>
        <thead>
          <tr>
            {columnKeys.map((column) => (
              <th className="font-bold border-b">{columns[column].label}</th>
            ))}
          </tr>
          {
            <tr>
              {columnKeys.map((column) => (
                <th>{renderFilters(column)}</th>
              ))}
            </tr>
          }
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columnKeys.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
