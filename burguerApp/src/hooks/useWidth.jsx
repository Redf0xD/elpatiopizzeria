import { useState, useSyncExternalStore } from 'react'
const div = document.createElement('div')
div.style.overflowY = 'scroll'
document.body.append(div)
const scrollWidth = div.offsetWidth - div.clientWidth

export const useWidth = () => {
  const [width, setWidth] = useState(() => {
    return window.innerWidth
  })
  const subscribe = callback => {
    window.addEventListener('resize', callback)
    return () => {
      window.removeEventListener('resize', callback)
    }
  }
  const getSnapshot = () => {
    const newWitdh = window.innerWidth - scrollWidth
    width !== newWitdh && setWidth(newWitdh)
  }
  useSyncExternalStore(subscribe, getSnapshot)
  return { width }
}
