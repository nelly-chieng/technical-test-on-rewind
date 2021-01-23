import { gql } from '@apollo/client';

const VIDEO = gql`
  query video($id: ID!) {
    video(id: $id) {
      id
      url
      name
      Tags {
        id
        name
      }
      poster
    }
  }
`;

export default VIDEO;
