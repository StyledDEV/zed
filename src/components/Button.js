import styled from 'styled-components'
import { memo } from 'react'

const Button = styled.button.attrs(({ children, ...props }) => ({
  type: 'button',
  children,
  ...props,
}))`
  border: none;
  border-radius: 3px;
  outline: 2px solid transparent;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  background-color: #071f26;
  display: inline-block;
  cursor: pointer;
`

export default memo(Button)
