import { Action } from "redux";
import { RootState } from ".";
import { ContentLoadState } from "../types";

export type LoadState = Record<string, ContentLoadState>;

// Reducer

export default (state: LoadState = {}, action: Action<any>): LoadState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes:
  //   ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;
  switch (status) {
    case "REQUEST":
      return {
        ...state,
        [routineType]: ContentLoadState.loading,
      };
    case "SUCCESS":
      if (action.payload === undefined) {
        return state;
      }

      return {
        ...state,
        [routineType]:
          action.payload.length === 0
            ? ContentLoadState.noData
            : ContentLoadState.hasData,
      };
    case "FAILURE":
      return {
        ...state,
        [routineType]: ContentLoadState.error,
      };
    default:
      return state;
  }
};

// Selectors

export const isLoadingAnyRoutine = (state: RootState) => {
  return Object.values(state.loadState).some(Boolean);
};

// Select whether a given routine is loading
export const isLoadingRoutine = (routineType: string) => (state: RootState) => {
  return state.loadState[routineType] === ContentLoadState.loading;
};

// Select whether any of a given set of routines is loading
export const isLoadingAnyRoutineOf = (routineTypes: string[]) => (
  state: RootState
) => {
  return routineTypes.some(
    (routineType) => state.loadState[routineType] === ContentLoadState.loading
  );
};
