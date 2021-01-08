/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpeedrunType, SpeedrunStatus } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: UserAndSubmittedRunsById
// ====================================================

export interface UserAndSubmittedRunsById_userById_submittedRuns_verifier {
  __typename: "User";
  name: string;
  id: string;
}

export interface UserAndSubmittedRunsById_userById_submittedRuns {
  __typename: "Speedrun";
  id: string;
  time: number;
  date: any;
  type: SpeedrunType;
  description: string | null;
  url: string;
  status: SpeedrunStatus;
  verifier: UserAndSubmittedRunsById_userById_submittedRuns_verifier | null;
}

export interface UserAndSubmittedRunsById_userById {
  __typename: "User";
  name: string;
  description: string | null;
  avatar: string | null;
  submittedRuns: (UserAndSubmittedRunsById_userById_submittedRuns | null)[];
}

export interface UserAndSubmittedRunsById {
  userById: UserAndSubmittedRunsById_userById | null;
}

export interface UserAndSubmittedRunsByIdVariables {
  submittedRunsByIdId: string;
}
