import React, { Component } from 'react';
import styles from './index.scss';
import {
    Form, Button
} from 'antd';
import Cswheader from '../../components/Cswheader'
class index extends Component {
    state = {
        size: 'large',
    };


    render() {
        const size = this.state.size;
        return (
            <div>
                <Cswheader />

                <div className={styles.club_members}>

                    <div className={styles.content_left}>
                        <div id={styles.username}>
                            <ul>
                                <li>喜欢和冰阔落</li>
                            </ul>
                        </div>

                        <div id={styles.small_graph}>
                            <div id={styles.figuer}>
                                <img src={require('../../assets/P1.jpg')} alt="" />
                                <img src={require('../../assets/P2.jpg')} alt="" />
                            </div>
                        </div>

                        <div className={styles.data}>
                            <div id={styles.qq}>
                                <ul id={styles.qq_upper}>
                                    <li>QQ</li>
                                </ul>
                                <ul id={styles.qq_lower}>
                                    <li>1091768299</li>
                                </ul>
                            </div>
                            <div id={styles.emall}>
                                <ul id={styles.emall_upper}>
                                    <li>EMALL</li>
                                </ul>
                                <ul id={styles.emall_lower}>
                                    <li>1091768299@qq.com</li>
                                </ul>
                            </div>
                            <div id={styles.major}>
                                <ul id={styles.major_upper}>
                                    <li>MAJOR</li>
                                </ul>
                                <ul id={styles.major_lower}>
                                    <li>机电学院 </li>
                                    <li>网络工程</li>
                                </ul>
                            </div>
                            <div id={styles.personal}>
                                <ul id={styles.personal_upper}>
                                    <li>Personal Information</li>
                                </ul>
                                <ul id={styles.personal_lower}>
                                    <li>青石板留着谁的梦啊一场秋雨又落一地花旅人匆匆地赶路啊 走四季 访人家</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content_right}>

                        <div className={styles.wrap}>
                            <ul id={styles.menu}>
                                <li>
                                    首页
                            </li>

                                <li>
                                    社团公告
                            </li>

                                <li>
                                    社团活动
                            </li>

                                <li>
                                    社团荣誉
                            </li>

                                <li>
                                    全部社团
                            </li>

                                <li>
                                    个人中心
                            </li>
                            </ul>
                        </div>


                        <div id={styles.content}>

                            <div id={styles.join}>
                                <ul id={styles.title_first}>
                                    <li>加入的社团</li>
                                </ul>

                                <ul id={styles.join_content}>
                                    <Button size={size}>F6轮滑协会</Button>
                                    <Button size={size}>千寻动漫社</Button>
                                </ul>

                                <ul id={styles.join_button}>
                                    <Button size={size} >管理社团</Button>
                                </ul>

                            </div>
                            <div id={styles.posting}>
                                <ul id={styles.title_tow}>
                                    <li>发过的帖子</li>
                                </ul>
                                <div id={styles.posting_upper}>
                                    <ul id={styles.posting_upper1}>
                                        <li id={styles.posting_upper1_big}>2018年F6双旦汇演圆满结束</li>
                                        <li id={styles.posting_upper1_time}>&nbsp;&nbsp;&nbsp;2018-12-27</li>
                                        <li id={styles.posting_upper1_club}>&nbsp;&nbsp;&nbsp;F6滑轮协会</li>
                                    </ul>

                                    <ul id={styles.posting_upper2}>
                                        <li>嗨喽EV8D~F6小报！请查收>>></li>
                                        <li>2018年12月23日F6滑轮双旦。。。。。。。。。。。。</li>
                                    </ul>

                                </div>

                                <div id={styles.posting_lower}>
                                    <ul id={styles.posting_lower1}>
                                        <li id={styles.posting_lower1_big}>【万圣节】千寻地狱狂欢之夜</li>
                                        <li id={styles.posting_lower1_time}>&nbsp;&nbsp;&nbsp;2018-11-26</li>
                                        <li id={styles.posting_lower1_club}>&nbsp;&nbsp;&nbsp;千寻动漫社</li>
                                    </ul>
                                    <ul id={styles.posting_lower2}>
                                        <li>夜，敲门声突然响起，门开了————不给糖就捣蛋！！！</li>
                                        <li>哈哈哈，被吓到了吗？被吓到了吧。。。。。。。。。。。</li>
                                    </ul>

                                </div>
                            </div>
                            <div id={styles.notice}>
                                <ul id={styles.title_third}>
                                    <li>收到的通知</li>
                                </ul>
                                <div id={styles.notice_contain}>
                                    <ul id={styles.notice_one}>
                                        <li>今晚刷街！！！！</li>
                                        <li>2019.3.9</li>
                                    </ul>
                                    <ul id={styles.notice_tow}>
                                        <li>8:00水景广场集合！10：00左右结束！有时间参见的人收到请回复！</li>
                                    </ul>
                                    <ul id={styles.notice_three}>
                                        <li>F6滑轮协会</li>
                                    </ul>
                                </div>
                            </div>
                            <div id={styles.reply}>
                                <ul id={styles.title_fourth}>
                                    <li>收到的回复</li>
                                </ul>
                                <div id={styles.reply_contain}>
                                    <ul id={styles.reply_contain_one}>
                                        <li><a>喝咖啡不加糖</a></li>
                                        <li>回复</li>
                                    </ul>
                                    <ul id={styles.reply_contain_tow}>
                                        <li id={styles.reply_contain_tow1}>超级棒的万圣节晚会！！</li>
                                        <li>回复</li>
                                    </ul>
                                    <ul id={styles.reply_contain_three}>
                                        <li><a>【万圣节】千寻地狱狂欢之夜</a></li>
                                        <li>回复（99）</li>
                                        <li>from&nbsp;&nbsp;<a>千寻动漫社</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <li>Copyright&nbsp;©&nbsp;笃行-天空之城&nbsp;All&nbsp;rights&nbsp;reserved</li>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}





export default Form.create()(index);
