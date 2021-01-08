import { gql } from "@apollo/client";

const GET_VERIFIED_SPEEDRUNS_OF_TYPE = gql`
query GetVerifiedSpeedrunsOfType($speedrunsOfTypeType: SpeedrunType!) {
  verifiedSpeedrunsOfType(type: $speedrunsOfTypeType) {
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
export default GET_VERIFIED_SPEEDRUNS_OF_TYPE;