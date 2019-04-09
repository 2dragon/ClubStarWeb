import styles from './index.scss';
import React, { Component } from 'react';
import { Menu, Icon, Carousel } from 'antd';
// import Path from '@/tool/path'


class index extends Component {
    render() {
        return (
            <div className={styles.home_all}>

<<<<<<< HEAD
=======


>>>>>>> a669b362065df91251b3fe411419378069938014
                {/* 顶部 */}
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
<<<<<<< HEAD

                {/* 顶部图片   */}
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

                {/* 公告部分     */}
                <div className={styles.home_main_notice}>
                    <div className={styles.home_main_topName}>
                        社团公告
=======
                <div className={styles.home_all_it}>
                    {/* 顶部图片   */}
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

                    {/* 公告部分     */}
                    <div className={styles.home_main_notice}>
                        <div className={styles.home_main_topName}>
                            社团公告
>>>>>>> a669b362065df91251b3fe411419378069938014
                   </div>
                        <div className={styles.home_main_topSubName}>
                            Notice
                   </div>
<<<<<<< HEAD
                    <div className={styles.home_main_pictures}>
                        <Carousel autoplay>
                            <div> <img src={require('../../assets/lunbo1.jpg')} alt="notice1" /></div>
                            <div> <img src={require('../../assets/bc.jpg')} alt="notice2" /></div>
                            <div> <img src={require('../../assets/activity3.jpg')} alt="notice3" /></div>
                        </Carousel>,
                    </div>
                    <div className={styles.home_main_notices}>
                        <ul>
                            <li className={styles.home_main_notices_item}><a href=""><Icon caret-right />以春之名，新学期第一次升旗仪式举行</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />我校部分学院改革合并</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />我有一万种吸引你目光的方式，让你目不转睛</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />回顾2018百团大战</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />四六级，感觉还会再爱！</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />你有一份四六级裸考秘籍，“点击领取”</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />挑战主持人大赛决赛，带你重回决赛现场</a></li>
                            <li className={styles.home_main_notices_item}><a href=""><Icon />我有一份武林秘籍等着你来继承</a></li>
                        </ul>
                    </div>
                    <div className={styles.home_main_notice_link}>
                        <a href="">More</a>
                    </div>
                </div>

                {/* 活动部分     */}
                <div className={styles.home_main_activity}>
                    <div className={styles.home_main_topName}>
                        社团活动
                  </div>
                    <div className={styles.home_main_topSubName}>
                        activity
                  </div>
                    {/* <div></div> */} 
                    <div className={styles.home_main_activity_item}>
                        <div className={styles.home_main_activity_items}>
                            <div className={styles.home_main_activity_pic}>
                                <img src={require('../../assets/activity1.jpg')} alt="社团" alt="" />
                            </div>
                            <div className={styles.home_main_activity_content}>
                                <h2>【微电影协会】邂逅常德最美影展</h2>
                                <h3>和你目睹世间美好&nbsp;看遍人间险恶</h3>
                                <div className={styles.home_main_activity_item_more}>
                                    <a href="">查看详情</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.home_main_activity_item}>
                            <div className={styles.home_main_activity_pic}>
                                <img src={require('../../assets/activity2.png')} alt="社团" alt="" />
                            </div>
                            <div className={styles.home_main_activity_content}>
                                <h2>【乒乓球协会】乒乓球友谊赛</h2>
                                <h3>为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛</h3>
                                <div className={styles.home_main_activity_item_more}>
                                    <a href="">查看详情</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.home_main_activity_item}>
                            <div className={styles.home_main_activity_pic}>
                                <img src={require('../../assets/activity3.jpg')} alt="社团" alt="" />
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
                    <div className={styles.home_main_activity_link}>
                        <a href="">More</a>
                    </div>

                    {/* </div> <div className = {styles.clearfix}></div> */}
                </div>

                {/* 社团奖 */}
                <div className={styles.home_main_prize}>
                    <div className={styles.home_main_topName}>
                        社团奖
                </div>
                    <div className={styles.home_main_topSubName}>
                        prize
                </div>
                    <div className={styles.home_main_prize_items}>
                        <div className={styles.home_main_prize_item}>
                            <img src={require('../../assets/prize1.jpg')} alt="" />
                            <div className={styles.home_main_prize_item_introduce}>
                                <div className={styles.home_main_prize_name}><a href="">优秀社团</a></div>
                                <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                            </div>
                        </div>
                        <div className={styles.home_main_prize_item}>
                            <img src={require('../../assets/prize2.jpg')} alt="" />
                            <div className={styles.home_main_prize_item_introduce}>
                                <div className={styles.home_main_prize_name}><a href="">优秀社团部</a></div>
                                <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                            </div>
                        </div>
                        <div className={styles.home_main_prize_item}>
                            <img src={require('../../assets/prize3.jpg')} alt="" />
                            <div className={styles.home_main_prize_item_introduce}>
                                <div className={styles.home_main_prize_name}><a href="">优秀社团部部长</a></div>
                                <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.home_main_prize_link}>
                        <a href="">More</a>
                    </div>

                </div>

                {/* 明星社团 */}
                <div className={styles.home_main_club}>
                    <div className={styles.home_main_topName}>
                        明星社团
                  </div>
                    <div className={styles.home_main_topSubName}>
                        clubs
                  </div>
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
                    <div className={styles.home_main_club_link}>
                        <a href=""> All </a>
                    </div>



