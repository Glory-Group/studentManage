import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Head from "../components/head/head"
import Sider from "../components/sider/sider"
function IndexPage() {
  return (
    <div className={styles.normal}>
      <Head>
      </Head>
      <Sider>
      </Sider>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
