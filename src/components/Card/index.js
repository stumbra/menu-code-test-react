import React from "react";
import PropTypes from "prop-types";

import Grade from "../Grade";

import theme from "../../theme/theme";

import * as S from "./styles";

const Card = ({
   backdropUrl,
   title,
   reviewCount,
   cuisineType,
   location,
   rating,
   onCardPress,
   selected,
   cardType,
   price,
}) => {
   const priceWithCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
   }).format(price);

   const Content =
      cardType === "restaurant" ? (
         <>
            <S.Rating>
               <Grade scale={5} value={rating} size="15px" color={theme.colors.primary} />
               <S.Count>{`${reviewCount} reviews`}</S.Count>
            </S.Rating>
            <S.TypePriceLocation>{`${cuisineType} • ${location}`}</S.TypePriceLocation>
         </>
      ) : (
         <p>{`Price - ${priceWithCurrency}`}</p>
      );

   return (
      <S.Wrapper onClick={onCardPress} selected={selected}>
         <S.Poster src={backdropUrl} alt={title} />
         <S.Metadata>
            <S.Title>{title}</S.Title>
            {Content}
         </S.Metadata>
      </S.Wrapper>
   );
};

Card.propTypes = {
   backdropUrl: PropTypes.string,
   title: PropTypes.string,
   reviewCount: PropTypes.number,
   cuisineType: PropTypes.string,
   location: PropTypes.string,
   rating: PropTypes.number,
   onCardPress: PropTypes.func,
   selected: PropTypes.bool,
   cardType: PropTypes.string,
   price: PropTypes.number,
};

Card.defaultProps = {
   backdropUrl: "https://bit.ly/30ZKrPj",
   title: "Default Card name",
   reviewCount: 0,
   cuisineType: undefined,
   location: undefined,
   rating: 0,
   onCardPress: () => {},
   selected: undefined,
   cardType: undefined,
   price: 0,
};

export default Card;
