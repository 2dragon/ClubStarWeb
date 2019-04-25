import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Layout, Input, Card, Button } from 'antd';
// import axios from 'axios';
// import LazyLoad from 'react-lazyload';
import Cswheader from '../../components/Cswheader';

const { Footer, Content } = Layout;


class index extends Component {
    render() {
        return (
            <div className={styles.crcb_page} >
                <Layout>
                    <Cswheader />
                    <Content className={styles.crcb_content}>
                      
                    
                    </Content>
                    <Footer className={styles.crcb_footer}>
                        <div className={styles.crcb_footer_word}>社团星</div>
                    </Footer>
                </Layout>
            </div >
        );
    }
}
export default index
