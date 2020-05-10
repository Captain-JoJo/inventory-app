/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInventoryApp = /* GraphQL */ `
  query GetInventoryApp($id: ID!) {
    getInventoryApp(id: $id) {
      id
      item
      quantity
      reorder
    }
  }
`;
export const listInventoryApps = /* GraphQL */ `
  query ListInventoryApps(
    $filter: ModelInventoryAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        item
        quantity
        reorder
      }
      nextToken
    }
  }
`;
