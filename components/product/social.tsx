import { Stack } from '@mui/material'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'

interface Props {
  url: string
  title?: string
  image: string
}
export default function Social({
  url,
  title,
  image = 'https://via.placeholder.com/500',
}: Props) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ display: 'flex', flexWrap: 'wrap', lineHeight: 1 }}
    >
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={20} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={20} round />
      </TwitterShareButton>
      <PinterestShareButton url={url} media={image}>
        <PinterestIcon size={20} round />
      </PinterestShareButton>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={20} round />
      </EmailShareButton>
    </Stack>
  )
}
