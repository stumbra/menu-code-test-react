import React, { useState, useMemo } from "react";
import { Modal, Card, Button, Input, List, Menu, Controller } from "../../components";
import { ToastContainer, toast } from "react-toastify";

import * as S from "./styles";

import restaurants from "../../assets/menu-data.json";

const Places = () => {
   const [isVisible, setVisibility] = useState(true);
   const [confirmDisabled, setConfirmDisabled] = useState(true);

   const [guests, setGuests] = useState([{ name: "" }]);
   const [inputs, setInputs] = useState([{ name: "" }]);

   const [currentRestaurant, setCurrentRestaurant] = useState(-1);
   const [currentGuest, setCurrentGuest] = useState(0);

   const handleChangeInput = (index, event) => {
      const values = [...inputs];
      const input = { ...values[index], name: event.target.value };
      values[index] = input;
      setInputs(values);
      if (!(values[index]?.name === "")) setConfirmDisabled(false);
      else setConfirmDisabled(true);
   };

   const handleSubmit = (event) => {
      setGuests([...inputs]);
      setVisibility(false);
      event.preventDefault();
   };

   const handleBrowsePress = () => {
      setInputs([...guests]);
      setVisibility(false);
   };

   const handleAddNewGuest = () => {
      setConfirmDisabled(true);
      setInputs([...inputs, { name: "" }]);
   };

   const handleRemoveGuest = (index) => {
      const values = [...inputs];
      values.splice(index, 1);
      if (values[index - 1]?.name === "") setConfirmDisabled(true);
      else setConfirmDisabled(false);
      setInputs(values);
   };

   const lastAndNotOnlyInput = (index) => {
      return inputs.length === index + 1 && inputs.length > 1;
   };

   const lastInput = (index) => {
      return inputs.length === index + 1;
   };

   const bill = useMemo(() => {
      let count = 0;
      let i = 0;
      const { length } = guests;
      while (i < length) {
         if (guests[i]?.starter) count += guests[i]?.starter.price;
         if (guests[i]?.main) count += guests[i]?.main.price;
         if (guests[i]?.dessert) count += guests[i]?.dessert.price;
         i += 1;
      }
      return count;
   }, [guests]);

   const handleRemoveMeal = (values, course, index) => {
      const valueWithoutCourse = { ...values[currentGuest], [course]: undefined };
      values[currentGuest] = valueWithoutCourse;
      restaurants[currentRestaurant].menu[`${course}s`][index].amount =
         restaurants[currentRestaurant].menu[`${course}s`][index].amount + 1;
      setGuests(values);
   };

   const handleAddMeal = (values, course, meal, index) => {
      if (meal.amount > 0) {
         const valueWithCourse = {
            ...values[currentGuest],
            [course]: meal,
         };
         if (
            valueWithCourse?.starter?.name === "Prawn cocktail" &&
            valueWithCourse?.main?.name === "Salmon fillet"
         ) {
            toast.error(
               "Pierre the snobby waiter will not let you have prawn cocktail and salmon fillet in the same meal 👨‍🍳"
            );
         } else {
            values[currentGuest] = valueWithCourse;
            restaurants[currentRestaurant].menu[`${course}s`][index].amount =
               restaurants[currentRestaurant].menu[`${course}s`][index].amount - 1;
            setGuests(values);
         }
      } else toast.error(`There are no more ${meal.name.toLowerCase()}s left 😔`);
   };

   const checkCombination = () => {
      const guest = guests[currentGuest];
      let courseCount = 0;
      if (guest?.starter) courseCount += 1;
      if (guest?.main) courseCount += 1;
      if (guest?.dessert) courseCount += 1;
      if ((guest?.starter && guest?.dessert && guest.main === undefined) || courseCount <= 1) {
         toast.error(
            `This course combination is invalid. Each person must have at least two courses, one of which must be a main 🍽️`
         );
         return false;
      }
      return true;
   };

   const handleOnCardPress = (course, meal, index) => {
      const values = [...guests];
      switch (course) {
         case "starters":
            if (values[currentGuest]?.starter?.id === meal.id)
               handleRemoveMeal(values, course.slice(0, -1), index);
            else handleAddMeal(values, course.slice(0, -1), meal, index);
            break;
         case "mains":
            if (values[currentGuest]?.main?.id === meal.id)
               handleRemoveMeal(values, course.slice(0, -1), index);
            else handleAddMeal(values, course.slice(0, -1), meal, index);
            break;
         case "desserts":
            if (values[currentGuest]?.dessert?.id === meal.id)
               handleRemoveMeal(values, course.slice(0, -1), index);
            else handleAddMeal(values, course.slice(0, -1), meal, index);
            break;
         default:
            break;
      }
   };

   const noGuests = guests[0].name === "";

   return (
      <>
         <S.Wrapper>
            <S.EditSection>
               <Button title="Edit Guest List" onClick={() => setVisibility(true)} />
               {noGuests && <S.Error>Please add guests in order to make a reservation!</S.Error>}
            </S.EditSection>
            <List
               title="Popular restaurants"
               children={restaurants.map((restaurant, index) => {
                  return (
                     <Card
                        key={restaurant.id}
                        title={restaurant.title}
                        backdropUrl={restaurant.backdropUrl}
                        reviewCount={restaurant.reviewCount}
                        cuisineType={restaurant.type}
                        location={restaurant.location}
                        rating={restaurant.rating}
                        onCardPress={() => setCurrentRestaurant(index)}
                        selected={index === currentRestaurant || currentRestaurant === -1}
                        cardType="restaurant"
                     />
                  );
               })}
            />
            {currentRestaurant > -1 && (
               <>
                  <S.RestaurantTitle>{restaurants[currentRestaurant]?.title}</S.RestaurantTitle>
                  {!noGuests && (
                     <S.CourseForGuest>{`Now choosing courses for ${guests[currentGuest]?.name}`}</S.CourseForGuest>
                  )}

                  <S.Price showBill={bill}>{`Diner price - ${new Intl.NumberFormat("en-US", {
                     style: "currency",
                     currency: "EUR",
                  }).format(bill)}`}</S.Price>

                  <Menu
                     menu={restaurants[currentRestaurant]?.menu}
                     title={restaurants[currentRestaurant]?.title}
                     onMealPress={(course, meal, index) =>
                        !noGuests ? handleOnCardPress(course, meal, index) : setVisibility(true)
                     }
                     selectedCourses={{
                        starter: guests[currentGuest].starter,
                        main: guests[currentGuest].main,
                        dessert: guests[currentGuest].dessert,
                     }}
                  />
                  {!noGuests && (
                     <Controller
                        onPrevButtonPress={() => {
                           const isValid = checkCombination();
                           if (isValid) setCurrentGuest((prevValue) => prevValue - 1);
                        }}
                        onConfirmButtonPress={() => {
                           if (checkCombination()) {
                              toast.success("You reserved your diner ❤️");
                              setTimeout(() => {
                                 window.location.reload(false);
                              }, 5000);
                           }
                        }}
                        onNextButtonPress={() => {
                           const isValid = checkCombination();
                           if (isValid) setCurrentGuest((prevValue) => prevValue + 1);
                        }}
                        disabled={[
                           guests[currentGuest - 1] === undefined,
                           currentGuest + 1 !== guests.length,
                           guests[currentGuest + 1] === undefined,
                        ]}
                     />
                  )}
               </>
            )}
         </S.Wrapper>
         <Modal
            isVisible={isVisible}
            modalTitle="Welcome to OpenTable"
            modalSubtitle="In order to reserve a table for a delicious dine today, please name the guests
                     that will be dining 🍕"
            actionButtonText="Confirm"
            subactionButtonText="Browse restaurants"
            onActionPress={handleSubmit}
            onSubactionPress={handleBrowsePress}
            actionButtonDisabled={confirmDisabled}
            children={inputs.map((input, index) => (
               <div key={index}>
                  <S.Form>
                     <Input
                        required
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(event) => {
                           handleChangeInput(index, event);
                        }}
                        label="Guest name"
                     />
                  </S.Form>
                  <S.Main lastAndNotOnlyInput={lastAndNotOnlyInput(index)}>
                     <S.ButtonWrapper lastAndNotOnlyInput={lastAndNotOnlyInput(index)}>
                        <Button
                           title={lastInput(index) ? "+" : "-"}
                           shape="rounded"
                           underline={lastInput(index) ? "Add" : "Remove"}
                           type="button"
                           onClick={
                              lastInput(index) ? handleAddNewGuest : () => handleRemoveGuest(index)
                           }
                        />
                     </S.ButtonWrapper>
                     {lastAndNotOnlyInput(index) && (
                        <Button
                           title="-"
                           shape="rounded"
                           underline="Remove"
                           type="button"
                           onClick={() => handleRemoveGuest(index)}
                        />
                     )}
                  </S.Main>
               </div>
            ))}
         />
         <ToastContainer />
      </>
   );
};

export default Places;
