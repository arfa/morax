import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid, review } = req.body.params
  console.log(pid)
  try {
    await axios
      .post(
        `https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_API_STORE_HASH}/v3/catalog/products/${pid}/reviews`,
        review,
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'x-auth-token': process.env.BIGCOMMERCE_STORE_API_TOKEN || '',
          },
        }
      )
      .then(
        (response) => {
          return res.status(200).json(review)
        },
        (error) => {
          return res.status(400).json(error)
        }
      )
  } catch (e) {}
}
