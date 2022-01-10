import { getCategoryPath } from '@lib/search'
import { Avatar, Card, ListItemAvatar, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import * as React from 'react'
import { category } from '../types'
interface Props {
  data: category[]
}
export default function CategoryList({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        // tslint:disable-next-line
        slides: { perView: 2, spacing: 5 },
      },
      '(min-width: 1000px)': {
        // tslint:disable-next-line
        slides: { perView: 3, spacing: 10 },
      },
    },
    // tslint:disable-next-line
    slides: { perView: 1 },
  })

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(Number(index))
  }
  const downBreakpoint = useMediaQuery((theme: any) =>
    theme.breakpoints.down('md')
  )
  return downBreakpoint ? (
    <List
      ref={sliderRef}
      className={'keen-slider'}
      component="nav"
      aria-label="categories"
      sx={{ display: 'flex', flexDirection: 'row' }}
    >
      {data.map((category: category) => (
        <Link
          key={category.id}
          href={{ pathname: getCategoryPath(category.path) }}
          passHref
        >
          <Card
            className="keen-slider__slide"
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
              sx={{ transform: 'none' }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={category.name}
                  src={category.image?.url}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="body2" noWrap>
                  {category.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </Card>
        </Link>
      ))}
    </List>
  ) : (
    <List component="nav" aria-label="categories">
      {data.map((category: category) => (
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
              sx={{ transform: 'none' }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={category.name}
                  src={category.image?.url}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="body2" noWrap>
                  {category.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </Card>
        </Link>
      ))}
    </List>
  )
}
