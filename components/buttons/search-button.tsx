import SearchAutocomplete from '@components/inputs/search-autocomplete'
import { IconButton, Paper, useMediaQuery } from '@mui/material'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import { HiSearch } from 'react-icons/hi'
import { useRouter } from 'next/router'

export default function SearchButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const router = useRouter()
  const breakpoint = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  console.log(open)
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <HiSearch size={20} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: breakpoint ? '90%' : '50%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
          }}
        >
          <SearchAutocomplete
            onConfirm={(q) => {
              setOpen(!q)
              console.log(q)
              setTimeout(
                () =>
                  router.push(
                    {
                      pathname: '/search',
                      query: q ? { q } : {},
                    },
                    undefined,
                    { shallow: true }
                  ),
                3000
              )
            }}
          />
        </Paper>
      </Modal>
    </div>
  )
}
