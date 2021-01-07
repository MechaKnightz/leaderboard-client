import { gql } from "@apollo/client";

const GET_SPEEDRUNS_OF_TYPE = gql`
query GetSpeedrunsOfType($speedrunsOfTypeType: SpeedrunType!) {
  speedrunsOfType(type: $speedrunsOfTypeType) {
    submitter {
      name
      id
    }
    url
    description
    date
    time
    id
  }
}
`;
export default GET_SPEEDRUNS_OF_TYPE;