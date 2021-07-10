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
    let topicList = [];

    try {
      let { data } = await axios.get(Path.join('/data', location.pathname, "topic-list.json"));
      topicList = data;
    }
    catch (err) {
      if (err.response.status !== 404) {
        console.error("Get topic list not success", err);
        return;
      }
    }

    if (!Array.isArray(topicList)) {
      let err = new Error("topicList not is an array");
      err.topicList = topicList;
      throw err;
    }

    if (topicList.length === 0) {
      return;
    }

    const [pageHeader] = document.getElementsByClassName("page-header");

    for (const topic of topicList) {
      let topicItem = new TopicItem(topic);
      pageHeader.appendChild(topicItem.node);
    }
  }
}

class Main {
  static async render() {
    await (new HeaderTopicItemList()).render().catch(console.error);
  }
}

Main.render();
