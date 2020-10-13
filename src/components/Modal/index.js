import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import * as S from "./styles";

S.StyledModal.setAppElement("#root");

const defaultStyles = {
   overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
};

const Modal = ({
   modalTitle,
   modalSubtitle,
   isVisible,
   children,
   onActionPress,
   actionButtonText,
   subactionButtonText,
   onSubactionPress,
   actionButtonDisabled,
}) => {
   return (
      <S.StyledModal isOpen={isVisible} style={defaultStyles}>
         <S.Wrapper>
            <S.InnerWrapper>
               <S.Header>{modalTitle}</S.Header>
               <S.Subtitle>{modalSubtitle}</S.Subtitle>
               {children}

               <Button
                  type="submit"
                  onClick={(e) => onActionPress(e)}
                  disabled={actionButtonDisabled}
                  title={actionButtonText}
               />
               <S.SubactionButton type="button" onClick={onSubactionPress}>
                  {subactionButtonText}
               </S.SubactionButton>
            </S.InnerWrapper>
         </S.Wrapper>
      </S.StyledModal>
   );
};

Modal.propTypes = {
   modalTitle: PropTypes.string,
   modalSubtitle: PropTypes.string,
   isVisible: PropTypes.bool,
   children: PropTypes.node,
   actionButtonText: PropTypes.string,
   subactionButtonText: PropTypes.string,
   onActionPress: PropTypes.func,
   onSubactionPress: PropTypes.func,
   actionButtonDisabled: PropTypes.bool,
};

Modal.defaultProps = {
   modalTitle: "Default Modal Title",
   modalSubtitle: "Default Modal Subtitle",
   isVisible: false,
   children: undefined,
   actionButtonText: "Default Action Button Text",
   subactionButtonText: "Default Subaction Button Text",
   onActionPress: () => {},
   onSubactionPress: () => {},
   actionButtonDisabled: false,
};

export default Modal;
