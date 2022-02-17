export const categoryTreeItemFragment = /* GraphQL */ `
  fragment categoryTreeItem on CategoryTreeItem {
    entityId
    image {
      url(width: 300, height: 300)
    }
    name
    path
    description
    productCount
  }
`
