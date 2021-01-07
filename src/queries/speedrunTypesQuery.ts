import { gql } from "@apollo/client";

const GET_SPEEDRUN_TYPES = gql`
  query GetSpeedrunTypes {
    __type(name: "SpeedrunType") {
    enumValues {
      name
    }
  }
}
`;
export default GET_SPEEDRUN_TYPES;