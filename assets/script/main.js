class Path {
  static join(...parts) {
    const separator = '/';
    let replace = new RegExp(separator + '{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
  }
}

class Component {
  /**@type {Node} */
  node = null;

  constructor(data = {}) {
    Object.assign(this, data);
    this.create();
  }

  create() { }

  render() { }
}

class TopicItem extends Component {
  content = "";
  url = "";
  /**@type {HTMLAnchorElement} */
  node = null;

  constructor(data = { content: "", url: "" }) {
    super(data);
  }

  create() {
    this.node = document.createElement("a");
    this.node.className = "btn";
    this.node.innerHTML = this.content;
    this.node.href = this.url;
  }
}

class HeaderTopicItemList extends Component {
  constructor(data = {}) {
    super(data);
  }

  async render() {
    try {
      let { data: topicList } = await axios.get(Path.join('/data', location.pathname, "topic-list.json"));

      if (!Array.isArray(topicList)) {
        let err = new Error("topicList not is an array");
        err.topicList = topicList;
        throw err;
      }

      const [pageHeader] = document.getElementsByClassName("page-header");

      for (const topic of topicList) {
        let topicItem = new TopicItem(topic);
        pageHeader.appendChild(topicItem.node);
      }
    }
    catch (err) {
      console.error("Get topic list not success", err);
    }
  }
}

class Main {

  static async render() {
    await (new HeaderTopicItemList()).render().then(console.error);
  }

}

Main.render();
