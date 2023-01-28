import useModal from '@/hooks/useModal';
import { useRouter } from 'next/router';
import { Button } from '../Button';

import { Icon } from '../Icon';

export interface HeaderProps {
  headerTitle: string;
}
export const Header = ({ headerTitle }: HeaderProps) => {
  const router = useRouter();
  const { openModal, close } = useModal();

  const openModalBox = async () => {
    await openModal({
      children: (
        <div className="w-full">
          <div className="text-subtitle">면접 연습 나가기 </div>
          <div className="text-b1 text-gray-300 mt-[24px]">면접 연습을 나가겠습니까?</div>
          <div className="text-b1 text-gray-300 mt-[4px]">질문과 답변 내용은 기록되지 않습니다</div>
          <div className="grid grid-cols-2 w-full mt-[24px] gap-4">
            <Button
              buttonType="gray"
              onClick={() => {
                close();
              }}
              buttonText="취소"
            />
            <Button
              buttonType="red"
              onClick={() => {
                router.push('/onboarding');
              }}
              buttonText="끝내기"
            />
          </div>
        </div>
      ),
    });
  };

  const onClick = () => {
    openModalBox();
    // TODO: home으로 라우팅
  };
  return (
    <div className="w-full bg-gray-50 flex pl-[6px] h-[48px] items-center pr-[46px]">
      <div className="cursor-pointer" onClick={onClick}>
        <Icon iconName="toGoHome" />
      </div>
      <div className="text-b1 m-auto">{headerTitle}</div>
    </div>
  );
};
