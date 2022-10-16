import { loadCSV, isCSVFile } from "./handleCSV";

const handleSelection = (event: InputEvent): void => {
  event.stopPropagation();
  event.preventDefault();

  const target = event.target as HTMLInputElement;
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

export const registerFileSelection = (inputElement: Element): void => {
  inputElement.addEventListener(
    "change",
    handleSelection as (e: Event) => void
  );
};
