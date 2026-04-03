'use client'; // 📍 버튼 클릭 이벤트를 위해 꼭 필요해요!

import { supabase } from '@/lib/supabase'; // 📍 아까 만든 배송 트럭 가져오기

export default function AirconServicePage() {
  
  // 📍 [기능] 접수 버튼을 눌렀을 때 실행될 함수
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지 (QA 필수 체크!)

    // 1. 화면에 입력된 값들을 싹 모으기
    const formData = new FormData(e.currentTarget);
    
    // 2. Supabase 창고로 데이터 던지기!
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        { 
          user_name: formData.get('user_name'), 
          phone: formData.get('phone'), 
          address: formData.get('address'),
          service_type: formData.get('service_type'),
          reserve_date: formData.get('reserve_date'),
          reserve_time: formData.get('reserve_time'),
          memo: formData.get('memo'),
          status: '대기중' 
        }
      ]);

    if (error) {
      alert('오! 에러 났어: ' + error.message); // 쏘리~ 에러가 났네요!
    } else {
      alert('✅ 접수 완료! Supabase Table Editor를 확인해보세요!');
      (e.target as HTMLFormElement).reset(); // 입력창 초기화
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #0070f3', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1 style={{ color: '#0070f3', fontSize: '24px' }}>📞 CS 출장 서비스 접수 데스크</h1>
        <p style={{ color: '#666' }}>상담원용 에어컨 수리/설치 접수 화면</p>
      </header>
      
      {/* 📍 onSubmit에 함수를 연결했어요! */}
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* 고객 기본 정보 */}
        <section style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>👤 고객 기본 정보</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <input name="user_name" type="text" placeholder="고객명" style={{ padding: '12px', border: '1px solid #ddd' }} required />
            <input name="phone" type="tel" placeholder="연락처" style={{ padding: '12px', border: '1px solid #ddd' }} required />
          </div>
          <input name="address" type="text" placeholder="방문 주소" style={{ padding: '12px', border: '1px solid #ddd', width: '95%', marginTop: '10px' }} required />
        </section>

        {/* 서비스 요청 내용 */}
        <section style={{ background: '#f0f7ff', padding: '20px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>🔧 서비스 상세</h3>
          <select name="service_type" style={{ padding: '12px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }}>
            <option value="">서비스 유형 선택</option>
            <option value="고장 수리">고장 수리 (AS)</option>
            <option value="신규/이전 설치">신규/이전 설치</option>
            <option value="분해 세척">분해 세척</option>
            <option value="정기 점검">정기 점검</option>
          </select>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#666' }}>희망 방문일</label>
              <input name="reserve_date" type="date" style={{ padding: '12px', border: '1px solid #ddd', width: '90%' }} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#666' }}>희망 시간대</label>
              <select name="reserve_time" style={{ padding: '12px', border: '1px solid #ddd', width: '100%' }}>
                <option value="오전">오전 (09:00~12:00)</option>
                <option value="오후 1">오후 1 (13:00~15:00)</option>
                <option value="오후 2">오후 2 (15:00~18:00)</option>
              </select>
            </div>
          </div>
        </section>

        {/* 고장 증상 메모 */}
        <section>
          <h3>📝 상담 메모 (고장 증상 등)</h3>
          <textarea 
            name="memo"
            placeholder="증상을 입력하세요" 
            style={{ padding: '12px', border: '1px solid #ddd', width: '95%', height: '100px' }} 
          />
        </section>

        {/* 📍 [디자인] 예쁜 핑크 버튼 스타일입니다! */}
        <button type="submit" style={{ 
          padding: '18px', 
          backgroundColor: '#ff69b4', // HotPink 💖
          color: 'white', 
          border: 'none', 
          borderRadius: '12px', 
          fontSize: '18px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          📝 예약 접수 완료 (DB 저장)
        </button>
      </form>
    </div>
  );
}