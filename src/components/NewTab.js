import React, { Component } from "react";
import { List, Avatar } from "antd";
import { saveStory } from "../actions/action";
import { connect } from "react-redux";
class NewTab extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.newStories}
        renderItem={item => (
          <List.Item
            actions={[
              <span
                onClick={() => {
                  this.props.saveStory(item);
                }}
              >
                Save
              </span>
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
  newStories: state.newStories
});

export default connect(
  mapStateToProps,
  { saveStory: saveStory }
)(NewTab);
