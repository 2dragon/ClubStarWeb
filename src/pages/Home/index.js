import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Input, Carousel, Icon, Button } from 'antd';
import Cswheader from '../../components/Cswheader'
const {  Footer, Content } = Layout;
const Search = Input.Search;

class index extends Component {
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Cswheader/>
                    <Content className={styles.crcb_content}>
                        {/* 大标题 */}
                        <div className={styles.crcb_content_title}>
                            <div className={styles.crcb_content_word}>开启你的社团生活</div>
                            <div className={styles.crcb_content_word}>Open your community life</div>
                            <div className={styles.crcb_content_allsearch}>
                                <Search className={styles.crcb_content_search}
                                    placeholder="搜索社团"
                                    onSearch={value => console.log(value)}
                                    style={{ width: 400 }}
                                />
                            </div>
                        </div>
                        {/* 社团公告 */}
                        <div className={styles.home_main_notice}>
                            <div className={styles.home_main_topName}>社团公告</div>
                            <div className={styles.home_main_topSubName}>Notice</div>
                            <div className={styles.home_main_pictures}>
                                <Carousel autoplay>
                                    <div> <img src={require('../../assets/lunbo1.jpg')} alt="notice1" /></div>
                                    <div> <img src={require('../../assets/lunbo2.jpg')} alt="notice2" /></div>
                                    <div> <img src={require('../../assets/lunbo3.jpg')} alt="notice3" /></div>
                                    <div> <img src={require('../../assets/lunbo4.jpg')} alt="notice1" /></div>
                                </Carousel>
                            </div>
                            <div className={styles.home_main_notices}>
                                <ul>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />以春之名，新学期第一次升旗仪式举行</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />我校部分学院改革合并</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />我有一万种吸引你目光的方式，让你目不转睛</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />回顾2018百团大战</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />四六级，感觉还会再爱！</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />你有一份四六级裸考秘籍，“点击领取”</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />挑战主持人大赛决赛，带你重回决赛现场</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />我有一份武林秘籍等着你来继承</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />四六级，感觉还会再爱！</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />你有一份四六级裸考秘籍，“点击领取”</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />挑战主持人大赛决赛，带你重回决赛现场</a></li>
                                    <li className={styles.home_main_notices_word}><a href=""><Icon className={styles.home_main_notices_wordicon} type="caret-right" />我有一份武林秘籍等着你来继承</a></li>
                                </ul>
                            </div>
                            <Button className={styles.home_main_notice_link}><a href="">More</a></Button>
                        </div>
                        {/* 社团活动 */}
                        <div className={styles.home_main_activity}>
                            <div className={styles.home_main_topName}>社团活动</div>
                            <div className={styles.home_main_topSubName}>activity</div>
                            <div className={styles.home_main_activity_item}>
                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity1.jpg')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>【微电影协会】邂逅常德最美影展</h2>
                                        <h3>和你目睹世间美好&nbsp;看遍人间险恶</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity2.png')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>【乒乓球协会】乒乓球友谊赛</h2>
                                        <h3>为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity3.jpg')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>惊喜时光之夜，等你开启后续</h2>
                                        <h3>由学社联主办，时光吉他社承办的一场吉他盛宴</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity1.jpg')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>【微电影协会】邂逅常德最美影展</h2>
                                        <h3>和你目睹世间美好&nbsp;看遍人间险恶</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity2.png')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>【乒乓球协会】乒乓球友谊赛</h2>
                                        <h3>为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.home_main_activity_items}>
                                    <div className={styles.home_main_activity_pic}>
                                        <img src={require('../../assets/activity3.jpg')} alt="社团" />
                                    </div>
                                    <div className={styles.home_main_activity_content}>
                                        <h2>惊喜时光之夜，等你开启后续</h2>
                                        <h3>由学社联主办，时光吉他社承办的一场吉他盛宴</h3>
                                        <div className={styles.home_main_activity_item_more}>
                                            <a href="">查看详情</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button className={styles.home_main_activity_link}><a href="">More</a></Button>
                        </div>

                        {/* 社团奖 */}
                        <div className={styles.home_main_prize}>
                            <div className={styles.home_main_topName}> 社团奖</div>
                            <div className={styles.home_main_topSubName}>prize</div>
                            <div className={styles.home_main_prize_items}>
                                <div className={styles.home_main_prize_item}>
                                    <img src={require('../../assets/prize1.jpg')} alt="" />
                                    <div className={styles.home_main_prize_item_introduce}>
                                        <div className={styles.home_main_prize_name}><a href="">优秀社团</a></div>
                                        <Button className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></Button>
                                    </div>
                                </div>
                                <div className={styles.home_main_prize_item}>
                                    <img src={require('../../assets/prize2.jpg')} alt="" />
                                    <div className={styles.home_main_prize_item_introduce}>
                                        <div className={styles.home_main_prize_name}><a href="">优秀社团部</a></div>
                                        <Button className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></Button>
                                    </div>
                                </div>
                                <div className={styles.home_main_prize_item}>
                                    <img src={require('../../assets/prize3.jpg')} alt="" />
                                    <div className={styles.home_main_prize_item_introduce}>
                                        <div className={styles.home_main_prize_name}><a href="">优秀社团部部长</a></div>
                                        <Button className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></Button>
                                    </div>
                                </div>
                            </div>
                            <Button className={styles.home_main_prize_link}><a href="">More</a></Button>
                        </div>

                        {/* 明星社团 */}
                        <div className={styles.home_main_club}>
                            <div className={styles.home_main_topName}>明星社团</div>
                            <div className={styles.home_main_topSubName}>clubs</div>
                            <div className={styles.home_main_club_items}>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/lvyun.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">绿韵环保协会</a></div>
                                </div>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/yuanding.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">园丁协会</a></div>
                                </div>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/guoyue.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">国乐相声曲艺社</a></div>
                                </div>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/huahui.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">花卉协会</a></div>
                                </div>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/zhixing.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">知行社</a></div>
                                </div>
                                <div className={styles.home_main_club_item}>
                                    <a href=""><img src={require('../../assets/diy.jpg')} alt="" /></a>
                                    <div className={styles.home_main_club_name}><a href="">DIY手工艺术坊</a></div>
                                </div>
                            </div>
                            <Button className={styles.home_main_club_link}><a href="">All</a></Button>
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