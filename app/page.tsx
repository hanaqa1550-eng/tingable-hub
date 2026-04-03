'use client';

import Link from 'next/link';
import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'sans-serif',
      padding: '20px 0' // 위아래 여백만 살짝
    }}>

      {/* 상단 타이틀 섹션 */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        width: '90%', // 모바일 대응
        maxWidth: '500px' // PC 대응
      }}>
        <h2 style={{ fontSize: '24px', margin: '5px 0', color: '#333' }}>💖 팅에이블 허브 💖</h2>
        <p style={{ fontSize: '18px', color: '#666', margin: '5px 0' }}>
          하나의 코딩 공부 🐶🐮🦦
        </p>
      </div>

      {/* 메인 카드 레이아웃 (반응형 적용) */}
      <div style={{
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '30px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        /* 📍 핵심: 너비 최적화 */
        width: '85%',              // 모바일에서는 화면의 85%
        maxWidth: '400px',         // PC에서는 400px로 딱 고정
        boxSizing: 'border-box'
      }}>
        
        <p style={{
          color: '#ff69b4',
          fontWeight: 'bold',
          fontSize: '16px',
          fontStyle: 'italic',
          marginBottom: '35px',
          marginTop: 0
        }}>
          "오늘도 행복한 하루 되세요!"
        </p>

        {/* 버튼 그리드 (모바일에서도 2열 유지) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginBottom: '35px'
        }}>
          
          {/* 예약 접수 버튼 */}
          <Link href="/reserve" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '25px 10px',
              border: '2px solid #fce4ec',
              borderRadius: '20px',
              cursor: 'pointer',
              height: '100%',
              transition: 'all 0.2s'
            }}>
              <span style={{ fontSize: '32px', marginBottom: '10px' }}>📝</span>
              <span style={{ color: '#ff69b4', fontWeight: 'bold', fontSize: '14px' }}>예약 접수</span>
            </div>
          </Link>

          {/* 예약 확인 버튼 */}
          <Link href="#" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '25px 10px',
              backgroundColor: '#ff69b4',
              color: 'white',
              borderRadius: '20px',
              cursor: 'pointer',
              height: '100%',
              boxShadow: '0 4px 10px rgba(255, 105, 180, 0.2)'
            }}>
              <span style={{ fontSize: '32px', marginBottom: '10px' }}>🔍</span>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>예약 확인</span>
            </div>
          </Link>

        </div>

        <p style={{
          color: '#aaa',
          fontSize: '12px',
          lineHeight: '1.5',
          margin: 0
        }}>
          "개발 테스트용 직접 관리하는<br/>1:1 예약 시스템입니다!"
        </p>

      </div>
    </div>
  );
};

export default IndexPage;