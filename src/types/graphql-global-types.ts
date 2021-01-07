/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SpeedrunType {
  ANY_PERCENT = "ANY_PERCENT",
  DEATH_PERCENT = "DEATH_PERCENT",
  FULL_GAME_GLITCHLESS = "FULL_GAME_GLITCHLESS",
  HUNDRED_PERCENT = "HUNDRED_PERCENT",
  NO_BOAT = "NO_BOAT",
  NO_KETAMINE = "NO_KETAMINE",
  VM_PERCENT = "VM_PERCENT",
}

export interface SubmitInput {
  date: any;
  time: number;
  description?: string | null;
  url: string;
  type: SpeedrunType;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
