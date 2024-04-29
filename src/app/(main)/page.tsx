import CardList from '@/src/components/card/CardList';
import CustomCardList from '@/src/components/card/CustomCardList';
import classNames from 'classnames';
import getCookie from '@/src/lib/getCookie';
import getCookies from '@/src/lib/getCookies';
import styles from './page.module.scss';

export default function Home() {
  const { userType } = getCookies();

  console.log('page', userType);
  return (
    <div>
      {userType === 'employee' && <CustomCardList />}
      <div
        className={classNames({
          [styles.noCustom]: userType !== 'employee',
        })}
      >
        <CardList />
      </div>
    </div>
  );
}
