import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassCard from '../components/ClassCard';

export default function HomePage() {
  const [classList, setClassList] = useState([]);
  // category 상태는 현재 코드에서 사용하지 않으므로 유지 혹은 삭제 가능

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('data.json 불러오기 실패');
        }
        return res.json();
      })
      .then((data) => {
        // 데이터가 정상적으로 배열인지 확인 후 저장
        setClassList(data);
      })
      .catch((err) => console.error('데이터 로드 에러:', err));
  }, []);

  return (
    <section className="sec-home-page">
      {/* 추천 클래스 */}
      <article className="best-class">
        <div className="inner">
          <h2>지금 인기 있는 클래스</h2>
          <div className="card-list">
            {/* classData 대신 상태값인 classList를 사용합니다 */}
            {classList.length > 0 ? (
              classList.slice(0, 3).map((item) => (
                <ClassCard key={item.id} item={item} />
              ))
            ) : (
              <p>클래스를 불러오는 중입니다...</p>
            )}
          </div>
        </div>
      </article>

      {/* 카테고리 (이 부분은 하드코딩된 이미지/링크이므로 그대로 유지) */}
      <article className="sec-category">
        <div className="inner">
          <h2>나에게 맞는 클래스를 찾아보세요</h2>
          <div className="category">
            <Link to="/classes">
              <img src="/images/oneday01.jpg" alt="드로잉" />
              <span>드로잉</span>
            </Link>
            <Link to="/classes">
              <img src="/images/oneday10.jpg" alt="요리" />
              <span>요리</span>
            </Link>
            <Link to="/classes">
              <img src="/images/oneday05.jpg" alt="디자인" />
              <span>디자인</span>
            </Link>
            <Link to="/classes">
              <img src="/images/oneday08.jpg" alt="사진" />
              <span>사진</span>
            </Link>
          </div>
          <div className="btn-area">
            <Link to="/classes" className="btn-view">
              전체 클래스 보기
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}