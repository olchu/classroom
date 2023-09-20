export type MenuType = typeof menuList;

export const menuList = [
  { title: 'Главная', link: '/', onlyAdmins: false },
  { title: 'Добавить сбор', link: '/addCollect', onlyAdmins: true },
  { title: 'Добавить входящее', link: '/addIncoming', onlyAdmins: true },
  { title: 'Ученики', link: '/students', onlyAdmins: true },
];
