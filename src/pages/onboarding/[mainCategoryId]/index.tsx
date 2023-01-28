import { Button } from '@/components/common/Button';
import { Icon } from '@/components/common/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { useMidCategoryQuery } from '@/hooks/queries/useMidCategoryQuery';
import { useRouter } from 'next/router';

const IMAGE_SRC =
  'https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60';

const Category = () => {
  const router = useRouter();
  const { data, isSuccess } = useMidCategoryQuery({ id: router.query.mainCategoryId as string });

  const handleChangeButtonClick = () => {
    router.back();
  };

  return (
    <>
      <header className="flex w-full justify-between py-[2rem]">
        <Icon iconName="logo" width={40} height={18} />
        <Icon iconName="setting" size={24} />
      </header>
      <article>
        <section>
          <p className="text-b1 text-gray-600">내 희망직무</p>
          <div className="flex justify-between items-center mt-[0.8rem]">
            {isSuccess && <p className="text-h2 text-gray-800">{data.name}</p>}
            <Button onClick={handleChangeButtonClick} buttonText="변경" buttonType="extra" />
          </div>
        </section>
        <section className="grid grid-cols-2 gap-[0.8rem] mt-[2rem]">
          {data?.categories.map((category, index) => {
            return (
              <Link key={index} href={`/question/${category.id}`}>
                <Image
                  src={category.imageUrl === '' ? IMAGE_SRC : `${category.imageUrl}`}
                  width={160}
                  height={160}
                />
              </Link>
            );
          })}
        </section>
      </article>
    </>
  );
};

export default Category;
