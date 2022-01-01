import Searchbar from '@components/inputs/searchbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
interface Props {
  id?: string
  targetPath?: string
}
export default function SearchbarBlock({ targetPath = '/search' }: Props) {
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
  return <Searchbar onSearch={handleKeyUp} />
}
