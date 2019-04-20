import React, { Component } from 'react';
import styles from './index.scss';
import {
    Form, Button, Icon
  } from 'antd';

class index extends Component {
    state = {
        size: 'dfault',
    };

    
    render() {
        const size = this.state.size;
        return(
            <div className={styles.club_members}>
            <div className={styles.content_left}>
                
                <div id={styles.zouyi}>
                    <div id={styles.welcome}>
                        <ul>
                            <li>你好,</li>
                            <li>社团管理员</li>
                        </ul>
                    </div>

                    <div id={styles.username}>
                            <ul>
                                <li>喜欢和冰阔落</li>
                            </ul>
                    </div>

                    <div id={styles.small_graph}>

                        <div id={styles.figuer}>
                            <img src={require('../../assets/P1.jpg')} alt="社团"/>
                            <img src={require('../../assets/P2.jpg')} alt="社团"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.content_right}>
                
                    {/* 导航栏部分 */}
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
                
                {/* 主体内容部分 */}
                <div id={styles.content}>
					
                    {/* 收到申请部分 */}
					<div id={styles.apply}>
						<ul id={styles.title_first}>
							<li>收到的申请</li>
						</ul>
						
						<div id={styles.apply_content}>
                            <ul id={styles.apply_upper}>
                                <ul id={styles.apply_upper_one}>
                                    <li><a>喝咖啡不加糖</a></li>
                                    <li>请求加入</li>
                                    <li><a>F6轮滑协会</a></li>
                                </ul>

                                <ul id={styles.apply_upper_tow}>
                                    <Button size={size}>同意</Button>
                                    <Button size={size}>拒绝</Button>
                                </ul>
                            </ul>
                            
                            <ul id={styles.apply_lower}>
                                <ul id={styles.apply_lower_one}>
                                    <li><a>宇宙第一帅</a></li>
                                    <li>请求加入</li>
                                    <li><a>F6轮滑协会</a></li>
                                </ul>
                                
                                <ul id={styles.apply_lower_tow}>
                                    <Button size={size}>同意</Button>
                                    <Button size={size}>拒绝</Button>
                                </ul>
                            </ul>
                        </div>
						
					</div>

                    {/* 管理成员部分 */}
					<div id={styles.member}>
                        <ul id={styles.title_tow}>
							<li>管理成员</li>
						</ul>
						<div id={styles.member_content}>
                        <ul id={styles.member_upper}>
							<Button size={size}>设置权限</Button>
							<Button size={size}>取消权限</Button>
                            <Button size={size}>删除成员</Button>
						</ul>

                        <div id={styles.member_lower}>
                            <ul id={styles.member_lower_one}>
                                <li>权限</li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                                <li><Icon type="user"/></li>
                            </ul>

                            <ul id={styles.member_lower_tow}>
                                <li>成员昵称</li>
                                <li><a>刀光剑影</a></li>
                                <li><a>丰丰心</a></li>
                                <li><a>迷茫篝</a></li>
                                <li><a>GypsyBardCover</a></li>
                                <li><a>木易斤欠</a></li>
                                <li><a>tan-杨</a></li>
                                <li><a>小鹏</a></li>
                                <li><a>东邪</a></li>
                            </ul>

                            <ul id={styles.member_lower_third}>
                                <li>真实姓名</li>
                                <li>陈鹏州</li>
                                <li>高慧</li>
                                <li>蒋双隆</li>
                                <li>凌珊焱</li>
                                <li>刘侣</li>
                                <li>谭迦瀚</li>
                                <li>王鹏</li>
                                <li>徐贺俊</li>
                            </ul>

                            <ul id={styles.member_lower_fourth}>
                                <li>成员信息</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>计电学院网工16102</li>
                                <li>这里一片空白...</li>
                            </ul>

                            <ul id={styles.member_lower_fifth}>
                                <li>联系方式</li>
                                <li>1501431859</li>
                                <li>2695928997</li>
                                <li>920024814</li>
                                <li>328121621</li>
                                <li>2671818775</li>
                                <li>892028573</li>
                                <li>2274766152</li>
                                <li>1090700911</li>
                            </ul>
                        </div>
               
                        </div>

                        <div id={styles.member_button}>
                            <Button>显示更多</Button>
                        </div>

					</div>

                    {/* 管理帖子部分 */}
					<div id={styles.post}>
						<ul id={styles.title_third}>
                            <li>管理帖子</li>
                        </ul>

                        <div id={styles.post_content}>
                            <ul id={styles.icon_first}>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                                <li><Icon type="to-top"/></li>
                            </ul>

                            <ul id={styles.icon_second}>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                                <li><Icon type="star" theme="filled"/></li>
                            </ul>
                            
                            <ul id={styles.icon_third}>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                                <li><Icon type="delete"/></li>
                            </ul> 
                                
                            <ul id={styles.post_first}>
                                <li><a>【3.24刷街】今晚的月色真美啊</a></li>
                                <li><a>F6轮滑12周年庆典刷校园，惊艳了你我的是时光...</a></li>
                                <li><a>18级轮滑教练们闪亮登场</a></li>
                                <li><a>【3.24刷街】今晚的月色真美啊</a></li>
                                <li><a>F6轮滑12周年庆典刷校园，惊艳了你我的是时光...</a></li>
                                <li><a>18级轮滑教练们闪亮登场</a></li>
                                <li><a>F6轮滑12周年庆典刷校园，惊艳了你我的是时光...</a></li>
                                <li><a>18级轮滑教练们闪亮登场</a></li>
                            </ul>
                                
                            <ul id={styles.post_second}>
                                <li><Icon type="user"/>刀光剑影</li>
                                <li><Icon type="user"/>丰丰心</li>
                                <li><Icon type="user"/>GypsyBardCover</li>
                                <li><Icon type="user"/>刀光剑影</li>
                                <li><Icon type="user"/>GypsyBardCover</li>
                                <li><Icon type="user"/>丰丰心</li>
                                <li><Icon type="user"/>GypsyBardCover</li>
                                <li><Icon type="user"/>丰丰心</li>
                            </ul>

                            <ul id={styles.post_third}>
                               <li>20:07</li>
                               <li>18:07</li>
                               <li>11:07</li>
                               <li>20:07</li>
                               <li>18:07</li>
                               <li>11:07</li>
                               <li>18:07</li>
                               <li>11:07</li>                               
                            </ul>

                        </div>

                        <div id={styles.post_button}>
                            <Button>显示更多</Button>
                        </div>

					</div>					
				</div>
                
                <div className={styles.container}>
                    <li>Copyright&nbsp;©&nbsp;笃行-天空之城&nbsp;All&nbsp;rights&nbsp;reserved</li>
                </div>
                
            </div>
            </div>
        );

    }
}





export default Form.create()(index);
