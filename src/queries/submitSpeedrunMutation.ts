import { gql } from "@apollo/client";

const SUBMIT_SPEEDRUN = gql`
mutation SubmitSpeedrun($submitSpeedrunData: SubmitInput) {
  submitSpeedrun(data: $submitSpeedrunData) {
    speedrun {
      id
      time
      url
      description
      type
      date
    }
    success
    message
  }
}
`;
export default SUBMIT_SPEEDRUN;