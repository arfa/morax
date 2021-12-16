import type { LineItem } from '@commerce/types/cart'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'
import usePrice from '@framework/product/use-price'
import { Avatar, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { IoMdSquare } from 'react-icons/io'
import Quantity from './Quantity'

type ItemOption = {
  name: string
  nameId: number
  value: string
  valueId: number
}

const CartItem = ({
  item,
  variant = 'default',
  currencyCode,
  ...rest
}: {
  variant?: 'default' | 'display'
  item: LineItem
  currencyCode: string
}) => {
  const [removing, setRemoving] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem({ item })

  const { price } = usePrice({
    amount: item.variant.price * item.quantity,
    baseAmount: item.variant.listPrice * item.quantity,
    currencyCode,
  })

  const handleChange = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(value))
    await updateItem({ quantity: Number(value) })
  }

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n
    setQuantity(val)
    await updateItem({ quantity: val })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }
  }

  // TODO: Add a type for this
  const options = (item as any).options

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
    // TODO: currently not including quantity in deps is intended, but we should
    // do this differently as it could break easily
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.quantity])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid rgb(243, 245, 249)',
        }}
      >
        <Link href={`/product/${item.path}`}>
          <a>
            <Avatar
              alt={item.variant.image!.altText}
              src={item.variant.image!.url}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1.25rem',
                lineHeight: 1,
                borderRadius: '20%',
                overflow: 'hidden',
                userSelect: 'none',
                marginLeft: '16px',
                marginRight: '16px',
                height: '76px',
                width: '76px',
              }}
              variant="square"
            />
          </a>
        </Link>
        <Box>
          <Link href={`/product/${item.path}`} passHref>
            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '1.5',
                textTransform: 'none',
                whiteSpace: 'normal',
              }}
            >
              {item.name}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            sx={{
              fontSize: '10px',
              lineHeight: '1.5',
              color: 'rgb(125, 135, 156)',
              textTransform: 'none',
              whiteSpace: 'normal',
            }}
          >
            {options && options.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  bgcolor: 'background.paper',
                  paddingBottom: '10px',
                }}
              >
                {price}
                {options.map((option: ItemOption, i: number) => (
                  <div key={`${item.id}-${option.name}`}>
                    {option.name}
                    {' : '}
                    {option.name === 'Color' ? (
                      <IconContext.Provider
                        value={{
                          color: option.value,
                        }}
                      >
                        <IoMdSquare size={8} />
                      </IconContext.Provider>
                    ) : (
                      <span>{option.value}</span>
                    )}
                    {i === options.length - 1 ? '' : <span />}
                  </div>
                ))}
              </Box>
            )}
            {variant === 'default' && (
              <Quantity
                value={quantity}
                handleRemove={handleRemove}
                increase={() => increaseQuantity(1)}
                decrease={() => increaseQuantity(-1)}
              />
            )}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CartItem
