import React from 'react'
import styles from './index.scss';
import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';

const { Header } = Layout;

class Cswheader extends React.Component {
    render() {
        return (
            <Header className={styles.crcb_header}>
                <div className={styles.crcb_logo}></div>
                <Menu className={styles.crcb_menu} theme="light" mode="horizontal"
                    defaultSelectedKeys={['2']} style={{ lineHeight: '8vh', border: 'none' }} >
                    <Menu.Item className={styles.crcb_menuitem} key="mail"><Link to={'/Home'}>首页</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="forum" ><Link to={'/Forum'}>社团论坛</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="notice" ><Link to={'/Home'}>社团公告</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="activity" ><Link to={'/Home'}>社团活动</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="prize" ><Link to={'/Home'}>社团荣誉</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="all" ><Link to={'/Allclub'}>全部社团</Link></Menu.Item>
                    <Menu.Item className={styles.crcb_menuitem} key="per" ><Link to={'/Personal'}>个人中心</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}
export default Cswheader