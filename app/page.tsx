export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        💕 팅에이블 허브 💕
      </h1>
      <p className="text-lg text-gray-700">
        하나의 코딩 공부. 🐶🐮🦦
      </p>
      <div className="mt-8 p-4 bg-white rounded-2xl shadow-xl">
        <p className="font-semibold text-center italic text-pink-400">
          "오늘도 행복한 하루 되세요!"
        </p>

{/* 🎫 예약 시스템 버튼 영역 */}
      <div className="mt-10 grid grid-cols-2 gap-4 w-full max-w-sm">
        {/* 예약 접수 버튼 */}
        <button className="flex flex-col items-center justify-center p-6 bg-white border-2 border-[#FF6B9D] rounded-2xl shadow-md hover:bg-[#FFF0F3] transition-all transform hover:-translate-y-1 active:scale-95 group">
          <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">📝</span>
          <span className="font-bold text-[#FF6B9D]">예약 접수</span>
        </button>

        {/* 예약 확인 버튼 */}
        <button className="flex flex-col items-center justify-center p-6 bg-[#FF6B9D] text-white border-2 border-[#FF6B9D] rounded-2xl shadow-lg hover:bg-[#FF4D88] transition-all transform hover:-translate-y-1 active:scale-95 group">
          <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🔍</span>
          <span className="font-bold">예약 확인</span>
        </button>
      </div>

      {/* 하단 안내 문구 */}
      <p className="mt-6 text-sm text-gray-400 italic">
        "개발 테스트용 직접 관리하는 1:1 예약 시스템입니다!"
      </p>

      </div>
    </div>
  );
}