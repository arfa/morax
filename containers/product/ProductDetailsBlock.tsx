import { Product } from '@commerce/types/product'
import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
}

export default function ProductDetailsBlock({
  product,
}: ProductDetailsBlockProps) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Paper
      sx={{
        // padding: '40px',
        margin: '15px',
        boxShadow: 'none',
        // boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Comments" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '0.75rem' }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml || product.description,
              }}
            />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Paper>
  )
}
