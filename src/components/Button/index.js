import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Button = ({ onClick, type, title, disabled, shape, underline }) => {
   const CustomButton = shape === "rounded" ? S.RoundedButton : S.StandartButton;

   return (
      <S.ButtonWrapper>
         <CustomButton type={type} disabled={disabled} onClick={onClick}>
            {title}
         </CustomButton>
         {shape === "rounded" && <S.Underline>{underline}</S.Underline>}
      </S.ButtonWrapper>
   );
};

Button.propTypes = {
   onClick: PropTypes.func,
   title: PropTypes.string,
   disabled: PropTypes.bool,
   type: PropTypes.string,
   shape: PropTypes.string,
   underline: PropTypes.string,
};

Button.defaultProps = {
   onClick: () => {},
   title: "Default Button Text",
   disabled: false,
   type: "button",
   shape: undefined,
   underline: undefined,
};

export default Button;
