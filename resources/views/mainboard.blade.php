<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>jorro</title>
  <link rel="stylesheet" href="css/app.css"/>
  <script type="text/javascript">
      window.Laravel = window.Laravel || {};
      window.Laravel.csrfToken = "{{ csrf_token() }}";
  </script>
</head>
<body>
<div id="app">
  <header id="main-header" class="header-wrapper">
    <el-row :gutter="4" :type="flex" align="middle">
      <el-col :xs="16" :sm="14" :md="{span: 2, offset: 2}">
        <h1>
          <img id="logo" src="img/logo-gray.png">
        </h1>
      </el-col>

      <el-col :xs="4" :sm="6" :md="14">
          <nav id="main-navbar" class="navbar">
            <ul class="clearfix flex">
              <li>
                <a href="#about">
                  <i class="fa fa-fw fa-commenting-o"></i>
                </a>
                ABOUT
              <li>
                <a href="#illusts">
                  <i class="fa fa-fw fa-picture-o"></i>
                </a>
                ILLUSTS
              <li>
                <a href="#comics">
                  <i class="fa fa-fw fa-book"></i>
                </a>
                COMICS
              <li>
                <a href="#photos">
                  <i class="fa fa-fw fa-camera-retro"></i>
                </a>
                PHOTOS
              <li>
                <a href="#apps">
                  <i class="fa fa-fw fa-apple"></i>
                </a>
                APPS
          </nav>
      </el-col>

      <el-col :xs="4" :sm="4" :md="4">
        <nav id="accounts-navbar" class="navbar">
          <ul class="clearfix">
            <li>
              <a href="#twitter">
                <i class="fa fa-fw fa-twitter"></i>
              </a>
            <li>
              <a href="#instagram">
                <i class="fa fa-fw fa-instagram"></i>
              </a>
            <li>
              <a href="#github">
                <i class="fa fa-fw fa-github-alt"></i>
              </a>
          </ul>
        </nav>
      </el-col>
    </el-row>
  </header>
</div>

<script src="js/app.js"></script>

</body>
</html>
