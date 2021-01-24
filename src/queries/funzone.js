import { gql } from '@apollo/client';

const FUNZONE = gql`
  query getFunzoneVideos($after: String, $before: String) {
    allVideos(limit: 5, after: $after, before: $before, tags: "Funzone") {
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

export default FUNZONE;
