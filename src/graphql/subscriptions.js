/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMarket = /* GraphQL */ `
  subscription OnCreateMarket {
    onCreateMarket {
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
export const onUpdateMarket = /* GraphQL */ `
  subscription OnUpdateMarket {
    onUpdateMarket {
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
export const onDeleteMarket = /* GraphQL */ `
  subscription OnDeleteMarket {
    onDeleteMarket {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
    onDeleteProduct(owner: $owner) {
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
