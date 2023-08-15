const LoadSpinner = () => {
  return (
    <div role='status'>
      <div className='spinner-circle spinner-primary spinner-lg'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default LoadSpinner
