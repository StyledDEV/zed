import { useState, useCallback } from 'react'
import combosData from '../data/combos'

const useCombos = () => {
  const [combos, setCombos] = useState(combosData.slice(0, 10))
  const [showLoadMore, setShowLoadMore] = useState(true)

  const loadMore = useCallback(() => {
    let amount = combos.length === 40 ? 4 : 10
    if (combos.length >= 40) {
      setShowLoadMore(false)
    }

    setCombos(combosData.slice(0, combos.length + amount))
    return
  }, [combos.length])

  return { combos, setCombos, combosData, loadMore, showLoadMore }
}

export default useCombos
