import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

import Button from "../Button";

const Controller = ({ onPrevButtonPress, onConfirmButtonPress, onNextButtonPress, disabled }) => {
   return (
      <S.Wrapper>
         <Button
            type="button"
            onClick={onPrevButtonPress}
            title="<"
            shape="rounded"
            disabled={disabled[0]}
         />
         <S.SaveButtonWrapper>
            <Button
               type="button"
               onClick={onConfirmButtonPress}
               title="Confirm"
               disabled={disabled[1]}
            />
         </S.SaveButtonWrapper>
         <Button
            type="button"
            onClick={onNextButtonPress}
            title=">"
            shape="rounded"
            disabled={disabled[2]}
         />
      </S.Wrapper>
   );
};

Controller.propTypes = {
   onPrevButtonPress: PropTypes.func,
   onConfirmButtonPress: PropTypes.func,
   onNextButtonPress: PropTypes.func,
   disabled: PropTypes.arrayOf(PropTypes.bool),
};

Controller.defaultProps = {
   onPrevButtonPress: () => {},
   onConfirmButtonPress: () => {},
   onNextButtonPress: () => {},
   disabled: [false, false, false],
};

export default Controller;
