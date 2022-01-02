import { Avatar, Card, ListItemAvatar } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { category } from '../types'
import Link from 'next/link'
import { getCategoryPath } from '@lib/search'
interface Props {
  data: category[]
}
export default function CategoryList({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(Number(index))
  }

  return (
    <List component="nav" aria-label="categories" disablePadding>
      {/* <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader> */}
      {data.map((category) => (
        <Link
          key={category.id}
          href={{ pathname: getCategoryPath(category.path) }}
          passHref
        >
          <Card
            sx={{
              marginBottom: 2,
              height: 90,
              boxShadow: 'none',
              bgcolor: '#f9f9f9',
              '&:hover': { boxShadow: 'none', bgcolor: '#f1f1f1' },
            }}
          >
            <ListItemButton
              selected={selectedIndex.toString() === category.id}
              onClick={(event) => handleListItemClick(event, category.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={category.name}
                  src={category.image?.url}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
              </ListItemAvatar>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </Card>
        </Link>
      ))}
    </List>
  )
}
