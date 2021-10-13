import styled from 'styled-components'
import { memo } from 'react'

const YouTubeVideo = ({ id, ...props }) => {
  return (
    <VideoContainer>
      <Video
        width="400"
        height="250"
        src={`https://youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      />
    </VideoContainer>
  )
}

export default memo(YouTubeVideo)

const VideoContainer = styled.div`
  padding: 2rem 0;
`

const Video = styled.iframe`
  width: 100%;
  @supports (aspect-ratio: 16 / 9) {
    height: auto;
    aspect-ratio: 16 / 9;
  }
  margin: 0 auto;
  display: block;
  border: 2px solid #21212b;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
`
