import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditByTopic(topic: $topic) {
      created_at
      id
      topic
    }
  }
`;
