import { Avatar, Card, ListItemAvatar, ListSubheader } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'

export const categories = [
  {
    id: 0,
    name: 'Woman',
    img: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwoman.jpg&w=128&q=75',
  },
  {
    id: 1,
    name: 'Man',
    img: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fman.jpg&w=128&q=75',
  },
  {
    id: 2,
    name: 'Watch',
    img: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwatch.jpg&w=128&q=75',
  },
  {
    id: 3,
    name: 'Kids',
    img: 'https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fkid.jpg&w=128&q=75',
  },
]
export default function CategoryList() {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="categories">
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
        {categories.map((category) => (
          <Card
            key={category.id}
            sx={{ marginY: 1, bgcolor: 'background.paper' }}
          >
            <ListItemButton
              selected={selectedIndex === category.id}
              onClick={(event) => handleListItemClick(event, category.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={category.name}
                  src={category.img}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
              </ListItemAvatar>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </Card>
        ))}
      </List>
    </Box>
  )
}
