import React from "react";
import styled from "styled-components";

import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.a`
  color: #363636;
  &:hover {
    color: #209cee;
  }
`;

export default ({ src }) => {
  return src ? (
    <Wrapper href={src} target="_blank" rel="noopener noreferrer">
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item menu-label">
            <p>Project Files</p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <FontAwesomeIcon icon={faFolder} />
          </div>
        </div>
      </div>
    </Wrapper>
  ) : null;
};
