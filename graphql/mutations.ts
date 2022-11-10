import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation MyMutation ($post_id: ID!, $username: String!, $text: String!){
    insertComment(post_id: $post_id, text: $text, username: $username) {
      created_at
      id
      text
      username
      post_id
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!,$upvote: Boolean!,$username: String!) {
    insertVote(post_id: $post_id, upvote: $upvote, username: $username) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`;


export const ADD_POST = gql`
  mutation MyMutation(
    $image: String!
    $body: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
  ) {
    insertPost(
      image: $image
      body: $body
      subreddit_id: $subreddit_id
      title: $title
      username: $username
    ) {
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
