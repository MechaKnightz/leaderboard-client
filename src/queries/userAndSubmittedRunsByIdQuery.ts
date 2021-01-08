import { gql } from "@apollo/client";

const USER_AND_SUBMITTED_RUNS_BY_ID = gql`
query UserAndSubmittedRunsById($submittedRunsByIdId: ID!) {
  userById(id: $submittedRunsByIdId) {
    name
    description
    avatar
    submittedRuns {
      id
      time
      date
      type
      description
      url
      status
      verifier {
        name
        id
      }
    }
  }
}
`;
export default USER_AND_SUBMITTED_RUNS_BY_ID;