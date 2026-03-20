import { Link } from 'react-router-dom'

function ClassCard({ item }) {
  return (
    <div className="card">
      <figure><img src={item.image} alt={item.title} className="card-img" /></figure>
      <div className="card-content">
        <p className="card-category">{item.category}</p>
        <h3>{item.title}</h3>
        <p className='desc'>{item.shortDesc}</p>
        <p><span>강사 :</span> {item.teacher}</p>
        <p><span>가격 :</span> {item.price}</p>

        <div className="btn-area">
          <Link to={`/classes/${item.id}`} className="btn-detail">
            상세보기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClassCard