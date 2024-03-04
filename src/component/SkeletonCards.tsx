const SkeletonCards = () => {
  return (
    <div className='card card-image-cover max-w-4sm mb-8'>
      <div className='aspect-square object_contain skeleton'></div>
      <div className='card-body'>
        <div className='card-header skeleton'></div>
      </div>
      <div className='card-footer px-8 pb-8 gap-2 flex-col items-stretch'>
        <div className='skeleton'></div>
      </div>
    </div>
  )
}

export default SkeletonCards
