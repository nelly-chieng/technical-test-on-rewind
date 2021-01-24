import { gql } from '@apollo/client';

const VIDEO = gql`
  query($id: ID!) {
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
