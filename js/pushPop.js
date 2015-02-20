


/**
 * Navigation & history push/pop-state
 *
 */

//function to show/hide sections
function showPage(pageUrl) {







    loadThePage();
    reloadTheHeader();
    console.log("pageUrl: ", pageUrl);
    if(pageUrl == "categories"){
        $(".adminMenuPage").slideUp(300);
        listCategories();
        $(".allcategories").slideDown(300);
    }
    else if(pageUrl == false){
        console.log("hit");
        $("#greetings").slideDown(300);
    }
    else if(pageUrl == "pages"){
        listPages();
        $(".adminMenuPage").slideUp(300);
        $(".allpages").slideDown(300);
    }
    else if(!isNaN(pageUrl)){
        $(".openPage").empty();

        $.ajax ({
            url: "php/getdata.php",
            type: "post",
            dataType: "json",
            data: {
                "pagID" : pageUrl
            },
            success: function(data){
                console.log("load page success: ", data);
                $(".openPage").append("<h1 class='openPageSection'>"+ data[0].section +"</h1>");
                if(data[0].image_name.length == 0){
                    $(".openPage").append("<img class='openPageImage' src='imgs/no-image.jpg'>");
                }
                else {
                $(".openPage").append("<img class='openPageImage' src='imgs/"+ data[0].image_name +"'>");
                }
                $(".openPage").append("<p class='openPageContent'>"+ data[0].content +"</p>");
                $(".adminMenuPage").slideUp(300);
                $(".openPage").slideDown(300);
            },
            error: function(data){
                console.log("load page error: ", data);
            }
        });
        console.log("lolek");
    }
}


//go to "page" function
function goTo(href) {
  // Show a "page" in a section with the id corresponding
  // to the link's href value
  showPage(href);

  // Add the current "state/page" to our history of visited pages
  history.pushState(null,null,href);
}


//setup push/pop-state pushPopListeners for <a> tags
function pushPopListeners() {
  // When we click a link
  $(document).on("click","a",function(event){

    //if the user clicks a real http:// || https:// link,
    if ($(this).attr("href").indexOf("://") >=0) {
      //assume they are leaving the site
      return;
    }

    //prevent "empty" urls from affecting browsing
    if ($(this).attr("href") && $(this).attr("href") !== "#") {
      goTo($(this).attr("href"));
    }

    event.preventDefault();
  });


  // Add a pop state listener
  // (listen to forward/backward buttons in the browser)
  addEventListener("popstate",onPopAndStart);

  //and run once immediately (this function runs at DOM ready)
  onPopAndStart();

  // Run this function on popstate and initial load
  function onPopAndStart(){
    //alert("The popstate event is triggered!");

    // Read our url and extract the page name
    // the characters after the last slash
    var l = location.href;
    //might need to change this
    var pageName = l.substring(l.lastIndexOf("/")+1);

    // if no pageName set pageName to false
    pageName = pageName || false;
    console.log("pageName: ", pageName);
    //and showPage
    showPage(pageName);
  }
}