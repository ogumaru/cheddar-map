export const Menu = () => {
  return (
    <>
      <div id="menu">
        <label htmlFor="fileselect-csv">Choose CSV</label>
        <input
          id="fileselect-csv"
          type="file"
          multiple={true}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <button id="dl-graphics">Download</button>
        <label htmlFor="set-attributes">Set Attribute</label>
        <input id="set-attributes" type="checkbox" />
      </div>
    </>
  );
};
