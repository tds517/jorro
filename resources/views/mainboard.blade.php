<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>jorro</title>
  <link rel="stylesheet" href="css/app.css"/>
  <script type="text/javascript">
      window.Laravel = window.Laravel || {};
      window.Laravel.csrfToken = "{{ csrf_token() }}";
  </script>
</head>
<body>
<div id="app">

    <img id="logo" src="img/logo.png">

    <nav>
      <ul class="clearfix flex">
        <li>
          <a href="#about">
            <i class="fa fa-fw fa-commenting-o"></i> ABOUT
          </a>
        <li>
          <a href="#about">
            <i class="fa fa-fw fa-picture-o"></i> ILLUSTS
          </a>
        <li>
          <a href="#about">
            <i class="fa fa-fw fa-book"></i> COMICS
          </a>
        <li>
          <a href="#about">
            <i class="fa fa-fw fa-camera-retro"></i> PHOTOS
          </a>
        <li>
          <a href="#about">
            <i class="fa fa-fw fa-apple"></i> APPS
          </a>
    </nav>
</div>

<script src="js/app.js"></script>

</body>
</html>
