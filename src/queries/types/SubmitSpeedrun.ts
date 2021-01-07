/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubmitInput, SpeedrunType } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: SubmitSpeedrun
// ====================================================

export interface SubmitSpeedrun_submitSpeedrun_speedrun {
  __typename: "Speedrun";
  id: string;
  time: number;
  url: string;
  description: string | null;
  type: SpeedrunType;
  date: any;
}

export interface SubmitSpeedrun_submitSpeedrun {
  __typename: "SubmitResult";
  speedrun: SubmitSpeedrun_submitSpeedrun_speedrun | null;
  success: boolean;
  message: string;
}

export interface SubmitSpeedrun {
  submitSpeedrun: SubmitSpeedrun_submitSpeedrun | null;
}

export interface SubmitSpeedrunVariables {
  submitSpeedrunData?: SubmitInput | null;
}
