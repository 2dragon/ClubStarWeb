import React, { Component } from 'react';
// import axios from 'axios';
import styles from './index.scss';
import {
    Form, Icon, Input, Button, Select
} from 'antd';

const { Option } = Select;

class index extends Component {
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
                            <Form.Item label="选择密保问题" className={styles.regi_form_item} >
                                {getFieldDecorator('secret')}
                                <Select placeholder="选择密保问题" >
                                    <Option value="father">您父亲的名字是?</Option>
                                    <Option value="mather">您母亲的名字是?</Option>
                                    <Option value="primary">您小学的名字是?</Option>
                                    <Option value="middle">您初中的名字是?</Option>
                                    <Option value="high">您高中的名字是?</Option>
                                </Select>
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
                                <Button className={styles.regi_form_btn}><a href="#/Resetpsd">下一步</a></Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form.create()(index);