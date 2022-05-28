import Folder from "./Folder";
import { render, screen, fireEvent } from "@testing-library/react";

const data = { name: "App.jsx" };

describe("Folder filling", () => {
  beforeEach(() => {
    render(<Folder data={data} />);
  });
  test("name in document", () => {
    const fileName = screen.getByText(data.name);
    expect(fileName).toBeInTheDocument();
  });

  test("button delete in document", () => {
    const deleteButton = screen.getByTestId("onDelete");
    expect(deleteButton).toBeInTheDocument();
  });

  test("button delete in document", () => {
    const deleteButton = screen.getByTestId("toggle-button");
    expect(deleteButton).toBeInTheDocument();
  });
});

describe("Folder button", () => {
  test("button click", () => {
    const handleClick = jest.fn();
    render(<Folder data={data} onDelete={handleClick} />);
    const deleteButton = screen.getByTestId("onDelete");
    expect(handleClick).not.toBeCalled();
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("toggle button click", async () => {
    render(<Folder data={data} />);
    const toggleButton = screen.getByTestId("toggle-button");
    let folderIcon;
    folderIcon = await screen.findByTestId("folder-close");
    expect(folderIcon).toBeInTheDocument();
    fireEvent.click(toggleButton);
    folderIcon = await screen.findByTestId("folder-open");
    expect(folderIcon).toBeInTheDocument();
    fireEvent.click(toggleButton);
    folderIcon = await screen.findByTestId("folder-close");
    expect(folderIcon).toBeInTheDocument();
  });
});
