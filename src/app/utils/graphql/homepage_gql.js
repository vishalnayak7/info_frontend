import { gql } from "graphql-request";


export const HP_SPONSERD_BLOGS = gql`
 query HomePageSponserd_Blogs {
  HomePageSponserd_Blogs {
    _id
    slug
    title
    thumbnail
    timeRequired
    createdAt
    authorDetails {
      _id
      avatar
      bio
      followers
      username
    }
  }
}
`;


export const HP_SLIDER = gql`
query HomePageSlider {
  HomePageSliderLeftSide {
    _id
    authorDetails {
      _id
      username
    }
    createdAt
    subTitle
    slug
    thumbnail
    title
  }
HomePageMostPopularBlogs {
    _id
    authorDetails {
      _id
      username
    }
     subTitle
    createdAt
    slug
    thumbnail
    title
  }
}
`;

 

export const HP_BAR_ONE_LATEST_BLOGS = gql`
query HomePageLatestBlogsBar {
  HomePageLatestBlogsBar {
    _id
    authorDetails {
      _id
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title
  }
}
`;
export const HP_BAR_TWO_VIEW_BAR = gql`
query HomePageHighestFiveBlogs_View_Bar {
  HomePageHighestFiveBlogs_View_Bar {
    _id
    authorDetails {
      _id
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title  
  }
}
`;


export const HP_BAR_THREE_LIKES_BAR = gql`
query HomePageHighestFiveBlogs_Likes_Bar {
  HomePageHighestFiveBlogs_Likes_Bar {
  _id
    authorDetails {
      _id
      avatar
      bio
      followers
      username
    }
    createdAt
    slug
    thumbnail
    timeRequired
    title    
  }
}
`;