import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Menu, Input, Card ,Button} from 'antd';
// import axios from 'axios';
// import LazyLoad from 'react-lazyload';
import { Link } from 'dva/router';

const { Header, Footer, Content } = Layout;
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
        { imgherf: require("../../assets/lunbo1.jpg"), clubname: '河豚', description: 'des4' },
        { imgherf: require("../../assets/lunbo2.jpg"), clubname: '静安寺', description: 'des4' },
        { imgherf: require("../../assets/lunbo3.jpg"), clubname: '哈佛是', description: 'des4' },
        { imgherf: require("../../assets/lunbo4.jpg"), clubname: '河加收欸经', description: 'des4' },
        { imgherf: require("../../assets/lunbo5.jpg"), clubname: '发护肤', description: 'des4' },
        { imgherf: require("../../assets/lunbo6.jpg"), clubname: '可控硅', description: 'des4' },
        { imgherf: require("../../assets/lunbo1.jpg"), clubname: 'iifc', description: 'des4' },
        { imgherf: require("../../assets/lunbo2.jpg"), clubname: '哦哦是', description: 'des4' },
        { imgherf: require("../../assets/lunbo4.jpg"), clubname: '能克服', description: 'des4' },
        { imgherf: require("../../assets/lunbo3.jpg"), clubname: '哦hi奥', description: 'des4' },
        { imgherf: require("../../assets/lunbo4.jpg"), clubname: '内控机制', description: 'des4' },
        { imgherf: require("../../assets/lunbo5.jpg"), clubname: '吗v九九', description: 'des4' },
        { imgherf: require("../../assets/lunbo6.jpg"), clubname: '奥ii哦', description: 'des4' },
        { imgherf: require("../../assets/lunbo2.jpg"), clubname: '河豚', description: 'des4' },
    ]
    //懒加载展示所有的社团

    render() {
        const content = [];
        for (let club of this.clubArray) {
            //用循环插入到 Dom节点中
            content.push(
                <Card
                    hoverable
                    style={{ width: 240 }}
                    // 这个地址的变量不知道怎么解决-----半解决
                    //循环也不知道怎么解决-----已解决
                    cover={<img alt="图片显示不了" src={club.imgherf}/>}
                    className={styles.crcb_content_form_lazyload}
                >
                    <Meta
                        title={club.clubname}
                        description={club.description}
                    />
                </Card>
            )
        }
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Header className={styles.crcb_header}>
                        <div className={styles.crcb_logo}></div>
                        <Menu className={styles.crcb_menu} theme="light" mode="horizontal"
                            defaultSelectedKeys={['2']} style={{ lineHeight: '8vh', border: 'none' }} >
                            <Menu.Item className={styles.crcb_menuitem} key="mail"><Link to={'/Home'}>首页</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="notice" ><Link to={'/Home'}>社团公告</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="activity" ><Link to={'/Home'}>社团活动</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="prize" ><Link to={'/Home'}>社团荣誉</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="all" ><Link to={'/Allclub'}>全部社团</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="per" ><Link to={'/Personal'}>个人中心</Link></Menu.Item>
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
                            <Button className={styles.crcb_content_searchword}><Link to={'/Createclub'}>我要创建社团</Link></Button>
                        </div>
                        <Form ref="all" className={styles.crcb_content_form}>
                            {/* <LazyLoad height={200} > */}
                            {/* 调用函数插入数组 */}
                            {content}
                            {/* </LazyLoad> */}
                        </Form>
                    </Content>
                    <Footer className={styles.crcb_footer}>
                        <div className={styles.crcb_footer_word}>社团星</div>
                    </Footer>
                </Layout>
            </div >
        );
    }
}
export default Form.create()(index);