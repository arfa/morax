import { useEffect } from 'react'

interface configType {
  id?: string
}

export default function useTawk(config: configType) {
  if (!config.id) throw new Error('tawk_id is required')
  useEffect(() => {
    var Tawk_API: any = Tawk_API
    {
    }
    ;(function (_config) {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = `https://embed.tawk.to/${_config.id}/default`
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode?.insertBefore(s1, s0)
    })(config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // empty array here means that we only want to run this effect once
}
