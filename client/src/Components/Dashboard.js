import React, {Component} from 'react';
import fire from '../config/Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Image from '../images/logo.ico';
import SubMenu from 'antd/lib/menu/SubMenu';
import { DesktopOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
class Dashboard extends Component {

    render(){
        return(
            <div className="App">
                <Layout>
                <Header>
                    <img src={Image} className="logo-dash" width="40" height="40" alt="logo"/>
                    <button style={{float: 'right'}} className="btn btn-lg btn-logout" onClick={this.logout}>Logout</button>
                </Header>
                <Layout>
                <Sider>
                    <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
                        <Menu.Item key="Dashboard">
                            Dashboard
                        </Menu.Item>
                        <SubMenu key="sub1" title={ <span> <DesktopOutlined /> <span>About Apps</span> </span> }>
                            <Menu.ItemGroup key="AboutUs" title='About'>
                                <Menu.Item key="Item-One">Recipie Search</Menu.Item>
                                <Menu.Item key="Item-Two">Weather Search</Menu.Item>
                                <Menu.Item key="Item-Three">Application 3</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="sub2" title={ <span> <DesktopOutlined /> <span>The Apps</span> </span> }>
                            <Menu.ItemGroup key="AboutUs" title='The Aoos'>
                                <Menu.Item key="Item-Four">Recipie App</Menu.Item>
                                <Menu.Item key="Item-Five">Weather App</Menu.Item>
                                <Menu.Item key="Item-Six">Application 3</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="sub3" title={ <span> <DesktopOutlined /> <span>TBD</span> </span> }>
                            <Menu.ItemGroup key="AboutUs" title='TBD'>
                                <Menu.Item key="Item-Seven">TBD</Menu.Item>
                                <Menu.Item key="Item-Eight">TBD</Menu.Item>
                                <Menu.Item key="Item-Nine">TBD</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#ffffff', padding: 24, minHeight: 600 }}>Content</div>
                </Content>
                </Layout>
                <Footer style={{ textAlign: 'center'}}>Created by Iwan Jones ©2020</Footer>
                </Layout>
            </div>
        );
    }
}

export default Dashboard;

<div>
<ul className="list-group">
  {todos.map((todo) => {
    return <TodoItem key={todo._id} todo={todo} />;
  })}
</ul>
<br />
<form onSubmit={onSubmit}>
  <label htmlFor="todo">Enter your todo</label>
  <input
    type="text"
    name="todo"
    value={todo.name}
    onChange={onChange}
    className="form-control"
    placeholder="Please enter todos..."
  />
  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Submit
  </button>
</form>
{message ? <Message message={message} /> : null}
</div>
);