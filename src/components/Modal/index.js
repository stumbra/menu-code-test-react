import React from "react";
import PropTypes from "prop-types";
import {
   StyledModal,
   Container,
   InnerContainer,
   Header,
   Subtitle,
   ActionButton,
   SubactionButton,
} from "./styles";

StyledModal.setAppElement("#root");

const defaultStyles = {
   overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
   content: { minWidth: "71vw", minHeight: "50vh", margin: "0 auto" },
};

const Modal = ({
   modalTitle,
   modalSubtitle,
   isVisible,
   children,
   actionButtonText,
   subactionButtonText,
   onActionPress,
   onSubactionPress,
   actionButtonDisabled,
}) => {
   return (
      <StyledModal isOpen={isVisible} style={defaultStyles}>
         <Container>
            <InnerContainer>
               <Header>{modalTitle}</Header>
               <Subtitle>{modalSubtitle}</Subtitle>
               {children}
               <div>
                  <ActionButton
                     type="submit"
                     onClick={onActionPress}
                     disabled={actionButtonDisabled}
                  >
                     {actionButtonText}
                  </ActionButton>
               </div>
               <SubactionButton type="button" onClick={onSubactionPress}>
                  {subactionButtonText}
               </SubactionButton>
            </InnerContainer>
         </Container>
      </StyledModal>
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
   children: null,
   actionButtonText: "Default Action Button Text",
   subactionButtonText: "Default Subaction Button Text",
   onActionPress: () => {},
   onSubactionPress: () => {},
   actionButtonDisabled: false,
};

export default Modal;
