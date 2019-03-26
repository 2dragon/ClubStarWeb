import styles from './index.scss';
import React, { Component } from 'react';
import { Menu, Icon, Carousel } from 'antd';


class index extends Component {
    render() {
        return (
            <div className={styles.home_all}>
                <div className={styles.home_header}>
                    <div className={styles.home_header_icon}></div>
                    <div className={styles.home_header_navigate}>
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">首页</Menu.Item>
                            <Menu.Item key="notice" >社团公告</Menu.Item>
                            <Menu.Item key="activity" >社团活动</Menu.Item>
                            <Menu.Item key="prize" >社团奖</Menu.Item>
                            <Menu.Item key="all" >全部社团</Menu.Item>
                            <Menu.Item key="center" ><a href="https://ant.design" target="_blank" rel="noopener noreferrer">个人中心</a></Menu.Item>
                            {/* <Menu.Item key="alipay" ><a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a></Menu.Item> */}
                        </Menu>
                    </div>
                </div>
                <div className={styles.home_content}>
                    <div className={styles.home_content_text}>
                        <div className={styles.home_content_tag}>
                            <a href="index.html">
                                加入我们<br />
                                JOIN US<br /></a>
                            <hr />
                        </div>
                        <div className={styles.home_content_tagtwo}>
                            <a href="index.html">了解我们</a>
                        </div>
                    </div>
                </div>
                <div className={styles.home_main_activity}>
                    <div className={styles.home_main_topName}>
                        社团公告
                   </div>
                    <div className={styles.home_main_topSubName}>
                        Notice
                   </div>
                    <div className={styles.home_main_pictures}>
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>,
                        mountNode
                  <img src="../../assets/headerbc.jpeg" alt="" />
                    </div>
                </div>
                {/* <div className={styles.home_footer}>Footer</div> */}
            </div>

        )
    }
}
export default (index);
