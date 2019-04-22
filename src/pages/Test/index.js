import React, { Component } from 'react';
import styles from './index.scss';

class index extends Component {
    render() {
        return (
            <div className={styles.crcb_page} >
                <form action="http://192.168.6.104:8081/club/upload" method="post" enctype="multipart/form-data">
                    选择文件：<input type="file" name="uploadFile" /><br />
                    <input type="submit" value="上传" />
                </form>
            </div >
        );
    }
}
export default index;