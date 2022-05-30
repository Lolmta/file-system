import React from "react";

import Folder from "../Folder/Folder";
import File from "../File/File";

import styled from "styled-components";

const Notification = styled.div`
  padding: 10px 20px 0;
  font-size: 18px;
`;

const Tree = ({ data, onDelete }) => {
  if (data.type === "folder") {
    const content = data.content.map((data) => (
      <Tree key={data.path} data={data} onDelete={onDelete} />
    ));
    return (
      <Folder data={data} onDelete={onDelete}>
        {content}
      </Folder>
    );
  }

  return Object.keys(data).length === 0 ? (
    <Notification>Everything has been removed</Notification>
  ) : (
    <File data={data} onDelete={onDelete} />
  );
};

export default Tree;
