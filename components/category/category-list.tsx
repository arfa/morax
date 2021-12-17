import { Avatar, Card, ListItemAvatar, ListSubheader } from '@mui/material'
import Box from '@mui/material/Box'
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
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="categories">
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
        {data.map((category) => (
          <Link
            key={category.id}
            href={{ pathname: getCategoryPath(category.path) }}
            passHref
          >
            <Card sx={{ marginY: 1, bgcolor: 'background.paper' }}>
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
    </Box>
  )
}
