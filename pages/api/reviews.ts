import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function reviewsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { pid },
  } = req

  switch (method) {
    case 'GET':
      try {
        const reviews = axios.get(
          `https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_API_STORE_HASH}/v3/catalog/products/${pid}/reviews`,
          {
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              'x-auth-token': process.env.BIGCOMMERCE_STORE_API_TOKEN || '',
            },
          }
        )
        reviews.then((result) => res.json(result.data))
      } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
      }
      break
    case 'POST':
      res.json(req.body)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
