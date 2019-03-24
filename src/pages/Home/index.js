import styles from './index.scss';
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class index extends Component {
    render() {
        return (
            <div className={styles.home_all}>
                <div className={styles.home_header}>
                    <div className={styles.home_header_icon}></div>
                    <div className={styles.home_header_navigate}>
                        <Menu  mode="horizontal">
                            <Menu.Item key="mail"><Icon type="mail" />首页</Menu.Item>
                            <Menu.Item key="app" ><Icon type="appstore" />社团公告</Menu.Item>
                            <Menu.Item key="alipay"><a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className={styles.home_content}></div>
                {/* <div className={styles.home_footer}>Footer</div> */}
            </div>
        )
    }
}
export default (index);
