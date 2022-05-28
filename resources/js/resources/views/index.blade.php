<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('/images/logo.png') }}">
    <title>Angela Rios</title>

</head>
<body>
<div id="root">
    <script src="{{ mix('js/app.js') }}" defer></script>
</div>
</body>
</html>
