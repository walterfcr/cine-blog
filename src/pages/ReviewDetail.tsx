import { useParams } from 'react-router-dom'

function ReviewDetail() {
  const { reviewId } = useParams()

  return (
    <div>
      <h1 className="text-3xl font-bold">Review Detail</h1>

      <p className="mt-4 text-text-secondary">Review ID: {reviewId}</p>
    </div>
  )
}

export default ReviewDetail
