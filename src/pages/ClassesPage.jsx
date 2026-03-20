import { useState } from 'react'
import classData from '../../public/data'
import ClassCard from '../components/ClassCard'
import '../css/Classes.css'

function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const categories = ['전체', '미술', '요리', '디자인', '사진']

  const filteredData =
    selectedCategory === '전체'
      ? classData
      : classData.filter((item) => item.category === selectedCategory)

  return (
    <section className="sec-class-page">
      <div className="inner">
        <h2>클래스 목록</h2>

        <div className="tab-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="card-list">
          {filteredData.map((item) => (
            <ClassCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>

  )
}

export default ClassesPage