import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { useCombos, useTitle } from '../hooks/'
import { Fragment, useEffect, useCallback, useContext } from 'react'
import { SiteContext } from '../context'

// Components
import Button from '../components/Button'
import YouTubeVideo from '../components/YouTubeVideo'

// Pages
import NotFound from './NotFound'

const ComboSingle = () => {
  const { comboId } = useParams()
  const { combos, setCombos, combosData } = useCombos()
  const { siteName } = useContext(SiteContext)

  useEffect(() => {
    setCombos(combosData)
  }, [setCombos, combosData])

  const existCombo = useCallback(
    (id) => {
      const combo = combos.find((x) => x.id === Number(id))
      if (combo) return combo
      return
    },
    [combos]
  )

  useTitle(siteName, existCombo(comboId) && `Combo ${comboId}`)

  if (!existCombo(comboId)) {
    return <NotFound />
  }

  const { id, name, difficulty, videoId, steps } = existCombo(comboId)

  return (
    <SingleComboContainer>
      <SingleComboLayout>
        <SingleComboLink to="/">
          <Button>Back home</Button>
        </SingleComboLink>
        {existCombo(id - 1) && (
          <SingleComboLink to={`/combo/${id - 1}`}>
            <Button>Previous</Button>
          </SingleComboLink>
        )}
        {existCombo(id + 1) && (
          <SingleComboLink to={`/combo/${id + 1}`}>
            <Button>Next</Button>
          </SingleComboLink>
        )}
        {videoId && <YouTubeVideo id={videoId} />}
        <SingleComboName>
          {name} {id}
        </SingleComboName>
        <SingleComboDifficulty>Difficulty: {difficulty}</SingleComboDifficulty>
      </SingleComboLayout>

      {steps && (
        <SingleComboSteps>
          {steps.map(({ skillName, skillImage }, index) => (
            <Fragment key={index}>
              <SingleComboStep noBorder={skillName === 'AA' && true}>
                <SingleComboStepImg
                  noBorder={skillName === 'AA' && true}
                  src={`../img/skills/${skillImage}`}
                  alt={skillName}
                  title={`Spell: ${skillName}`}
                />
              </SingleComboStep>
              {index + 1 < steps.length && (
                <SingleComboStep isArrow noBorder>
                  <SingleComboStepImg
                    isArrow
                    noBorder
                    src="../img/icons/arrow-right.png"
                  />
                </SingleComboStep>
              )}
            </Fragment>
          ))}
        </SingleComboSteps>
      )}
    </SingleComboContainer>
  )
}

export default ComboSingle

const SingleComboContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SingleComboLayout = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 0;
`

const SingleComboLink = styled(Link)`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`

const SingleComboName = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
`

const SingleComboDifficulty = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
`

const SingleComboSteps = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

const SingleComboStep = styled.div`
  border: ${(props) =>
    props.noBorder ? '' : '1px solid rgba(255, 225, 0, 0.5)'};
  align-self: ${(props) => (props.isArrow ? 'center' : '')};
  margin: 0 1rem 1rem 0;

  &:last-of-type {
    margin: 0;
  }
`

const SingleComboStepImg = styled.img.attrs((props) => ({
  draggable: props.draggable || true,
  ...props,
}))`
  display: block;
  width: auto;
  height: ${(props) => (props.isArrow ? '25px' : '40px')};
  object-fit: ${(props) => (props.noBorder ? 'contain' : 'cover')};
`
