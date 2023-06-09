import { expect } from "@jest/globals";
import ExerciseCard from "../components/workout/ExerciseCard";

import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import testExerciseReducer from "./testExerciseReducer";
import { Provider } from "react-redux";

// NOTATION : Write tests (One UI component)
// To wait for things like animation to be fully loaded.
jest.useFakeTimers();

// Configure store for testing purpose
const store = configureStore({
  reducer: {
    appReducer: testExerciseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// When using a Data Provider (like redux) in your App, you will need to wrap all your tested component into a test Provider
// You cannot use the exact same provider and store you create in App.tsx file because here you want mocked data into your store

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("<ExerciseCard />", () => {
  test("Assert displayed values", () => {
    const expectedExerciseInfos = store.getState().appReducer.exercise;

    console.log(expectedExerciseInfos);

    render(
      <Wrapper>
        {/* @ts-ignore */}
        <ExerciseCard item={expectedExerciseInfos} />
      </Wrapper>
    );

    // Get displayed text component and assert that its value contains our exercise name
    expect(screen.getByTestId("exercise-name")).toHaveTextContent(
      expectedExerciseInfos.name
    );

    expect(screen.getByTestId("exercise-musclesEngaged")).toHaveTextContent(
      expectedExerciseInfos.musclesEngaged
    );
  });
});
