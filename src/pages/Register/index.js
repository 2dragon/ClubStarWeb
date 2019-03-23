import React, { Component } from 'react';
// import { connect } from 'dva';
import axios from 'axios';
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

  //自定义校验两次密码是否一致
  validatorPwd = (rule, value, callback) => {
    if (value !== this.props.form.getFieldValue('pwd')) {
      callback(rule.message);
      return;
    }
    callback();
  };

  //提交函数
  handleSubmit = e => {
    e.preventDefault();
    //表单获取
    this.props.form.validateFields((err, values) => {
      // 解构取值
      if (!err) {
        const { phoneNum, pwd,sex } = values;
        // 发起网络请求
        axios({
          method: 'post',
          url: '',
          data: {
            phoneNum, pwd,sex
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
            <Form className={styles.regi_form}>
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
                  <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号码" />
                )}
              </Form.Item>
              <Form.Item label="请设置密码:" className={styles.regi_form_item} >
                {getFieldDecorator('pwd', {
                  rules: [
                    {
                      min: 6,
                      message: '密码至少为6位！'
                    }
                  ]
                })(
                  <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请设置密码" />
                )}
              </Form.Item>
              <Form.Item label="请确认密码:" className={styles.regi_form_item} >
                {getFieldDecorator('surepwd', {
                  rules: [
                    {
                      validator: this.validatorPwd,
                      message: '两次输入的密码不一致！'
                    }
                  ]
                })(
                  <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请确认密码" />
                )}
              </Form.Item>
              <Form.Item label="请输入昵称:" className={styles.regi_form_item} >
                {getFieldDecorator('petName', {
                  rules: [
                    {
                      required: true,
                      message: '请一定要输入你的昵称哦!'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入昵称" />
                )}
              </Form.Item>
              <Form.Item label="选择性别" className={styles.regi_form_item} >
              {getFieldDecorator('sex')}
                <Select placeholder="请选择性别" >
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select>
              </Form.Item>
              <Form.Item >
                <Button onClick={this.handleSubmit} className={styles.regi_form_btn}>立即注册</Button>
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
