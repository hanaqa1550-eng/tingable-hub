'use client';

import { supabase } from '@/lib/supabase';
import Link from 'next/link'; // 📍 링크 컴포넌트 추가

export default function AirconServicePage() {
  
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
      alert('✅ 접수 완료! 관리자가 확인 후 연락드릴게요! ✨');
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div style={{ 
      padding: '20px 0', 
      width: '95%',          // 📍 리스트 화면과 동일하게 확장
      maxWidth: '600px',     // 📍 PC에서도 시원하게 600px로 확대
      margin: '0 auto', 
      fontFamily: 'sans-serif' 
    }}>
      
      {/* 📍 헤더 섹션: 홈 버튼 추가 (관리자 페이지와 동일한 UI) */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px', 
        borderBottom: '3px solid #ff69b4', 
        padding: '10px 10px 20px 10px' 
      }}>
        <h1 style={{ color: '#ff69b4', fontSize: '26px', margin: 0 }}>📞 서비스 접수</h1>
        <Link href="/" style={{ 
          textDecoration: 'none', 
          color: '#666', 
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '8px 15px',
          background: '#eee',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>🏠 홈</Link>
      </header>
      
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* 1. 고객 정보 */}
        <section style={{ 
          background: 'white', 
          padding: '25px', 
          borderRadius: '20px', 
          border: '1px solid #eee',
          boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '18px', color: '#333', marginBottom: '20px' }}>👤 고객 정보</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <input name="user_name" type="text" placeholder="고객명" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', boxSizing: 'border-box', fontSize: '16px' }} required />
            <input name="phone" type="tel" placeholder="연락처" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', boxSizing: 'border-box', fontSize: '16px' }} required />
          </div>
          <input name="address" type="text" placeholder="방문 주소" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', boxSizing: 'border-box', fontSize: '16px' }} required />
        </section>

        {/* 2. 서비스 상세 */}
        <section style={{ 
          background: '#fff6fb', 
          padding: '25px', 
          borderRadius: '20px', 
          border: '1px solid #ffd1e8'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '18px', color: '#ff69b4', marginBottom: '20px' }}>🔧 서비스 상세</h3>
          <select name="service_type" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', marginBottom: '20px', backgroundColor: 'white', fontSize: '16px' }}>
            <option value="">서비스 유형 선택</option>
            <option value="고장 수리">고장 수리 (AS)</option>
            <option value="신규/이전 설치">신규/이전 설치</option>
            <option value="분해 세척">분해 세척</option>
            <option value="정기 점검">정기 점검</option>
          </select>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '8px' }}>희망 방문일</label>
              <input name="reserve_date" type="date" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', boxSizing: 'border-box', fontSize: '16px' }} />
            </div>
            <div>
              <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '8px' }}>희망 시간대</label>
              <select name="reserve_time" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '12px', width: '100%', backgroundColor: 'white', fontSize: '16px' }}>
                <option value="오전">오전 (09~12시)</option>
                <option value="오후 1">오후 1 (13~15시)</option>
                <option value="오후 2">오후 2 (15~18시)</option>
              </select>
            </div>
          </div>
        </section>

        {/* 3. 메모 */}
        <section>
          <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '15px' }}>📝 상담 메모</h3>
          <textarea 
            name="memo"
            placeholder="고장 증상을 자세히 적어주시면 큰 도움이 됩니다!" 
            style={{ 
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '12px', 
              width: '100%', 
              height: '120px', 
              boxSizing: 'border-box',
              resize: 'none',
              fontSize: '16px'
            }} 
          />
        </section>

        <button type="submit" style={{ 
          padding: '20px', 
          backgroundColor: '#ff69b4', 
          color: 'white', 
          border: 'none', 
          borderRadius: '20px', 
          fontSize: '20px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(255, 105, 180, 0.3)',
          marginBottom: '50px'
        }}>
          📝 예약 접수 완료하기
        </button>
      </form>
    </div>
  );
}