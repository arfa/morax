import { Product } from '@commerce/types/product'
import Review from '@components/reviews/review'
import { Divider, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import * as React from 'react'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface ProductDetailsBlockProps {
  product: Product
  reviews: any
}

export default function ProductDetailsBlock({
  product,
  reviews,
}: ProductDetailsBlockProps) {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Paper elevation={0}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Description" {...a11yProps(0)} />
        <Tab label="Reviews" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography
          component="div"
          variant="body2"
          sx={{ fontSize: '0.75rem' }}
          dangerouslySetInnerHTML={{
            __html: product.descriptionHtml || product.description,
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {reviews.data.length > 0 ? (
          reviews.data
            .slice(0)
            .reverse()
            .map((review: any) => (
              <>
                <Review
                  key={review.id}
                  direction={'row'}
                  title={review.name}
                  subtitle={format(
                    new Date(review.date_modified),
                    'd MMMM, HH:mm'
                  )}
                  ratingValue={review.rating}
                  subject={review.title}
                  body={review.text}
                />
                <Divider sx={{ my: 4, backgroundColor: 'divider' }} />
              </>
            ))
        ) : (
          <Typography variant="body1">
            This product has no reviews yet
          </Typography>
        )}
      </TabPanel>
    </Paper>
  )
}
