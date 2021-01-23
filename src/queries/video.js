import { gql } from '@apollo/client';

const VIDEO = gql`
  query {
    video(id: "9cb4e81d-9853-41ed-9223-1bea32ee16bf") {
      url
      name
      poster
      Tags {
        name
      }
    }
  }
`;

export default VIDEO;
