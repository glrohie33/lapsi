<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Lapsi</title>
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/vendors/css/vendors.min.css') }}">
        {{-- <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/vendors/css/charts/apexcharts.css') }}"> --}}
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/vendors/css/extensions/tether-theme-arrows.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/vendors/css/extensions/tether.min.css') }}">
        {{-- <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/vendors/css/extensions/shepherd-theme-default.css') }}"> --}}
        <!-- END: Vendor CSS-->

        <!-- BEGIN: Theme CSS-->
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/bootstrap.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/bootstrap-extended.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/colors.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/components.min.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/themes/dark-layout.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/themes/semi-dark-layout.css') }}">

        <!-- BEGIN: Page CSS-->
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/core/menu/menu-types/vertical-menu.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/core/colors/palette-gradient.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/pages/app-user.css' )}}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/pages/dashboard-analytics.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/pages/card-analytics.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/plugins/tour/tour.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('public/app-assets/css/pages/authentication.css') }}">

        <!-- END: Page CSS-->

        <!-- BEGIN: Custom CSS-->
        <link rel="stylesheet" type="text/css" href="{{ asset('public/assets/css/style.css') }}">
        <!-- END: Custom CSS-->
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('public/css/app.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
        </style>
    </head>
    <body class="vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns">
        <div id='app'>
            <app></app>
        </div>
    </body>

    <script src="{{ asset('public/app-assets/vendors/js/vendors.min.js') }}"></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    {{-- <script src="{{  asset('public/app-assets/vendors/js/extensions/tether.min.js')}}"></script> --}}
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="{{asset('public/app-assets/js/core/app.js')}}"></script>
    {{-- <script src="{{asset('public/app-assets/js/scripts/components.js')}}"></script> --}}
    <script src="{{ asset('public/js/app.js') }}" defer></script>

    <!-- END: Theme JS-->

    <!-- BEGIN: Page JS-->
    {{-- <script src="{{asset('public/app-assets/js/scripts/datatables/datatable.js')}}"></script> --}}
    {{-- <script src="{{  asset('public/app-assets/js/scripts/pages/dashboard-analytics.js')}}"></script> --}}
</html>
