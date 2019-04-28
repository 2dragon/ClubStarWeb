import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Button, Carousel } from 'antd';

import Cswheader from '../../components/Cswheader'
const { Footer, Content } = Layout;



class index extends Component {
    eventArray = [
        { imgherf: require("../../assets/lunbo3.jpg"), acttitle: '2018 最可爱的运动会', actdescription: '2018的冲劲请也留在2019继续加油' },
        { imgherf: require("../../assets/lunbo4.jpg"), acttitle: '文理最强音|最热情的校园歌手大赛', actdescription: '那年青春我们正好' },

    ];
    clubArray = [
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '3V3篮球赛|无篮球不青春', actdescription: '篮球本身就是意义' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '创意井盖|关于文理的美好幻想', actdescription: '用小小的井盖来诉说文理美好的幻想' },
    ]

    render() {
        const content1 = [];
        const content2 = [];
        for (let event of this.eventArray) {
            content1.push(
                <div className={styles.event}>
                    <div className={styles.evevt_left}>
                        <img src={event.imgherf} alt="重点公告事件" />
                    </div>
                    <div className={styles.event_right}>
                        <div className={styles.event_right_title}>{event.acttitle}</div>
                        <div className={styles.event_right_details}>{event.actdescription}</div>
                    </div>
                </div>
            )
        }
        for (let club of this.clubArray) {
            //用循环插入到 Dom节点中
            content2.push(
                <div className={styles.act_card}>
                    <div className={styles.act_card_left}>
                        <img src={club.imgherf} alt="活动公告" />
                    </div>
                    <div className={styles.act_card_right}>
                        <div className={styles.act_card_right_title}>{club.acttitle}</div>
                        <div className={styles.act_card_right_content}>&emsp;&emsp;{club.actdescription}</div>
                        <Button type="primary" className={styles.act_card_right_btn}>查看详情</Button>
                    </div>
                </div>
            )
        }

        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Cswheader />
                    <Content className={styles.crcb_content}>
                        <div className={styles.act_img}></div>
                        <div className={styles.crcb_play}>
                            <Carousel autoplay>
                                <div>
                                    <img src={require('../../assets/lunbo2.jpg')} alt="notice2" />
                                    <div className={styles.crcb_play_word}>7329u49r239</div>
                                </div>
                                <div>
                                    <img src={require('../../assets/lunbo3.jpg')} alt="notice3" />
                                    <div className={styles.crcb_play_word}>7329u49r239</div>
                                </div>
                                <div>
                                    <img src={require('../../assets/lunbo4.jpg')} alt="notice1" />
                                    <div className={styles.crcb_play_word}>7329u49r239</div>
                                </div>
                            </Carousel>
                        </div>
                        <div className={styles.notice_event}></div>
                        {content1}
                        {content2}
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