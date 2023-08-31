import Link from 'next/link';

const menuList = [
  { title: 'Главная', link: '/' },
  { title: 'Добавить сбор', link: '/addCollect' },
  { title: 'Добавить входящее', link: '/addIncoming' },
];

export const Menu = () => {
  return (
    <div>
      <ul>
        {menuList.map(({ title, link }) => {
          return (
            <li key={title}>
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
