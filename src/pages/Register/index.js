import React, { Component } from 'react';
// import { connect } from 'dva';
import styles from './index.scss';
import {
  Form, Icon, Input, Select, Button
} from 'antd';
const { Option } = Select;
class index extends Component {

  // 自定义表单校验规则
  validatorForm = (rule, value, callback) => {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      callback(rule.message);
    } else {
      callback();
    }
  };


  //提交函数
  handleSubmit = e => {
    Request('/users.json', {
      method: 'post',
      // data: { , pwd }
    }).then(res => {
      if (res.status === 200 && res.data) {
        this.props.history.push('/login');
      }
    });
  };
  //虚拟dom
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.regi_page}>
        <div className={styles.regi_bg}>
          <div className={styles.regi_main}>
            <div className={styles.regi_icon}></div>
            <Form className={styles.regi_form}>
              <Form.Item label="手机号码:" className={styles.regi_form_item} >
                {getFieldDecorator('phoneNum', {
                  rules: [
                    {
                      required: true,
                      message: '手机号码不能为空，请输入手机号码！'
                    },
                    {
                      // pattern: phoneNum_reg,
                      validator: this.validatorForm,
                      message:
                        '请输入正确的密码格式：6-16位字母、数字或特殊字符 _-.'
                    }
                  ]
                })
                  (
                    <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号码" />
                  )}
              </Form.Item>
              <Form.Item label="请设置密码:" className={styles.regi_form_item} >
                <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请设置密码" />
              </Form.Item>
              <Form.Item label="请确认密码:" className={styles.regi_form_item} >
                <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请确认密码" />
              </Form.Item>
              <Form.Item label="请输入昵称:" className={styles.regi_form_item} >
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入昵称" />
              </Form.Item>
              <Form.Item label="选择性别" className={styles.regi_form_item} >
                <Select placeholder="请选择性别" >
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select>
              </Form.Item>
              <Form.Item >
                <Button onClick={this.handleSubmit} type="primary" className={styles.regi_form_btn}>立即注册</Button>
              </Form.Item>
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
