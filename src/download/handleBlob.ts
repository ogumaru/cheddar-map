export const downloadAsCSV = (content: string): void => {
  const blob = new Blob([content], { type: "text/csv" });
  const anchor = document.createElement("a");
  anchor.download = "points.csv";
  const blobURL = URL.createObjectURL(blob);
  anchor.href = blobURL;
  anchor.click();
  URL.revokeObjectURL(blobURL);
};
