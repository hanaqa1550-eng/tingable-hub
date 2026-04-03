'use client';

import Link from 'next/link';
import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // 위아래로 배치하기 위해 추가
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>

      {/* 📍 [검수] 사라졌던 팅에이블 타이틀 문구 복구! */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', margin: '5px 0' }}>💖 팅에이블 허브 💖</h2>
        <p style={{ fontSize: '18px', color: '#333', margin: '5px 0' }}>
          하나의 코딩 공부 🐶🐮🦦
        </p>
      </div>

      {/* 메인 카드 레이아웃 */}
      <div style={{
        backgroundColor: 'white',
        padding: '50px 40px',
        borderRadius: '30px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '450px',
      }}>
        
        <p style={{
          color: '#ff69b4',
          fontWeight: 'bold',
          fontSize: '18px',
          fontStyle: 'italic',
          marginBottom: '40px',
          marginTop: 0
        }}>
          "오늘도 행복한 하루 되세요!"
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '40px'
        }}>
          
          {/* 예약 접수 버튼 */}
          <Link href="/reserve" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 10px',
              border: '2px solid #f0f0f0',
              borderRadius: '20px',
              cursor: 'pointer',
              height: '100%'
            }}>
              <span style={{ fontSize: '40px', marginBottom: '10px' }}>📝</span>
              <span style={{ color: '#ff69b4', fontWeight: 'bold' }}>예약 접수</span>
            </div>
          </Link>

          {/* 예약 확인 버튼 */}
          <Link href="#" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 10px',
              backgroundColor: '#ff69b4',
              color: 'white',
              borderRadius: '20px',
              cursor: 'pointer',
              height: '100%'
            }}>
              <span style={{ fontSize: '40px', marginBottom: '10px' }}>🔍</span>
              <span style={{ fontWeight: 'bold' }}>예약 확인</span>
            </div>
          </Link>

        </div>

        <p style={{
          color: '#aaa',
          fontSize: '13px',
          lineHeight: '1.5',
          margin: 0
        }}>
          "개발 테스트용 직접 관리하는 1:1 예약 시스템입니다!"
        </p>

      </div>
    </div>
  );
};

export default IndexPage;