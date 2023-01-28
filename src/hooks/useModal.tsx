import { Modal } from '@/components/common/Modal';
import { useOverlay } from '@toss/use-overlay';
import type { ComponentProps } from 'react';
import { useRef } from 'react';

export function useModal() {
  const overlay = useOverlay();
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (props: ComponentProps<typeof Modal>) =>
    new Promise(resolve => {
      overlay.open(({ isOpen, close }) => {
        return (
          <>
            {isOpen ? (
              <div
                className="flex top-0 fixed w-full h-full items-center bg-black bg-opacity-50"
                ref={ref}
                onClick={(e: React.MouseEvent) => {
                  {
                    e.target === ref.current ? close() : null;
                  }
                  resolve(false);
                }}
              >
                <Modal {...props} />
              </div>
            ) : null}
          </>
        );
      });
    });

  return { openModal, close: overlay.close };
}

export default useModal;
