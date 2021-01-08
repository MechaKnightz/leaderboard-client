/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpeedrunType } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetVerifiedSpeedrunsOfType
// ====================================================

export interface GetVerifiedSpeedrunsOfType_verifiedSpeedrunsOfType_submitter {
  __typename: "User";
  name: string;
  id: string;
}

export interface GetVerifiedSpeedrunsOfType_verifiedSpeedrunsOfType {
  __typename: "Speedrun";
  submitter: GetVerifiedSpeedrunsOfType_verifiedSpeedrunsOfType_submitter;
  url: string;
  description: string | null;
  date: any;
  time: number;
  id: string;
}

export interface GetVerifiedSpeedrunsOfType {
  verifiedSpeedrunsOfType: (GetVerifiedSpeedrunsOfType_verifiedSpeedrunsOfType | null)[];
}

export interface GetVerifiedSpeedrunsOfTypeVariables {
  speedrunsOfTypeType: SpeedrunType;
}
