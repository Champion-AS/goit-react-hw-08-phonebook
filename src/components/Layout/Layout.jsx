import { Header } from 'components/Header/Header';
import s from './Loyout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={s.loyout}>{children}</main>
    </>
  );
};
