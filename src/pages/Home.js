import { useContext } from 'react'
import { SiteContext } from '../context'
import { useCombos, useTitle } from '../hooks/'
import Wrapper from '../components/Wrapper'
import Combos from '../components/Combos'
import Button from '../components/Button'

function Home() {
  const { combos, loadMore, showLoadMore } = useCombos()
  const { siteName } = useContext(SiteContext)
  useTitle(siteName, 'Home')

  return (
    <Wrapper>
      <Combos combos={combos} />
      {showLoadMore && (
        <Button
          style={{ margin: '2rem auto', display: 'block' }}
          onClick={loadMore}
        >
          Cargar más
        </Button>
      )}
    </Wrapper>
  )
}

export default Home
