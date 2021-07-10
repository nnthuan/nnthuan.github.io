const renderTopicOnPageHeader = async () => {
  try
  {
     let { data } = await axios.get("https://raw.githubusercontent.com/nnthuan/nnthuan.github.io/main/data/topic-list.json");
     console.log(data);
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
