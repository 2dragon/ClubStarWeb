import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Menu } from 'antd';
import Cswheader from '../../components/Cswheader'
import { Link } from 'dva/router';

const { Header, Footer, Content } = Layout;

class index extends Component {

    render() {

        return(

            <div className={styles.crcb_page} >
                <Layout>
                    <Cswheader/>
                    <Content className={styles.crcb_content}>
                        <div className={styles.act_imgs}>
                            <img src={require('../../assets/club2.jpg')} alt="社团荣誉" />
                            <img src={require('../../assets/club1.jpg')} alt="社团荣誉" />
                        </div>
                        <div className={styles.crcb_content_word_one}>2018社团荣誉</div>
                        <div className={styles.crcb_content_word_tow}>Community award</div>
                        <div className={styles.act_card}>
                            <div className={styles.act_card_one}>
                                <div className={styles.act_card_title}>
                                    <li><a>优秀社团</a></li>
                                </div>
                                <div className={styles.act_card_img}>
                                    <img src={require('../../assets/prize1.jpg')} alt="社团" />
                                </div>
                                
                            </div>
                            <div className={styles.act_card_one}>
                                <div className={styles.act_card_title}>
                                    <li><a>优秀社团部</a></li>
                                </div>
                                <div className={styles.act_card_img}>
                                    <img src={require('../../assets/prize2.jpg')} alt="社团" />
                                </div>
                            </div>
                            <div className={styles.act_card_one}>
                                <div className={styles.act_card_title}>
                                    <li><a>优秀社团部部长</a></li>
                                </div>
                                <div className={styles.act_card_img}>
                                    <img src={require('../../assets/prize3.jpg')} alt="社团" />
                                </div>
                            </div>
                            <div className={styles.act_card_one}>
                                <div className={styles.act_card_title}>
                                    <li><a>明星社团</a></li>
                                </div>
                                <div className={styles.act_card_img}>
                                    <img src={require('../../assets/prize1.jpg')} alt="社团" />
                                </div>
                            </div>
                    </div>
                    </Content>
                    <Footer className={styles.crcb_footer}>
                        <div className={styles.home_footer_copyright}>
                            <p>copyright&copy;天空之城&nbsp;2019&nbsp;All rights reseverd</p>
                            <p>联系我们 15874902239@qq.com</p>
                            <p><a href=""> 社团星 </a> Designed by 天空之城</p>
                        </div>
                    </Footer>
                </Layout>
            </div >

        );
    }
}

export default Form.create()(index);