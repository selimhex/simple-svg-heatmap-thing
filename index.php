<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <title>simple svg heatmap thing</title>
  <link rel="stylesheet" href="main.css">
  <style>

  </style>
</head>

<body class="with-sidebar">
  <section class="rapper">

    <article class="svg-container">
      <?php echo file_get_contents("audiQ8_xd1.svg"); ?>

    </article>
    <aside class=" sidebar">
      <ul class="stack accentcontrols">
        <!-- toggle layers/groups emphasis -->
      </ul>
      <ul class="stack togglecontrols">
        <!-- toggle layer visibility -->
      </ul>

      <!--div><button id="pulse_toggler" class="">Pulsate</button></div-->
    </aside>

  </section>

  <script defer src="script.js"></script>
</body>

</html>
