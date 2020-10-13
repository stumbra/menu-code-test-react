import styled from "styled-components";

const breakpoint = "316px";

const Wrapper = styled.div`
   border: 1px solid ${({ theme }) => theme.colors.dark};
   opacity: ${({ selected }) => (selected ? 1 : 0.7)};
   border-radius: 1.5%;
   transition: transform 0.3s ease;
   &:not(:last-child) {
      margin-right: 20px;
   }
   &:hover {
      transform: translateY(-5px);
   }
`;

const Poster = styled.img`
   height: 150px;
   width: 230px;
   object-fit: cover;
   @media (max-width: ${breakpoint}) {
      width: 200px;
      height: 130px;
   }
`;

const Metadata = styled.div`
   padding: 10px 0px 10px 5px;
`;

const Title = styled.h4`
   @media (max-width: ${breakpoint}) {
      width: 180px;
   }
`;

const Rating = styled.div`
   display: flex;
   margin: 3px 0;
`;

const Count = styled.p`
   margin-left: 10px;
   font-size: 12px;
`;

const TypePriceLocation = styled.p`
   font-size: 12px;
`;

export { Wrapper, Poster, Metadata, Title, Rating, Count, TypePriceLocation };
