import { getCategoryPath } from '@lib/search'
import { Avatar, ListItemAvatar, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
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
        loop: true,
      },
      '(min-width: 600px)': {
        // tslint:disable-next-line
        slides: { perView: 3, spacing: 5 },
        loop: true,
      },
      '(min-width: 900px)': {
        // tslint:disable-next-line
        slides: { perView: 7, spacing: 5 },
        vertical: true,
        loop: false,
      },
    },
    // tslint:disable-next-line
    slides: { perView: 1, spacing: 5 },
    loop: true,
  })

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(Number(index))
  }
  return (
    <List
      ref={sliderRef}
      className={'keen-slider'}
      component="nav"
      aria-label="categories"
    >
      {data.map((category: category) => (
        <Link
          key={category.id}
          href={{ pathname: getCategoryPath(category.path) }}
          passHref
        >
          <ListItemButton
            className="keen-slider__slide"
            selected={selectedIndex.toString() === category.id}
            onClick={(event) => handleListItemClick(event, category.id)}
            sx={{
              marginBottom: 2,
              maxHeight: '80px',
              bgcolor: '#f9f9f9',
              borderRadius: 1,
              '&:hover': { bgcolor: '#f1f1f1' },
            }}
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
        </Link>
      ))}
    </List>
  )
}
