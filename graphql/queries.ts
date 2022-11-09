import { gql } from "@apollo/client";

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($id: ID!) {
    getPost(id: $id) {
      body
      created_at
      subreddit_id
      image
      id
      title
      username
      subreddit {
        id
        topic
        created_at
      }
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      voteList {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POST = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      subreddit_id
      image
      id
      title
      username
      subreddit {
        id
        topic
        created_at
      }
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      voteList {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      subreddit_id
      image
      id
      title
      username
      subreddit {
        id
        topic
        created_at
      }
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      voteList {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditByTopic(topic: $topic) {
      created_at
      id
      topic
    }
  }
`;
