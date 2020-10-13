import React from "react";

import List from "../List";
import Card from "../Card";

const Menu = ({ menu, onMealPress, selectedCourses }) => {
   const courses = Object.entries(menu);

   const starters = courses[0];
   const mains = courses[1];
   const desserts = courses[2];

   return (
      <section>
         <List
            key={starters[0]}
            title={starters[0].charAt(0).toUpperCase() + starters[0].slice(1)}
            children={starters[1].map((meal, index) => {
               const { id, name, backdropUrl, price } = meal;
               return (
                  <Card
                     key={id}
                     title={name}
                     backdropUrl={backdropUrl}
                     cardType="meal"
                     price={price}
                     onCardPress={() => onMealPress(starters[0], meal, index)}
                     selected={selectedCourses?.starter?.id === id || !selectedCourses?.starter}
                  />
               );
            })}
         />
         <List
            key={mains[0]}
            title={mains[0].charAt(0).toUpperCase() + mains[0].slice(1)}
            children={mains[1].map((meal, index) => {
               const { id, name, backdropUrl, price } = meal;
               return (
                  <Card
                     key={id}
                     title={name}
                     backdropUrl={backdropUrl}
                     cardType="meal"
                     price={price}
                     onCardPress={() => onMealPress(mains[0], meal, index)}
                     selected={selectedCourses?.main?.id === id || !selectedCourses?.main}
                  />
               );
            })}
         />
         <List
            key={desserts[0]}
            title={desserts[0].charAt(0).toUpperCase() + desserts[0].slice(1)}
            children={desserts[1].map((meal, index) => {
               const { id, name, backdropUrl, price } = meal;
               return (
                  <Card
                     key={id}
                     title={name}
                     backdropUrl={backdropUrl}
                     cardType="meal"
                     price={price}
                     onCardPress={() => onMealPress(desserts[0], meal, index)}
                     selected={selectedCourses?.dessert?.id === id || !selectedCourses?.dessert}
                  />
               );
            })}
         />
      </section>
   );
};

export default Menu;
