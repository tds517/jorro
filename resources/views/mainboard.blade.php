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
    <el-row :gutter="4" align="middle">
      <el-col :xs="16" :sm="14" :md="{span: 2, offset: 2}">
        <h1>
          <img id="logo" src="img/logo-gray.png">
        </h1>
      </el-col>

      <el-col :xs="4" :sm="6" :md="14">
        <navbar class="header__navbar"></navbar>
      </el-col>

      <el-col :xs="4" :sm="4" :md="4">
        <navbar-sns class="header__navbar-sns"></navbar-sns>
      </el-col>
    </el-row>
    <router-link to="/">INDEX</router-link>
    <router-link to="/about">ABOUT</router-link>
  </header>

  <div id="main-cnt">
    <router-view></router-view>
  </div>
</div>

<script src="js/app.js"></script>

</body>
</html>
