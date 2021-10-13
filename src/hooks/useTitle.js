import { useEffect } from 'react'

const useDocumentTitle = (siteName = 'example', title = '') => {
  useEffect(() => {
    if (title) {
      document.title = siteName + ` - ${title}`
    } else {
      document.title = siteName
    }
  }, [title, siteName])
  return
}

export default useDocumentTitle
