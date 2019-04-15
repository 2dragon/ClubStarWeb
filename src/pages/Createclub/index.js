import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Menu, Icon, Input, Select, DatePicker, Upload, message, Button } from 'antd';
import axios from 'axios';

const { Header, Footer, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
class Avatar extends React.Component {
    state = {
        loading: false,
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
        );
    }
}

class index extends Component {
    //提交函数
    handleSubmit = e => {
        e.preventDefault();
        // loading;
        //表单获取
        this.props.form.validateFields((err, values) => {
            // 解构取值
            if (!err) {
                const {  clubname,createdate,introduce,clublogo,clubstyle} = values;
                // 发起网络请求
                axios({
                    method: 'post',
                    url: ' ',
                    data: {
                        clubname,createdate,introduce,clublogo,clubstyle
                    }
                }).then(res => {
                    if (res.status === 200 && res.data) {
                        if (res.data.status === 'success') {
                            message.success('社员创建成功！');
                        }
                    }
                });
            }
        });
    };

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
                                    <div>
                                        <Avatar className={styles.crcb_content_form_item_con} />
                                        <div>只支持jpg格式</div>
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