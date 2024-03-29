import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Button } from 'antd';
// import axios from 'axios';
// import LazyLoad from 'react-lazyload';
// import { Link } from 'dva/router';
import Cswheader from '../../components/Cswheader';

const { Footer, Content } = Layout;



class index extends Component {
    clubArray = [
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛,为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛!' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },
        { imgherf: require("../../assets/lunbo1.jpg"), acttitle: '【乒乓球协会】乒乓球友谊赛', actdescription: '为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛' },

    ]
    render() {
        const content = [];
        for (let club of this.clubArray) {
            //用循环插入到 Dom节点中
            content.push(
                <div className={styles.act_card}>
                    <div className={styles.act_card_left}>
                        <img src={club.imgherf} alt="社团" />
                    </div>
                    <div className={styles.act_card_right}>
                        <div className={styles.act_card_right_title}>{club.acttitle}</div>
                        <div className={styles.act_card_right_content}>&emsp;&emsp;{club.actdescription}</div>
                        <Button type="primary" className={styles.act_card_right_btn}>查看详情</Button>
                    </div>
                </div>
            )
        }
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Cswheader />
                    <Content className={styles.crcb_content}>
                        <div className={styles.act_img}></div>
                        <div className={styles.crcb_content_word}>社团活动一览表</div>
                        <div className={styles.crcb_content_word}>Activities</div>
                        {content}
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