=======
                        <div className={styles.home_main_pictures}>
                            <Carousel autoplay>
                                <div> <img src={require('../../assets/lunbo1.jpg')} alt="notice1" /></div>
                                <div> <img src={require('../../assets/lunbo2.jpg')} alt="notice2" /></div>
                                <div> <img src={require('../../assets/lunbo3.jpg')} alt="notice3" /></div>
                                <div> <img src={require('../../assets/lunbo4.jpg')} alt="notice1" /></div>
                                <div> <img src={require('../../assets/lunbo5.jpg')} alt="notice2" /></div>
                                <div> <img src={require('../../assets/lunbo6.jpg')} alt="notice3" /></div>
                                <div>
                                    <a href=""></a>
                                    <a href="">></a>
                                </div>
                            </Carousel>,
                    </div>
                        <div className={styles.home_main_notices}>
                            <ul>
                                <li className={styles.home_main_notices_item}><a href=""><Icon caret-right />以春之名，新学期第一次升旗仪式举行</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />我校部分学院改革合并</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />我有一万种吸引你目光的方式，让你目不转睛</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />回顾2018百团大战</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />四六级，感觉还会再爱！</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />你有一份四六级裸考秘籍，“点击领取”</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />挑战主持人大赛决赛，带你重回决赛现场</a></li>
                                <li className={styles.home_main_notices_item}><a href=""><Icon />我有一份武林秘籍等着你来继承</a></li>
                            </ul>
                        </div>
                        <div className={styles.home_main_notice_link}>
                            <a href="">More</a>
                        </div>
                    </div>

                    {/* 活动部分     */}
                    <div className={styles.home_main_activity}>
                        <div className={styles.home_main_topName}>
                            社团活动
                  </div>
                        <div className={styles.home_main_topSubName}>
                            activity
                  </div>
                        {/* <div></div> */}
                        <div className={styles.home_main_activity_item}>
                            <div className={styles.home_main_activity_items}>
                                <div className={styles.home_main_activity_pic}>
                                    <img src={require('../../assets/activity1.jpg')} alt="社团" alt="" />
                                </div>
                                <div className={styles.home_main_activity_content}>
                                    <h2>【微电影协会】邂逅常德最美影展</h2>
                                    <h3>和你目睹世间美好&nbsp;看遍人间险恶</h3>
                                    <div className={styles.home_main_activity_item_more}>
                                        <a href="">查看详情</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.home_main_activity_item}>
                                <div className={styles.home_main_activity_pic}>
                                    <img src={require('../../assets/activity2.png')} alt="社团" alt="" />
                                </div>
                                <div className={styles.home_main_activity_content}>
                                    <h2>【乒乓球协会】乒乓球友谊赛</h2>
                                    <h3>为了由更多的实战经验，与湖南应用技术学院进行一场友谊赛</h3>
                                    <div className={styles.home_main_activity_item_more}>
                                        <a href="">查看详情</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.home_main_activity_item}>
                                <div className={styles.home_main_activity_pic}>
                                    <img src={require('../../assets/activity3.jpg')} alt="社团" alt="" />
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
                        <div className={styles.home_main_activity_link}>
                            <a href="">More</a>
                        </div>

                        {/* </div> <div className = {styles.clearfix}></div> */}
                    </div>

                    {/* 社团奖 */}
                    <div className={styles.home_main_prize}>
                        <div className={styles.home_main_topName}>
                            社团奖
                </div>
                        <div className={styles.home_main_topSubName}>
                            prize
                </div>
                        <div className={styles.home_main_prize_items}>
                            <div className={styles.home_main_prize_item}>
                                <img src={require('../../assets/prize1.jpg')} alt="" />
                                <div className={styles.home_main_prize_item_introduce}>
                                    <div className={styles.home_main_prize_name}><a href="">优秀社团</a></div>
                                    <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                                </div>
                            </div>
                            <div className={styles.home_main_prize_item}>
                                <img src={require('../../assets/prize2.jpg')} alt="" />
                                <div className={styles.home_main_prize_item_introduce}>
                                    <div className={styles.home_main_prize_name}><a href="">优秀社团部</a></div>
                                    <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                                </div>
                            </div>
                            <div className={styles.home_main_prize_item}>
                                <img src={require('../../assets/prize3.jpg')} alt="" />
                                <div className={styles.home_main_prize_item_introduce}>
                                    <div className={styles.home_main_prize_name}><a href="">优秀社团部部长</a></div>
                                    <div className={styles.home_main_prize_item_introduce_check}><a href="">查看</a></div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.home_main_prize_link}>
                            <a href="">More</a>
                        </div>

                    </div>

                    {/* 明星社团 */}
                    <div className={styles.home_main_club}>
                        <div className={styles.home_main_topName}>
                            明星社团
                  </div>
                        <div className={styles.home_main_topSubName}>
                            clubs
                  </div>
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
                        <div className={styles.home_main_club_link}>
                            <a href=""> All </a>
                        </div>



                    </div>
>>>>>>> a669b362065df91251b3fe411419378069938014
                </div>

                {/* 底部 */}
                <div className={styles.home_footer}>
                    <div className={styles.home_footer_copyright}>
                        <p>copyright&copy;天空之城&nbsp;2019&nbsp;All rights reseverd</p>
                        <p>联系我们 15874902239@qq.com</p>
                        <p><a href=""> 社团星 </a> Designed by 天空之城</p>
                    </div>

                </div>

            </div>

        )
    }
}
export default (index);
