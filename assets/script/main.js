//#region DataObject
const TopicItemDataObject = {
  contnet: "",
  url: "",
};
//#endregion

//#region Component
class Component {
  /**@type {Node} */
  node = null;
  constructor(data) {
    Object.assign(this, data);
    this.create();
  }

  create() {
    throw new Error("Method not implemented");
  }
}

class TopicItem extends Component {
  content = "";
  url = "";

  constructor(data = TopicItemDataObject) {
    super(data);
  }

  create() {
    this.node = document.createElement("a");
    this.node.className = "btn";
    this.node.innerHTML = this.content;
    this.node.href = this.url;
  }
}

//#endregion

const renderTopicOnPageHeader = async () => {
  try {
    let { data: topicList } = await axios.get("/data/topic-list.json");

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

const main = async () => {
  await renderTopicOnPageHeader();
}

main();
