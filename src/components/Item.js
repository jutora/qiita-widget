import React from "react";
import Avatar from "components/Avatar";
import Tag from "components/Tag";
import Link from "components/Link";
import ThumbsUp from "components/ThumbsUp";

export default class Item extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    likes_count: React.PropTypes.number.isRequired,
    user: React.PropTypes.object.isRequired,
    created_at: React.PropTypes.string.isRequired,
    last: React.PropTypes.bool.isRequired
  };

  styles() {
    return {
      container: {
        fontFamily: "\"Helvetica Neue\", Helvetica, \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", Meiryo, sans-serif",
        fontSize: 16,
        borderBottom: "1px solid rgba(43,91,6,0.15)",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        padding: "8px 0"
      },
      item: {
        paddingLeft: 6,
        flex: 1
      },
      itemStatus: {
        fontSize: 12,
        lineHeight: "12px",
        color: "#999"
      },
      itemLink: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: "20px"
      },
      likes: {
        float: "right",
        fontSize: 12,
        color: "#999",
        lineHeight: "12px"
      }
    };
  }

  render() {
    const styles = this.styles();
    const urlBase = "http://qiita.com";
    if (this.props.last) {
      delete styles.container.borderBottom;
    }
    return (
      <div style={styles.container}>
        <Avatar
          url={urlBase + "/" + this.props.user.id}
          avatar={this.props.user.profile_image_url} />
        <div style={styles.item}>
          <div style={styles.likes}>
            <ThumbsUp />{" "}{this.props.likes_count}
          </div>
          <div style={styles.itemStatus}>
            <Link href={urlBase + "/" + this.props.user.id} target="_blank">{this.props.user.id}</Link>
            が{this.props.created_at}に投稿
          </div>
          <Link href={this.props.url} style={styles.itemLink} target="_blank">{this.props.title}</Link>
          <div>
            {this.props.tags.map((tag) => <Tag key={tag.name} name={tag.name} url={urlBase + "/tags/" + tag.name} />)}
          </div>
        </div>
      </div>
    );
  }
}
