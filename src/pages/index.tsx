import { Button } from '@/components/common/Button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push('/onboarding');
  };
  
  return (
    <div className="w-full flex-col text-center">
      <header className="pt-[75px] text-h2 text-gray-600">Service Name</header>
      <div className="text-b1 mt-[12px] text-gray-600">AI 꼬리질문으로 준비하는 면접</div>
      <img className="mt-[24px] mx-auto w-[328px] h-[328px] bg-gray-100 mb-[24px]"></img>
      <Button onClick={onClick} buttonType="primary" buttonText="시작하기" />
    </div>
  );
}
