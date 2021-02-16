<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0" />
    <meta name="theme-color" content="#ffffff" />

    <title>Smart Condominium</title>

    <meta name="description" content="Um template construído para ecommerces em Laravel e Vuejs." />
    <meta name="author" content="Eduardo Neves" />
    <meta name="robots" content="index,nofollow" />

    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="canonical" href="{{ url('/') }}" />

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

    @if (parse_url(url('/'), PHP_URL_SCHEME) == 'HTTPS')
        <link rel="stylesheet" href="{{ secure_asset('css/fa/all.min.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('css/app.css') }}">
    @else
        <link rel="stylesheet" href="{{ asset('css/fa/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @endif
</head>

<body>

    <div id="app"></div>

    @if (parse_url(url('/'), PHP_URL_SCHEME) == 'HTTPS')
        <script src="{{ secure_asset('js/app.js') }}"></script>
    @else
        <script src="{{ asset('js/app.js') }}"></script>
    @endif
</body>

</html>
