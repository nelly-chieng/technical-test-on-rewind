import { gql } from '@apollo/client';

const TESTIMONIALES = gql`
  query getTestimonialesVideos($after: String, $before: String) {
    allVideos(limit: 5, after: $after, before: $before, tags: "Testimoniales") {
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
        before
      }
    }
  }
`;

export default TESTIMONIALES;
