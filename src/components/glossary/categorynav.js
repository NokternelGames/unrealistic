import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Toggle = styled.a`
  margin-bottom: 1rem;

  color: #363636;
  &:hover {
    color: #209cee;
  }
`;

const List = styled.ul``;

const Term = styled.li`
  font-size: calc(10px + 0.2rem);

  margin-top: 2px;
  margin-bottom: 2px;

  & a {
    color: #363636;
    padding: 3px;
  }

  & a:hover {
    text-decoration: none;
    color: hsl(204, 86%, 53%) !important;
  }
`;

export default ({ type, category }) => {
  const [expanded, setExpanded] = useState(true);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    true && (
      <Wrapper>
        <Toggle
          className="level is-mobile"
          onClick={() => toggleExpansion()}
          onKeyPress={e => {
            if (e.key === "Return") toggleExpansion();
          }}
          role="button"
          tabIndex="0"
        >
          <div className="level-left">
            <p className="menu-label">{type}</p>
          </div>
          <div className="level-right">
            <FontAwesomeIcon icon={expanded ? faMinus : faPlus} />
          </div>
        </Toggle>
        <List>
          {expanded &&
          category.nodes.map(({keyFriendly, slug}) => {
            return (
              <Term key={keyFriendly}>
                <Link to={`/glossary/${slug}`}>{keyFriendly}</Link>
              </Term>
            );
          })}
        </List>
      </Wrapper>
    )
  );
};
