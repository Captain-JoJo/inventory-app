/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInventoryApp = /* GraphQL */ `
  mutation CreateInventoryApp(
    $input: CreateInventoryAppInput!
    $condition: ModelInventoryAppConditionInput
  ) {
    createInventoryApp(input: $input, condition: $condition) {
      id
      item
      quantity
      reorder
    }
  }
`;
export const updateInventoryApp = /* GraphQL */ `
  mutation UpdateInventoryApp(
    $input: UpdateInventoryAppInput!
    $condition: ModelInventoryAppConditionInput
  ) {
    updateInventoryApp(input: $input, condition: $condition) {
      id
      item
      quantity
      reorder
    }
  }
`;
export const deleteInventoryApp = /* GraphQL */ `
  mutation DeleteInventoryApp(
    $input: DeleteInventoryAppInput!
    $condition: ModelInventoryAppConditionInput
  ) {
    deleteInventoryApp(input: $input, condition: $condition) {
      id
      item
      quantity
      reorder
    }
  }
`;
