/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarket = /* GraphQL */ `
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
      products {
        items {
          id
          description
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      id
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listMarkets = /* GraphQL */ `
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        products {
          nextToken
        }
        name
        id
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      market {
        products {
          nextToken
        }
        name
        id
        tags
        owner
        createdAt
        updatedAt
      }
      description
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        market {
          name
          id
          tags
          owner
          createdAt
          updatedAt
        }
        description
        file {
          bucket
          region
          key
        }
        price
        shipped
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const searchMarkets = /* GraphQL */ `
  query SearchMarkets(
    $filter: SearchableMarketFilterInput
    $sort: SearchableMarketSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchMarkets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        products {
          nextToken
        }
        name
        id
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;