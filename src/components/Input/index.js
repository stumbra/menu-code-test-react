import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Input = ({ required, type, name, value, onChange, label }) => {
   return (
      <>
         <S.Wrapper required={required} type={type} name={name} value={value} onChange={onChange} />
         <S.Underline />
         <S.Label>{label}</S.Label>
      </>
   );
};

Input.propTypes = {
   required: PropTypes.bool,
   type: PropTypes.string,
   name: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func,
   label: PropTypes.string,
};

Input.defaultProps = {
   required: false,
   type: "name",
   name: "Default Input name",
   value: undefined,
   onChange: () => {},
   label: "Default Input label",
};

export default Input;
