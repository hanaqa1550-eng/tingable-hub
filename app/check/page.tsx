'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface Reservation {
  id: number;
  user_name: string;
  phone: string;
  service_type: string;
  reserve_date: string;
  reserve_time: string;
  status: string;
  memo: string; // 📍 메모 필드 추가
  created_at: string;
}

export default function AdminCheckPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      alert('데이터 로드 실패: ' + error.message);
    } else {
      setReservations(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div style={{ 
      padding: '20px 0', 
      width: '95%',          // 모바일에서 더 넓게 쓰도록 수정
      maxWidth: '600px',     // PC에서도 좀 더 시원하게 보이게 600px로 확대
      margin: '0 auto', 
      fontFamily: 'sans-serif' 
    }}>
      
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px', 
        borderBottom: '3px solid #ff69b4', 
        padding: '10px 10px 20px 10px' 
      }}>
        <h1 style={{ color: '#ff69b4', fontSize: '26px', margin: 0 }}>📋 예약 관리</h1>
        <Link href="/" style={{ 
          textDecoration: 'none', 
          color: '#666', 
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '8px 15px',
          background: '#eee',
          borderRadius: '10px'
        }}>🏠 홈</Link>
      </header>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#999', fontSize: '18px', marginTop: '50px' }}>
          데이터를 불러오는 중... ✨
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {reservations.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', padding: '100px 0', fontSize: '18px' }}>
              접수된 예약이 없습니다! 🐶
            </p>
          ) : (
            reservations.map((item) => (
              <div key={item.id} style={{
                background: 'white',
                padding: '25px',       // 여백 대폭 확대
                borderRadius: '20px',
                border: '1px solid #eee',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                position: 'relative'
              }}>
                {/* 상태 배지 - 더 크게! */}
                <span style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  padding: '8px 15px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backgroundColor: item.status === '대기중' ? '#fff3cd' : '#d1e7dd',
                  color: item.status === '대기중' ? '#856404' : '#0f5132'
                }}>
                  {item.status}
                </span>

                {/* 이름 및 연락처 - 강조! */}
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ fontSize: '22px', color: '#333' }}>{item.user_name}</strong> 
                  <div style={{ color: '#ff69b4', fontSize: '16px', fontWeight: 'bold', marginTop: '5px' }}>
                    📱 {item.phone}
                  </div>
                </div>

                {/* 서비스 정보 - 가독성 업! */}
                <div style={{ 
                  fontSize: '17px', 
                  color: '#444', 
                  lineHeight: '2', 
                  borderTop: '1px dashed #eee', 
                  paddingTop: '15px' 
                }}>
                  <div>📍 <strong>유형:</strong> {item.service_type}</div>
                  <div>📅 <strong>일시:</strong> {item.reserve_date} <span style={{color:'#666'}}>({item.reserve_time})</span></div>
                </div>

                {/* 메모장 스타일 개선 */}
                <div style={{ 
                  marginTop: '15px', 
                  padding: '15px', 
                  background: '#f8f9fa', 
                  borderRadius: '12px', 
                  fontSize: '15px',
                  color: '#555',
                  borderLeft: '5px solid #ff69b4'
                }}>
                  📝 <strong>상담 메모:</strong><br/>
                  <div style={{ marginTop: '5px', whiteSpace: 'pre-wrap' }}>
                    {item.memo || '메모가 없습니다.'}
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#ccc', marginTop: '15px', textAlign: 'right' }}>
                  등록: {new Date(item.created_at).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <button 
        onClick={fetchReservations}
        style={{
          width: '100%',
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#333',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '50px'
        }}
      >
        🔄 데이터 새로고침
      </button>
    </div>
  );
}