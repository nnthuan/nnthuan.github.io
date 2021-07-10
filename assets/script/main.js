const renderTopicOnPageHeader = async () => {
  try
  {
     let { data } = await axios.get("/data/topic-list.json");
     console.log(Object.assign({},data[0]));
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
