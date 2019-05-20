import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.scss';
import { Link } from 'dva/router';
import { RouteConfig } from '../router.js';

function IndexPage() {
  return (
    <div className={styles.all}>
      项目一览表:
      <div className={styles.index}>
        {
          RouteConfig.map((i) => (
            <Button block><Link to={i.path}>{i.name}页面</Link></Button>
          )
          )
        }
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);