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
  <main-header></main-header>

  <main id="main-cnt" v-bind:style="{ 'padding-top': fixedHeight + 'px'}">
    <router-view></router-view>
  </main>
</div>

<script src="js/app.js"></script>

</body>
</html>
