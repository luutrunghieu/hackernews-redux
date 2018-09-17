import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewTab from "./NewTab";
import SavedTab from "./SavedTab";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";
import { fetchStoryIds, fetchStories } from "../actions/action";
import "./App.css";
const { Header, Footer, Content } = Layout;

const store = createStore(reducer, applyMiddleware(thunk));
const getFirst = async () => {
  await store.dispatch(fetchStoryIds());
  const ids = store.getState().storyIds.slice(0, 30);
  store.dispatch(fetchStories(ids));
};
getFirst();
store.dispatch(fetchStoryIds());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="layout">
            <Header className="header">
              <div className="logo"><Link to="/">Hacker News</Link></div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                className="header-menu"
              >
                <Menu.Item key="1">
                  <Link to="/">New Story</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/saved">Saved Story</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px" }}>
              <Route exact path="/" component={NewTab} />
              <Route exact path="/saved" component={SavedTab} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
