<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="js/libs/jquery-2.1.3.js"></script>
        <script src="js/libs/bootstrap.js"></script>
        <script src="js/main.js"></script>
        <script src="js/pushPop.js"></script>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" href="css-libs/meyer-reset.css">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <header class="container">
            <section class="row">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="glyphicon glyphicon-list"></span>
                            </button>
                            <a class="navbar-brand" href="home">
                                <img alt="Brand" src="imgs/game_icon.jpg">
                            </a>
                        </div>
<!--                         <form class="navbar-form navbar-left" role="search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Looking for something?">
                            </div>
                            <button type="submit" class="btn btn-default wow">Search</button>
                        </form> -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav categoryContainer">
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>

        <main class="container">
            <section class="row">
                <div class="col-sm-2">
                    <div class="sidebar-nav">
                        <div class="navbar navbar-default" role="navigation">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="glyphicon glyphicon-list"></span>
                                </button>
                                <span class="visible-xs navbar-brand">Sidebar menu</span>
                            </div>
                            <div class="navbar-collapse collapse sidebar-navbar-collapse">
                                <ul class="nav navbar-nav">
                                    <li class="buttonCategory"><a>Categories</a></li>
                                    <li class="buttonPage"><a>Pages</a></li>
                                </ul>
                            </div><!--/.nav-collapse -->
                        </div>
                    </div>
                </div>
                <section class="mySidebar col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xs-offset-1
                col-sm-offset-1">
                    <form class="form-horizontal adminFormular">
                        <div class="homeAdmin adminMenuPage activeMenuPage">
                        <h1>Welcome to the admin!</h1>
                        <p>Start to choose something in the sidebar menu...</p>
                        </div>

                        <div class="openPage adminMenuPage">
                        </div>

                        <div class="allcategories adminMenuPage">
                            <h1>All categories</h1>
                            <div class="form-group">
                                <div class="col-sm-8 allCategoriesContainer">
                                    <ul class="list-group">
                                    </ul>
                                </div>
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary newCategory">New category</button>
                                </div>
                            </div>
                        </div>

                        <div class="allpages adminMenuPage">
                            <h1>All pages</h1>
                            <div class="form-group">
                                <div class="col-sm-8 allPagesContainer">
                                    <ul class="list-group">
                                    </ul>
                                </div>
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-primary newPage">New page</button>
                                </div>
                            </div>
                        </div>

                        <div class="editCategory adminMenuPage">
                            <h1>Edit category</h1>
                            <div class="form-group editCategoryField">
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-success saveCategory">Save</button>
                                    <button type="button" class="btn btn-danger deleteCategory">Delete</button>
                                </div>
                            </div>
                        </div>

                        <div class="editPage adminMenuPage">
                            <h1>Edit page</h1>
                            <div class="form-group editPageField">
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-success savePage">Save</button>
                                    <button type="button" class="btn btn-danger deletePage">Delete</button>
                                </div>
                            </div>
                        </div>

                        <div class="addAsPage adminMenuPage">
                            <h1>Create page</h1>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Title</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="titleValue" value="Untitled">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Section</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="sectionValue">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label"> Content </label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" id="contentValue" rows="7"></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Add to category: </label>
                                <div class="col-sm-8">
                                    <select id="pageSelectCategory">
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label"> Register page </label>
                                <div class="col-sm-8">
                                    <div class="col-sm-12">
                                        <button type="button" class="btn btn-success submitPage">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="addAsCategory adminMenuPage">
                            <h1>Create category</h1>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Title</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="titleValueCategory" value="Untitled">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label"> Register category </label>
                                <div class="col-sm-8">
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button type="button" class="btn btn-success submitCategory">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </section>
            </section>
        </main>

        <footer>
            <h2 class="contactUs">Contact us: </h2>
            <div class="informationContainer">
            </div>
        </footer>

    </body>
</html>