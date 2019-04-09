import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.scss';
import {
    Form, Icon, Input, Button, Select
} from 'antd';


class index extends Component {

    //提交按钮发起post请求函数
    ForgetpsdSubmit = e => {
        e.preventDefault();
        //表单获取
        this.props.form.validateFields((err, values) => {
            // 解构取值
            if (!err) {
                const { question, answer, } = values;
                // 发起网络请求
                axios({
                    method: 'post',
                    url: '',
                    data: {
                        question, answer,
                    }
                }).then(res => {
                    // console.log(res);
                    if (res.status === 200 && res.data) {
                        // console.log(this.props.history);
                        this.props.history.push('/login');
                    }
                });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.regi_page}>
                <div className={styles.regi_bg}>
                    <div className={styles.regi_main}>
                        <div className={styles.regi_icon}></div>
                        {/* 忘记密码 */}
                        <div>重置密码</div>
                        <Form className={styles.regi_forget} >
                            <Form.Item label="密保问题" className={styles.regi_form_item} >
                                {getFieldDecorator('question')}
                                <Button className={styles.regi_form_mes}>你妈妈的名字是？</Button>
                            </Form.Item>
                            <Form.Item label="输入密保答案:" className={styles.regi_form_item} >
                                {getFieldDecorator('answer', {
                                    rules: [
                                        {
                                            // required: true,
                                            message: '请一定要输入你的答案哦!'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密保问题的答案" />
                                )}
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={this.ForgetpsdSubmit} className={styles.regi_form_btn}><a href="#/Resetpsd">下一步</a></Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form.create()(index);
