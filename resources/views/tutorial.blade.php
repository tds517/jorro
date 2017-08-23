<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tutorial</title>
  <link rel="stylesheet" href="css/app.css"/>
  <script type="text/javascript">
      window.Laravel = window.Laravel || {};
      window.Laravel.csrfToken = "{{csrf_token()}}";
  </script>
</head>
<body style="padding: 4px">

<div id="app" v-bind:title.="title_">
  @{{ message }}
  <p v-if="seen">mienai</p>
  <p v-if="!seen">mieru?</p>
  <ul>
    <li v-for="(row, idx) in arr">
      @{{ idx }} - @{{ row.text }}
    </li>
  </ul>
  <button v-on:click="addRow">Add1</button><br>
  <button @click="addRow">Add2</button><br>
  <input type="text" v-model="text_message" v-bind:disabled="disabled">
  <p style="color: red">@{{ text_message }}</p>
  <button v-on:click="toggleDisabled">Toggle</button>

  <ol>
    <!-- コンポーネントのsampは、app変数かつループ変数のrowですよ、というバインド -->
    <compo-sample v-for="row in arr" v-bind:samp="row"></compo-sample>
  </ol>

  <span v-once>@{{ text_message }}</span>
  <p>Reversed: @{{ reversedMessage }}</p>
  <p :class="{ red: isRed, bold: isBold }" @click="toggleBold">
    クリックすると太さ変わります？
  </p>
  <button @click="toggleRed">色操作ボタン</button>
  <p :class="doubleStyled">
    上の文字に連動します。算出プロパティで。
  </p>
  <p :class="[{ red: isRed }, 'bold']">
    配列で指定してみる。
  </p>
  <br/>
  <template v-if="seen">
    <h3>Hello</h3>
    <p>I like Sushi</p>
  </template>
  <div v-if="!seen">
    I'm hungry!
  </div>
  <div v-else>
    I'm not hungry.
  </div>
  <br>
  <div v-show="disabled">
    SHOW!!!!
  </div>
  <div v-if="disabled">
    SHOW2!!!
  </div>
  <br/>

  <template v-for="(val, key, idx) in loopObj">
    <p>@{{ idx }}.@{{ key }}: @{{ val }}</p>
  </template>
</div>

<script src="js/app.js"></script>

</body>
</html>
