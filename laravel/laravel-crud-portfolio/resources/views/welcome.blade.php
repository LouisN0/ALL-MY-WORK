@extends("layouts.app")

@section('content')
    @include('partials.header')

    @include('pages.hero')
    @include('pages.about')
    @include('pages.facts')
    @include('pages.skills')
    @include('pages.portfolio')
    @include('pages.testimonial')
    @include('pages.contact')

    @include('partials.footer')
@endsection
