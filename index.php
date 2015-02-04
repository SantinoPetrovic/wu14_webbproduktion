<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="js/libs/jquery-2.1.3.js"></script>
        <script src="js/libs/bootstrap.js"></script>
        <script src="js/main.js"></script>
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
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">
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
<!-- <li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>k<span class='caret'></span></a><ul class='dropdown-menu' role='menu'></ul></li> -->
<!--                                 <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-expanded="false"> Anime Characters <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#"> Lelouch </a></li>
                                        <li><a href="#"> Midousuji Akira </a></li>
                                        <li><a href="#"> Kaiji </a></li>
                                        <li><a href="#"> Guts </a></li>
                                        <li><a href="#"> Hisoka </a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-expanded="false">Video Games <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#"> Final Fantasy XV </a></li>
                                        <li><a href="#"> Warcraft 3 </a></li>
                                        <li><a href="#"> Mario Kart 8 </a></li>
                                        <li><a href="#"> Dota 2 </a></li>
                                        <li><a href="#"> Dark Souls 2 </a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-expanded="false"> Board Games <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#"> Dominion </a></li>
                                        <li><a href="#"> Mahjong </a></li>
                                        <li><a href="#"> King of Tokyo </a></li>
                                        <li><a href="#"> Resistance </a></li>
                                        <li><a href="#"> Small World </a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                     aria-expanded="false"> Cosplay <span class="caret"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#"> Anime Cosplay </a></li>
                                        <li><a href="#"> Game Cosplay </a></li>
                                        <li><a href="#"> Marvel Cosplay </a></li>
                                        <li><a href="#"> TV-serie Cosplay </a></li>
                                    </ul>
                                </li>
                                 -->
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>

        <main class="container">
            <section class="row">
                <section class="mySidebar col-xs-10 col-sm-10 col-md-7 col-lg-7 col-xs-offset-1
                col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                    <form class="form-horizontal">

                        <h1>Admin page creator</h1>
                        <div class="form-group addAs">
                            <label class="col-sm-3 control-label"> Add as </label>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <button type="button" class="btn buttonCategory">Category</button>
                                        <button type="button" class="btn buttonPage">Page</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="addAsPage">

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Title</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="titleValue" value="Untitled">
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
                                <select id="allCategories">

                                    <option>hej</option><option>hejdå</option>
                                </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label"> Register page </label>
                                <div class="col-sm-8">
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn submitPage">Submit</button>
                                            <button type="button" class="btn pageCancel">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="addAsCategory">

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
                                            <button type="button" class="btn submitCategory">Submit</button>
                                            <button type="button" class="btn pageCancel">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </form>
                </section>
            </section>
        </main>
    </body>
</html>