import { gql } from "graphql-request";



export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
    }
  }
`;
export const GET_TOP_AUTHOR_OF_WEEK = gql`
 query GetTopAuthorOfWeek {
  getTopAuthorOfWeek {
    _id
    username
    avatar
    bio
    followers
  }
}
`;

export const FOOTER_BLOGS = gql`
query GetRandomBlogsFooterBlogs {
  getRandomBlogsFooterBlogs {
    _id
    slug
    title
  }
}
`;



export const GET_TOP_BLOGS_BY_TOP_AUTHOR = gql`
query GetTopBlogsByTopAuthor($username: [String]) {
  getTopBlogsByTopAuthor(username: $username) {
    _id
    author {
      
      _id
      avatar
      username
      bio
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title
  }
}
`;



export const GetRandom = gql`
query GetRandom {
  getRandomBlogsTemp {
    _id
 
    slug
    author {
      _id
      avatar
      username
      
      bio
    }
    createdAt
    timeRequired
   
    subTitle
     
    thumbnail
    title
  }
}

`;



export const BLOG_BY_SLUG = gql`
query blogBySlug($slug: String!) {
  getBlogBySlug(slug: $slug) {
    _id
    title
    timeRequired
    thumbnail
    subTitle
    content
    slug
    author {
      _id
      avatar
      username
      bio
      
    }
    tags {
      _id
      name
    }
    likes
    polls {
      _id
    }
       accordians {
      _id
      blog
      items {
        answer
        question
      }
    }
    isGlobal
    createdAt
    updatedAt
  }
}

`;