import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={344}
    height={84}
    viewBox="0 0 344 84"
    backgroundColor="#f3f3f6"
    foregroundColor="#ecebeb"
  >
    <rect x="6" y="3" rx="100" ry="100" width="72" height="72" />
    <rect x="91" y="19" rx="10" ry="10" width="144" height="16" />
    <rect x="92" y="43" rx="10" ry="10" width="80" height="12" />
  </ContentLoader>
)
