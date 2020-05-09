/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInventoryApp = /* GraphQL */ `
  subscription OnCreateInventoryApp(
    $id: ID
    $item: String
    $quantity: String
    $reorder: String
  ) {
    onCreateInventoryApp(
      id: $id
      item: $item
      quantity: $quantity
      reorder: $reorder
    ) {
      id
      item
      quantity
      reorder
    }
  }
`;
export const onDeleteInventoryApp = /* GraphQL */ `
  subscription OnDeleteInventoryApp(
    $id: ID
    $item: String
    $quantity: String
    $reorder: String
  ) {
    onDeleteInventoryApp(
      id: $id
      item: $item
      quantity: $quantity
      reorder: $reorder
    ) {
      id
      item
      quantity
      reorder
    }
  }
`;
export const onUpdateInventoryApp = /* GraphQL */ `
  subscription OnUpdateInventoryApp(
    $id: ID
    $item: String
    $quantity: String
    $reorder: String
  ) {
    onUpdateInventoryApp(
      id: $id
      item: $item
      quantity: $quantity
      reorder: $reorder
    ) {
      id
      item
      quantity
      reorder
    }
  }
`;
