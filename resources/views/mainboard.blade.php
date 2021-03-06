<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>jorro</title>
  <link rel="stylesheet" href="{{ mix('css/app.css') }}"/>
  <script type="text/javascript">
      window.Laravel = window.Laravel || {};
      window.Laravel.csrfToken = "{{ csrf_token() }}";
  </script>
</head>
<body>
<div id="app">
  <main-header></main-header>

  <main id="main-cnt" :style="{ 'padding-top': fixedHeight + 'px'}">
    <router-view></router-view>
  </main>
</div>

<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
