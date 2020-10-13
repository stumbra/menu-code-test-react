import React from "react";
import PropTypes from "prop-types";

import IosStar from "react-ionicons/lib/IosStar";
import IosHalfStar from "react-ionicons/lib/IosStarHalf";
import IosStarOutline from "react-ionicons/lib/IosStarOutline";

import * as S from "./styles";

const Grade = ({ scale, value, size, color }) => {
   const multipliedValueByScale = value * (scale / 5);
   return (
      <S.Wrapper>
         {new Array(Math.floor(multipliedValueByScale)).fill().map((_, index) => {
            return <IosStar key={index} fontSize={size} color={color} />;
         })}
         {new Array(Math.round(multipliedValueByScale - Math.floor(multipliedValueByScale)))
            .fill()
            .map((_, index) => {
               return <IosHalfStar key={index} fontSize={size} color={color} />;
            })}
         {new Array(Math.round(scale - Math.round(multipliedValueByScale)))
            .fill()
            .map((_, index) => {
               return <IosStarOutline key={index} fontSize={size} color={color} />;
            })}
      </S.Wrapper>
   );
};

Grade.propTypes = {
   scale: PropTypes.number,
   value: PropTypes.number,
   size: PropTypes.string,
   color: PropTypes.string,
};

Grade.defaultProps = {
   scale: 5,
   value: 0,
   size: "15px",
   color: "black",
};

export default Grade;
