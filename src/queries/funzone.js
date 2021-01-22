import { gql } from '@apollo/client';

const FUNZONE = gql`
  query {
    allVideos(limit: 5, tagIds: "9b4266c3-78b5-4cc3-85de-d9c894913e4b") {
      items {
        name
        id
        url
        poster
        Tags {
          name
          id
        }
      }
    }
  }
`;

export default FUNZONE;
