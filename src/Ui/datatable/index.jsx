export function FilterField({value, onChange=()=>{}}){
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
} 

export default function DataTable({
  data = [],
  columns = {},
  renderRow = (row) => row,
  renderFilters = () => {},
}) {
  const filters = renderFilters();
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
          {filters && <tr>{
            columnsKeys.map(column => (
              <th>{column.filter && }</th>
            ))
          }</tr>}
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
