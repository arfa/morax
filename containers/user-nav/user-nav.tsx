import DropdownMenu from 'containers/user-nav/dropdown-menu'
import useCustomer from '@framework/customer/use-customer'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function UserNav() {
  const { data: customer } = useCustomer()
  const userIcon = customer ? (
    <DropdownMenu
      firstName={customer.firstName}
      lastName={customer.lastName}
      email={customer.email}
    />
  ) : (
    <Link href="/login" passHref>
      <Button size="small" variant="outlined" sx={{ height: '32px' }}>
        Login
      </Button>
    </Link>
  )
  return <>{process.env.COMMERCE_CUSTOMERAUTH_ENABLED && userIcon}</>
}
