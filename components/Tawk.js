import { useEffect } from 'react'

export default function Tawk() {
  useEffect(() => {
    var Tawk_API = Tawk_API
    {
    }
    ;(function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_ID}/default`
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode.insertBefore(s1, s0)
    })()
  }, []) // empty array here means that we only want to run this effect once

  return null
}
