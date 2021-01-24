import { gql } from '@apollo/client';

const TESTIMONIALES = gql`
  query getTestimonialesVideos($after: String) {
    allVideos(
      limit: 5
      after: $after
      tagIds: "cbe8429e-77f4-4fe0-b7b6-f869c7890c5e"
    ) {
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
      cursor {
        after
      }
    }
  }
`;

export default TESTIMONIALES;
