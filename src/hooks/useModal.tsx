import type { ComponentProps } from 'react';
import { Modal } from '@/components/common/Modal';
import { useOverlay } from '@toss/use-overlay';
import { useRef } from 'react';

function useModal() {
  const overlay = useOverlay();
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (props: ComponentProps<typeof Modal>) =>
    new Promise(resolve => {
      overlay.open(({ isOpen, close }) => {
        return (
          <>
            {isOpen ? (
              <div
                style={{
                  position: 'fixed',
                  top: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
                className="w-full flex h-full items-center"
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
