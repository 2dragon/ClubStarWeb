import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.scss';
import {Form, Icon, Input, Button, Breadcrumb} from 'antd';

class index extends Component {

    // 验证密码与确认密码是否一致
    validatorForm = (rule, value, callback) => {
        if (value && rule.pattern && !value.match(rule.pattern)) {
            callback(rule.message);
        } else {
            callback();
        }
    };

    //提交按钮发起post请求函数
    LoginSubmit = e => {
        e.preventDefault();
        //表单获取
        this.props.form.validateFields((err, values) => {
            // 解构取值
            if (!err) {
                const { phoneNum, pwd, } = values;
                // 发起网络请求
                axios({
                    method: 'post',
                    url: '',
                    data: {
                        phoneNum, pwd,
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

    //虚拟Dom
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.regi_page}>
                <div className={styles.regi_bg}>
                    <div className={styles.regi_main}>
                        <div className={styles.regi_icon}></div>
                        {/* login注册 */}
                        <Form className={styles.regi_form}  >
                            <br />
                            <div>社团星账号登陆</div>
                            <Form.Item label="手机号码:" className={styles.regi_form_item} >
                                {getFieldDecorator('phoneNum', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '手机号码不能为空，请输入手机号码！'
                                        },
                                        {
                                            len: 11,
                                            message:
                                                '请继续输入至11位哦！'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号码" />
                                )}
                            </Form.Item>
                            <Form.Item label="请输入密码:" className={styles.regi_form_item} >
                                {getFieldDecorator('pwd', {
                                    rules: [
                                        {
                                            min: 6,
                                            message: '密码至少为6位！'
                                        }
                                    ]
                                })(
                                    <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={this.LoginSubmit} className={styles.regi_form_btn}>立即登陆</Button>
                            </Form.Item>
                            <Breadcrumb className={styles.regi_form_href}>
                                <Breadcrumb.Item><a href="#/Register">立即注册</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="#/Forgetpsd">忘记密码</a></Breadcrumb.Item>
                            </Breadcrumb>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
export default Form.create()(index);
