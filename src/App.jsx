import { TwitterCardFunction } from './components/TwitterCardFunction/TwitterCardFunction';
import { TwitterCardClass } from './components/TwitterCardClass/TwitterCardClass';

import styles from './App.module.css';

function App() {
  const props = {
    user: 'Twitter',
    description:
      'Post description Post description Post description Post description Post description Post description Post description Post description',
    title: 'History of #TBT on Twitter',
    subtitle: 'History of #TBT on Twitter',
    url: { target: 'URLtarget', label: 'blog.twitter.com' },
    numOfHearts: 695,
    numOfComments: 482,
    date: new Date().toLocaleString(),
    commentUrl: 'commentUrl',
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <TwitterCardFunction {...props} />
      </div>
      <div className={styles.contentContainer}>
        <TwitterCardClass {...props} />
      </div>
    </div>
  );
}

export default App;
