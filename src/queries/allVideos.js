import { gql } from '@apollo/client';

// const ALL_VIDEOS = gql`
// query {
//   allVideos(limit: 5) {
//     items {
//       name
//       id
//       url
//       poster
//       Tags {
//         name
//       }
//     }
//   }
// }
// `;

const ALL_VIDEOS = gql`
  query getAllVideos($after: String) {
    allVideos(limit: 5, after: $after) {
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

export default ALL_VIDEOS;
