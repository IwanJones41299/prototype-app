import React, { useState, useContext, useEffect, Component } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../Services/TodoService";
import { AuthContext } from "../Context/AuthContext";
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Image from '../Images/logo.ico';
import SubMenu from 'antd/lib/menu/SubMenu';
import { DesktopOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

const Todos = (props) => {
  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = e =>{
    e.preventDefault();
    TodoService.postTodo(todo).then(data =>{
        const { message } = data;
        resetForm();
        if(!message.msgError){
            TodoService.getTodos().then(getData =>{
                setTodos(getData.todos);
                setMessage(message);
            });
        }
        else if(message.msgBody === "UnAuthorized"){
            setMessage(message);
            authContext.setUser({username : "", role : ""});
            authContext.setIsAuthenticated(false);
        }
        else{
            setMessage(message);
        }
    });
}

  const onChange = (e) => {
    setTodo({ name: e.target.value });
  };

  const resetForm = () => {
    setTodo({name : ""})
  };

  return (
    <div className="App">
                <Layout>
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
  )
  
}

export default Todos;
