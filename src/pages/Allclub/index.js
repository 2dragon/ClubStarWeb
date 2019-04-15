import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Menu, Icon, Input, Select, DatePicker, Upload, message, Button, Card } from 'antd';
import axios from 'axios';
import LazyLoad from 'react-lazyload';

const { Header, Footer, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;
const Search = Input.Search;
const { Meta } = Card;

class index extends Component {
    //后台获取所有的社团列表
    // getAllClub = () => {
    //     axios({
    //         method: 'get',
    //         url: '',
    //         data: {

    //         }
    //     }).then(res => {
    //         if (res.status === 200 && res.data) {
    //             //获取json数组并保存，或者直接用
    //             var clubArray = res;
    //         }
    //     });
    // }
    clubArray = [
        { imgherf: '../../assets/lunbo1.jpg', clubname: '猫猫', description: '这里是描述' },
        { imgherf: '../../assets/lunbo2.jpg', clubname: '树树', description: 'des2' },
        { imgherf: '../../assets/lunbo3.jpg', clubname: '孔雀', description: 'des3' },
        { imgherf: '../../assets/lunbo4.jpg', clubname: '河豚', description: 'des4' }
    ]
    //懒加载展示所有的社团
    showAllClub = () => {
        for (let club of this.clubArray) {
            //用循环插入到Dom节点中
            return (
                <Card
                    hoverable
                    style={{ width: 240 }}
                    // 这个地址的变量不知道怎么解决
                    //循环也不知道怎么解决
                    cover={<img alt="图片显示不了" src={require('../../assets/lunbo4.jpg')} />}
                >
                    <Meta
                        title={club.clubname}
                        description={club.description}
                    />
                </Card>
            )
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Header className={styles.crcb_header}>
                        <div className={styles.crcb_logo}></div>
                        <Menu className={styles.crcb_menu} theme="light" mode="horizontal"
                            defaultSelectedKeys={['2']} style={{ lineHeight: '8vh', border: 'none' }} >
                            <Menu.Item className={styles.crcb_menuitem} key="mail">首页</Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="notice" >社团公告</Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="activity" >社团活动</Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="prize" >社团奖</Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="all" >全部社团</Menu.Item>
                        </Menu>
                    </Header>
                    <Content className={styles.crcb_content}>
                        <div className={styles.crcb_content_word}>全部社团</div>
                        <div className={styles.crcb_content_word}>All The Clubs</div>
                        <div className={styles.crcb_content_allsearch}>
                            <Search className={styles.crcb_content_search}
                                placeholder="搜索社团"
                                onSearch={value => console.log(value)}
                                style={{ width: 300 }}
                            />
                            <div className={styles.crcb_content_searchword}>我要创建社团</div>
                        </div>
                        <Form className={styles.crcb_content_form}>
                            {/* <LazyLoad height={200} > */}
                            {/* 调用函数插入数组 */}
                            {this.showAllClub()}
                            {/* </LazyLoad> */}
                        </Form>
                    </Content>
                    <Footer className={styles.crcb_footer}>社团星</Footer>
                </Layout>
            </div >
        );
    }
}
export default Form.create()(index);