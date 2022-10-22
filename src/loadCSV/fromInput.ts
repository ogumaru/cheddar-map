import { loadCSV, isCSVFile } from "./handleCSV";

export const handleSelection = (
  event: React.ChangeEvent<HTMLInputElement>
): void => {
  event.stopPropagation();
  event.preventDefault();

  const target = event.target;
  if (!target.files) throw new Error("file");

  Array.from(target.files)
    .filter((item) => isCSVFile(item))
    .map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.loaded === event.total) {
          loadCSV(file);
        }
      });
    });
};
