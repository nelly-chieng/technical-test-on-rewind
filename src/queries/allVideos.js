import { gql } from '@apollo/client';

const ALL_VIDEOS = gql`
  query getAllVideos($after: String, $before: String) {
    allVideos(limit: 5, after: $after, before: $before) {
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

export default ALL_VIDEOS;
