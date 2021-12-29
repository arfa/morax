import DropdownMenu from 'containers/UserNav/DropdownMenu'
import useCustomer from '@framework/customer/use-customer'
import { Button } from '@mui/material'
import Link from 'next/link'

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
      <Button color="inherit">Login</Button>
    </Link>
  )
  return <>{process.env.COMMERCE_CUSTOMERAUTH_ENABLED && userIcon}</>
}
