import { Divider, IconButton, InputAdornment, InputBase } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiSearch } from 'react-icons/hi'
interface Props {
  id?: string
  targetPath?: string
}
export default function Searchbar({
  id = 'search',
  targetPath = '/search',
}: Props) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(targetPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: targetPath,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }
  return (
    <>
      <InputBase
        id={id}
        sx={{ ml: 1 }}
        placeholder="Search for products..."
        inputProps={{ 'aria-label': 'Search for products..' }}
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {}}
              onMouseDown={() => {}}
            >
              <HiSearch size={20} />
            </IconButton>
          </InputAdornment>
        }
      />

      <Divider sx={{ height: 28, marginX: 2 }} orientation="vertical" />
    </>
  )
}
