import React, { Component } from 'react';
// import axios from 'axios';
import styles from './index.scss';
import { Form, Icon, Input, Button } from 'antd';

class index extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.regi_page}>
                <div className={styles.regi_bg}>
                    <div className={styles.regi_main}>
                        <div className={styles.regi_icon}></div>
                        {/* 重置密码 */}
                        <div>重置密码</div>
                        <Form className={styles.regi_resetsecrit} >
                            <Form.Item label="输入密码:" className={styles.regi_form_item} >
                                {getFieldDecorator('pwd', {
                                    rules: [
                                        {
                                            min: 6,
                                            message: '密码至少为6位！'
                                        }
                                    ]
                                })(
                                    <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入新的密码" />
                                )}
                            </Form.Item>
                            <Form.Item label="确认密码:" className={styles.regi_form_item} >
                                {getFieldDecorator('surepwd', {
                                    rules: [
                                        {
                                            validator: this.validatorPwd,
                                            message: '两次输入的密码不一致！'
                                        }
                                    ]
                                })(
                                    <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请再次输入新的密码" />
                                )}
                            </Form.Item>
                            <Form.Item >
                                <Button className={styles.regi_form_btn} ><a href="#/Login">下一步</a></Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form.create()(index);
