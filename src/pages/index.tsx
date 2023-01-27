import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <div className="w-full flex-col text-center">
      <header className="mt-[75px] text-h2 text-gray-600">Service Name</header>
      <div className="text-b1 mt-[12px] text-gray-600">AI 꼬리질문으로 준비하는 면접</div>
      <img className="mt-[24px] mx-auto w-[328px] h-[328px] bg-gray-100 mb-[24px]"></img>
      <Button buttonType="primary" buttonText="시작하기" />
    </div>
  );
}
