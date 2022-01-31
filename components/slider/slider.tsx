import { IconButton, Stack, Typography } from '@mui/material'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { Children, isValidElement, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

interface Props {
  perView?: number
  spacing?: number
  children: React.ReactNode[]
}

export default function ProductSlider({
  perView = 1,
  spacing = 10,
  children,
}: Props) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: { perView, spacing },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div style={{ position: 'relative' }}>
      <div ref={sliderRef} className="keen-slider">
        {Children.map(children, (child: any) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...(child.props as any),
                className: 'keen-slider__slide',
              },
            }
          }
          return child
        })}
      </div>

      {loaded && instanceRef.current && (
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            disabled={currentSlide === 0}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          >
            <HiOutlineChevronLeft />
          </IconButton>
          <Typography variant="body2">
            {currentSlide + 1}/{instanceRef.current.track.details.slides.length}
          </Typography>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          >
            <HiOutlineChevronRight />
          </IconButton>
        </Stack>
      )}
    </div>
  )
}
