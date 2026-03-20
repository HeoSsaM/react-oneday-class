import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function DetailPage() {
  const { id } = useParams();
  const [selectedClass, setSelectedClass] = useState(null); // 찾은 데이터 저장
  const [activeTab, setActiveTab] = useState('소개');
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) throw new Error('데이터를 불러올 수 없습니다.');
        return res.json();
      })
      .then((data) => {
        // id가 문자열로 들어오므로 Number로 변환하여 비교
        const found = data.find((item) => item.id === Number(id));
        setSelectedClass(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]); // id가 바뀔 때마다 다시 실행

  // 1. 로딩 중일 때
  if (loading) {
    return <div className="page"><h2>로딩 중...</h2></div>;
  }

  // 2. 데이터가 없을 때
  if (!selectedClass) {
    return (
      <div className="page">
        <h2>해당 클래스 정보를 찾을 수 없습니다.</h2>
        <Link to="/classes" className="main-btn">목록으로 가기</Link>
      </div>
    );
  }

  // 3. 데이터가 있을 때 출력
  return (
    <section className='sec-detail-page'>
      <div className="inner">
        <h2>{selectedClass.title}</h2>
        <div className="contents">
          <img
            src={`${import.meta.env.BASE_URL}${selectedClass.image}`}
            alt={selectedClass.title}
            className="detail-img"
          />
          <div className="cont-area">
            <p className='info'><strong>카테고리:</strong> {selectedClass.category}</p>
            <p className='info'><strong>강사:</strong> {selectedClass.teacher}</p>
            <p className='info'><strong>가격:</strong> {selectedClass.price}</p>
            
            <div className="tab-menu">
              {['소개', '준비물', '후기'].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'tab-btn active' : 'tab-btn'}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === '소개' && <p>{selectedClass.intro}</p>}
              {activeTab === '준비물' && <p>{selectedClass.prepare}</p>}
              {activeTab === '후기' && <p>{selectedClass.review}</p>}
            </div>            
          </div>
        </div>
        <div className="btn-area">
          <Link to="/classes" className="btn-list">목록으로 돌아가기</Link>
        </div>
      </div>
    </section>
  );
}