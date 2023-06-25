import { useEffect, useState } from "react";
import { getWorkout } from "./asyncStorage/actionStorage";
import { WorkoutType } from "../model/workout/WorkoutType";

export const useCurrentWorkout = () => {
  const [workout, setWorkout] = useState<WorkoutType>();

  useEffect(() => {
    const loadWorkout = async () => {
        setWorkout(await getWorkout());
    };
    loadWorkout();
  }, []);

  return workout;
}