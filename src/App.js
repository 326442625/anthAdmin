import React, { Component } from 'react';
import { Layout, notification, Icon } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { responsive,updateUser} from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from './routes';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        var userName=localStorage.getItem('bwUser');
        this.props.dispatch(updateUser({ userName: userName })); 
        this.getClientWidth();
        window.onresize = () => {
            this.getClientWidth(); 
        }
    }
    componentDidMount() {
      
    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const clientWidth = document.body.clientWidth;
        this.props.dispatch(responsive({isMobile: clientWidth <= 992})); 
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() { 
        const { userInfo, responsive } = this.props;
        return (
            <Layout>
              {!responsive.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
              <Layout style={{flexDirection: 'column'}}>
                  <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={userInfo.userName || {}} />
                  <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                      <Routes auth={userInfo} />
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                  React-Admin ©2017 Created by 865470087@qq.com
                  </Footer>
                  </Layout>
                
                {/* {
                    responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                } */}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const {responsive,userInfo} = state;
    return {responsive,userInfo};
};
 
export default connect(mapStateToProps)(App);
