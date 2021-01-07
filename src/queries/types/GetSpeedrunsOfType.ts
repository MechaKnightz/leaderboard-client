/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpeedrunType } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetSpeedrunsOfType
// ====================================================

export interface GetSpeedrunsOfType_speedrunsOfType_submitter {
  __typename: "User";
  name: string;
  id: string;
}

export interface GetSpeedrunsOfType_speedrunsOfType {
  __typename: "Speedrun";
  submitter: GetSpeedrunsOfType_speedrunsOfType_submitter;
  url: string;
  description: string | null;
  date: any;
  time: number;
  id: string;
}

export interface GetSpeedrunsOfType {
  speedrunsOfType: (GetSpeedrunsOfType_speedrunsOfType | null)[];
}

export interface GetSpeedrunsOfTypeVariables {
  speedrunsOfTypeType: SpeedrunType;
}
