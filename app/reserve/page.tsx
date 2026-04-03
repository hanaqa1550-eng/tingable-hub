'use client';

import { supabase } from '@/lib/supabase';

export default function AirconServicePage() {
  
  // 📍 [기능] 접수 버튼 클릭 시 실행
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
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
      alert('쏘리~ 에러가 났어요: ' + error.message);
    } else {
      alert('✅ 접수 완료! 모바일에서도 실시간 확인 가능합니다! ✨');
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    /* 📍 반응형 컨테이너: 모바일 너비 90%, PC 최대 500px */
    <div style={{ 
      padding: '20px 0', 
      width: '90%', 
      maxWidth: '500px', 
      margin: '0 auto', 
      fontFamily: 'sans-serif' 
    }}>
      
      {/* 헤더 섹션 (핑크 테마) */}
      <header style={{ 
        borderBottom: '3px solid #ff69b4', 
        marginBottom: '30px', 
        paddingBottom: '15px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#ff69b4', fontSize: '22px', margin: '0 0 5px 0' }}>
          📞 CS 출장 서비스 접수
        </h1>
        <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>
          하나의 팅에이블 허브 🐶🐮🦦
        </p>
      </header>
      
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* 1. 고객 정보 (박스형 레이아웃) */}
        <section style={{ 
          background: '#fff', 
          padding: '20px', 
          borderRadius: '15px', 
          border: '1px solid #eee',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '16px', color: '#333', marginBottom: '15px' }}>👤 고객 정보</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <input name="user_name" type="text" placeholder="고객명" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }} required />
            <input name="phone" type="tel" placeholder="연락처" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }} required />
          </div>
          <input name="address" type="text" placeholder="방문 주소" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }} required />
        </section>

        {/* 2. 서비스 상세 */}
        <section style={{ 
          background: '#fff6fb', 
          padding: '20px', 
          borderRadius: '15px', 
          border: '1px solid #ffd1e8'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '16px', color: '#ff69b4', marginBottom: '15px' }}>🔧 서비스 상세</h3>
          <select name="service_type" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', marginBottom: '15px', backgroundColor: 'white' }}>
            <option value="">서비스 유형 선택</option>
            <option value="고장 수리">고장 수리 (AS)</option>
            <option value="신규/이전 설치">신규/이전 설치</option>
            <option value="분해 세척">분해 세척</option>
            <option value="정기 점검">정기 점검</option>
          </select>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '5px' }}>희망 방문일</label>
              <input name="reserve_date" type="date" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '5px' }}>희망 시간대</label>
              <select name="reserve_time" style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', width: '100%', backgroundColor: 'white' }}>
                <option value="오전">오전 (09~12시)</option>
                <option value="오후 1">오후 1 (13~15시)</option>
                <option value="오후 2">오후 2 (15~18시)</option>
              </select>
            </div>
          </div>
        </section>

        {/* 3. 메모 */}
        <section>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>📝 상담 메모</h3>
          <textarea 
            name="memo"
            placeholder="고장 증상을 입력하세요" 
            style={{ 
              padding: '12px', 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              width: '100%', 
              height: '100px', 
              boxSizing: 'border-box',
              resize: 'none'
            }} 
          />
        </section>

        {/* 접수 버튼 */}
        <button type="submit" style={{ 
          padding: '18px', 
          backgroundColor: '#ff69b4', 
          color: 'white', 
          border: 'none', 
          borderRadius: '15px', 
          fontSize: '18px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          boxShadow: '0 5px 15px rgba(255, 105, 180, 0.3)',
          marginBottom: '50px'
        }}>
          📝 예약 접수 완료하기
        </button>
      </form>
    </div>
  );
}