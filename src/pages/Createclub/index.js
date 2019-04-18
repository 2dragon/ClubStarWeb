import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Menu, Icon, Input, Select, DatePicker, Upload, message, Button,Modal } from 'antd';
import axios from 'axios';
import { Link } from 'dva/router';


const { Header, Footer, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

class index extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    //提交函数
    handleSubmit = e => {
        e.preventDefault();
        // loading;
        //表单获取
        this.props.form.validateFields((err, values) => {
            // 解构取值
            if (!err) {
                const { clubname, createdate, introduce, clublogo, clubstyle } = values;
                // 发起网络请求
                // axios({
                //     method: 'post',
                //     url: '',
                //     data: {
                //         clubname, createdate, introduce, clublogo, clubstyle
                //     }
                // }).then(res => {
                //     if (res.status === 200 && res.data) {
                //         if (res.data.status === 'success') {
                //             message.success('社团创建成功！');
                //         }
                //     }
                // });
                axios({
                    method: 'post',
                    url: 'http://192.168.6.104:8081/club/upload',
                    data: {
                        clublogo
                    }
                }).then(res => {
                    if (res.status === 200 && res.data) {
                        if (res.data.status === 'success') {
                            message.success('图片上传成功！');
                        }
                    }
                });
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
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
                            <Menu.Item className={styles.crcb_menuitem} key="prize" ><Link to={'/Home'}>社团奖</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="all" ><Link to={'/Allclub'}>全部社团</Link></Menu.Item>
                            <Menu.Item className={styles.crcb_menuitem} key="per" ><Link to={'/Personal'}>个人中心</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content className={styles.crcb_content}>
                        <div className={styles.crcb_content_word}>创建社团 : </div>
                        <Form className={styles.crcb_content_form}>
                            <Form.Item label="社团名称:" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('clubname', {
                                    //验证规则
                                })(
                                    <Input className={styles.crcb_content_form_item_con} />
                                )}
                            </Form.Item>
                            <Form.Item label="成立时间:" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('createdate', {

                                })(<DatePicker />)}
                            </Form.Item>
                            <Form.Item label="社团简介:" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('introduce', {

                                })(
                                    <TextArea rows={4} className={styles.crcb_content_form_item_con} />
                                )}
                            </Form.Item>
                            <Form.Item label="上传头像:" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('clublogo', {
                                })(
                                    <div className="clearfix">
                                        <Upload
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={this.handlePreview}
                                            onChange={this.handleChange}
                                        >
                                            {fileList.length >= 1 ? null : uploadButton}
                                        </Upload>
                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                        </Modal>
                                    </div>
                                )}
                            </Form.Item>
                            <Form.Item label="社团类型" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('clubstyle')}
                                <Select className={styles.crcb_content_form_item_con} placeholder="请选择社团类型" >
                                    <Option value="create">创造类</Option>
                                    <Option value="study">学习类</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className={styles.crcb_content_form_btn}>
                                <Button onClick={this.handleSubmit} className={styles.crcb_content_form_btnitem} type="primary">提交</Button>
                                <Button onClick={this.handleSubmit} className={styles.crcb_content_form_btnitem} type="primary">删除</Button>
                            </Form.Item>
                        </Form>
                    </Content>
                    <Footer className={styles.crcb_footer}>社团星</Footer>
                </Layout>
            </div>
        );
    }
}
export default Form.create()(index);