const renderTopicButton = (topic) => {
  let button = document.createElement("a");
  button.className = "btn";
  button.content = topic.content;
  button.href = topic.url;
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
    
     const [ pageHeader ] = document.getElementsByClassName("page-header");
  
     for(const topic of topicList)
     {
       pageHeader.appendChild(renderTopicButton(topic));
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

main();
