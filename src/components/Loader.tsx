'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setGone(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loader${gone ? ' gone' : ''}`}>
      <div className="loader-text">S.</div>
    </div>
  )
}
