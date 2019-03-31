import React, { Component } from 'react';
import axios from 'axios';
import styles from './index.scss';
import { Form, Icon, Input, Select, Button, message } from 'antd';
// import { Spin } from 'antd';
// import loading from '../../components/Loading'
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
    if (value !== this.props.form.getFieldValue('password')) {
      callback(rule.message);
      return;
    }
    callback();
  };

  //提交函数
  handleSubmit = e => {
    e.preventDefault();
    // loading;
    //表单获取
    this.props.form.validateFields((err, values) => {
      // 解构取值
      if (!err) {
        const { phone, password, username, sex } = values;
        // 发起网络请求
        axios({
          method: 'post',
          url: 'http://192.168.6.104:8081/user/save',
          data: {
            phone, password, username, sex
          }
        }).then(res => {
          if (res.status === 200 && res.data) {
            if (res.data.status === 'success') {
              message.success('注册成功！');
            }
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
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      // required: true,
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
              <Form.Item label="设置密码:" className={styles.regi_form_item} >
                {getFieldDecorator('password', {
                  rules: [
                    {
                      min: 1,
                      message: '密码至少为6位！'
                    }
                  ]
                })(
                  <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请设置密码" />
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
                  <Input type="password" prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请确认密码" />
                )}
              </Form.Item>
              <Form.Item label="输入昵称:" className={styles.regi_form_item} >
                {getFieldDecorator('username', {
                  rules: [
                    {
                      // required: true,
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
              {/* <Form.Item label="选择密保问题" className={styles.regi_form_item} >
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
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入昵称" />
                )}
              </Form.Item> */}
              <Form.Item >
                <Button onClick={this.handleSubmit} className={styles.regi_form_btn}>立即注册</Button>
              </Form.Item>
            </Form>
          </div>
          {/* <div className={styles.regi_form_loding} >
            <Spin size="large" />
          </div> */}
        </div>

      </div>
    );
  }

}
// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
export default Form.create()(index);
