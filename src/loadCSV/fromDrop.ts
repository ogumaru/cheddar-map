import { loadCSV, isCSVItem } from "./handleCSV";

export const handleDragOver = (event: React.DragEvent<HTMLElement>): void => {
  event.stopPropagation();
  event.preventDefault();
  if (!event.dataTransfer) return;
  event.dataTransfer.dropEffect = "copy";
};

export const handleDrop = (event: React.DragEvent<HTMLElement>): void => {
  event.stopPropagation();
  event.preventDefault();

  if (!event.dataTransfer) return;

  Array.from(event.dataTransfer.items)
    .filter((item) => isCSVItem(item))
    .map((csv) => csv.getAsFile())
    .map((file) => {
      if (!file) throw new Error("Failed to load csv file.");
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        if (event.loaded === event.total) {
          loadCSV(file);
        }
      });
    });
};
