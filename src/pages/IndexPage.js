import React from 'react';
import { connect } from 'dva';
import { Button} from 'antd';
import styles from './IndexPage.scss';
import { Link } from 'dva/router';


function IndexPage() {
  return (
    <div  className={styles.index}>
      项目一览表：
      <Button block ><Link to="/Register">Register页面</Link></Button>
      <Button block><Link to="/Login">Login页面</Link></Button>
      <Button block><Link to="/Home2.0">Home页面</Link></Button>
      <Button block><Link to="/Resetpsd">Resetpsd页面</Link></Button>
      <Button block><Link to="/Forgetpsd">Forgetpsd页面</Link></Button>
      <Button block><Link to="/Personal">Personal页面</Link></Button>
      <Button block><Link to="/Createclub">Createclub页面</Link></Button>
      <Button block><Link to="/Allclub">Allclub页面</Link></Button>
      <Button block><Link to="/Manage">Manage页面</Link></Button>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
