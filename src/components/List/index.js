import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const List = ({ title, children }) => {
   return (
      <S.Wrapper>
         <S.Header>{title}</S.Header>
         <S.List id={title}>{children}</S.List>
      </S.Wrapper>
   );
};

List.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node.isRequired,
};

List.defaultProps = {
   title: "Default List title",
};

export default List;
