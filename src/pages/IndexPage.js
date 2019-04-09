import React from 'react';
import { connect } from 'dva';
import { Button} from 'antd';
import styles from './IndexPage.scss';

function IndexPage() {
  return (
    <div  className={styles.index}>
      项目一览表：
      <Button block ><a href="#/Register">Register页面</a></Button>
      <Button block><a href="#/Login">Login页面</a></Button>
      <Button block><a href="#/Home">Home页面</a></Button>
      <Button block><a href="#/Resetpsd">Resetpsd页面</a></Button>
      <Button block><a href="#/Forgetpsd">Forgetpsd页面</a></Button>
      <Button block><a href="#/Personal">Personal页面</a></Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
