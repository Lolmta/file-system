import { removeEntityByPath, restoreEntityByPath } from "./remove-restore";

describe("remove func test", () => {
  let content;

  beforeEach(() => {
    content = [
      {
        name: "src",
        path: "/src",
        type: "folder",
        content: [
          {
            name: "App.js",
            path: "/src/App.js",
            type: "file",
            content: null,
          },
        ],
      },
    ];
  });

  test("should return the content without removed value", () => {
    const path = ["src", "App.js"];
    const newContent = removeEntityByPath(path, content);
    const target = newContent[0].content;
    expect(target).toEqual([]);
  });

  test("should remove all content", () => {
    const path = "/src";
    const newContent = removeEntityByPath(path, content);
    expect(newContent.content).toBeUndefined();
  });
});

describe("restore func test", () => {
  test("should push last deleted item", () => {
    const content = [
      {
        name: "src",
        path: "/src",
        type: "folder",
        content: [],
      },
    ];

    const lastDeleted = {
      name: "App.js",
      path: "/src/App.js",
      type: "file",
      content: null,
    };

    const path = ["src", "App.js"];
    let newContent = restoreEntityByPath(path, content, lastDeleted);
    expect(...newContent[0].content).toEqual(lastDeleted);
  });
});
