import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout,  Icon, Input, Select, DatePicker, Upload, Button, Modal } from 'antd';
// import axios from 'axios';
import { Link } from 'dva/router';
import Cswheader from '../../components/Cswheader'

const { Footer, Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

class index extends Component {
    //保存状态
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };
    //图片默认上传后可见，图片取消上传后，让图片不可见
    handleCancel = () => this.setState({ previewVisible: false });

    //设置文件的地址与可见性
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    // 上传文件改变时，重新赋值
    handleChange = ({ fileList }) => this.setState({ fileList })

    //提交函数
    handleSubmit = e => {
        e.preventDefault();
        // const formData = new FormData();
        // // const fileUrl = AjaxUrl+"data/fileUpload.svt";
        // formData.append('files[]', this.state.fileList);
        // axios({
        //     method: 'post',
        //     url: '',
        //     data: {
        //         formData
        //     }
        // }).then(res => {
        //     if (res.status === 200 && res.data) {
        //         if (res.data.status === 'success') {
        //             message.success('图片上传成功！');
        //         }
        //         else message.error('图片上传失败');
        //     }
        // });
        // loading;
        //表单获取
        // this.props.form.validateFields((err, values) => {
        //     // 解构取值
        //     if (!err) {
        //         const { clubname, createdate, introduce, clubstyle } = values;
        //         // let {url} = ;
        //         let uploadFile = this.state.fileList[0];

        //         // const uploadFile = new FormData();
        // uploadFile.append('clublogo', this.state.fileList);
        // console.log("我的天那！");
        // console.log(uploadFile);

        // console.log(uploadFile.get("fileList[]"));
        // 发起网络请求
        //     axios({
        //         headers: {
        //             'Content-Type': 'multipart/form-data;charset=UTF-8',
        //         },
        //         method: 'post',
        //         url: 'http://192.168.6.104:8081/club/upload',
        //         data: {
        //             // clubname, createdate, introduce, clubstyle, 
        //             uploadFile: uploadFile
        //         },

        //     }).then(res => {
        //         if (res.status === 200 && res.data) {
        //             if (res.data.status === 'success') {
        //                 message.success('社团创建成功！');
        //             }
        //         }
        //     });
        // }
        // });
        // let uploadFile= fileList[0].uid;
        // console.log("我的天那！");
        // console.log(uploadFile);
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
                    <Cswheader/>
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
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                    action="http://192.168.6.104:8081/club/upload"
                                    headers=" 'Content-Type': 'multipart/form-data'"
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="upload_img" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </Form.Item>
                            <Form.Item label="社团类型" className={styles.crcb_content_form_item} >
                                {getFieldDecorator('clubstyle')}
                                <Select className={styles.crcb_content_form_item_con} placeholder="请选择社团类型" >
                                    <Option value="create">创造类</Option>
                                    <Option value="study">学习类</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <div className={styles.crcb_content_form_btn}>
                            <Button onClick={this.handleSubmit} className={styles.crcb_content_form_btnitem} type="primary">提交</Button>
                            <Button onClick={this.handleSubmit} className={styles.crcb_content_form_btnitem} type="primary"><Link to={'/Allclub'}>返回</Link></Button>
                        </div>
                    </Content>
                    <Footer className={styles.crcb_footer}>
                        <div className={styles.crcb_footer_word}>社团星</div>
                    </Footer>
                </Layout>
            </div>
        );
    }
}
export default Form.create()(index);