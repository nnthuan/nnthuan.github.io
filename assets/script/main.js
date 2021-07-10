const renderTopicButton = (topic) => {
  let button = document.createElement("a", { className: "btn", content: topic.content, href: topic.url });
  return button;
}

const renderTopicOnPageHeader = async () => {
  try
  {
     let { data: topicList } = await axios.get("/data/topic-list.json");
     
     if(!Array.isArray(topicList))
     {
        let err =  new Error("topicList not is an array");
        err.topicList = topicList;
        throw err;
     }
  
     for(const topic of topicList)
     {
        console.log(renderTopicButton);
     }
  }
  catch(err)
  {
    console.error("Get topic list not success",err);   
  }
}

const main = async () => {
  await renderTopicOnPageHeader();
}

var pageHeader = document.getElementsByClassName("page-header");

main();
