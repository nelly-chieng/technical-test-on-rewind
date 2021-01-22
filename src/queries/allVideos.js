import { gql } from '@apollo/client';

const ALL_VIDEOS = gql`
  query {
    allVideos(limit: 5) {
      items {
        name
        id
        url
        poster
        Tags {
          name
        }
      }
    }
  }
`;

export default ALL_VIDEOS;
