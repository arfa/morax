import axios from 'axios'

export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
export async function useReviews(method: Method, pid: string, newReview?: any) {
  switch (method) {
    case Method.GET:
      const { data } = await axios(`/api/reviews`, { params: { pid } })
      if (!data) return 'Loading...'
      return data
    case Method.POST:
      await axios.post(
        '/api/reviews',
        {
          ...newReview,
        },
        { params: { pid } }
      )
      return newReview
    default:
      break
  }
}
