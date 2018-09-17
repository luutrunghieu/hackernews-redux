import React, { Component } from "react";
import { List, Avatar } from "antd";
import { removeStory } from "../actions/action";
import { connect } from "react-redux";
class SavedTab extends Component {
  state = {};
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.savedStories}
        renderItem={item => (
          <List.Item
            actions={[
              <span onClick={() => this.props.removeStory(item)}>Remove</span>
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href={`${item.url}`}>{item.title}</a>}
              description={`${item.score} points by ${
                item.by
              } 8 hour ago | hide | past | web | discuss`}
            />
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  savedStories: state.savedStories
});

export default connect(
  mapStateToProps,
  { removeStory: removeStory }
)(SavedTab);
