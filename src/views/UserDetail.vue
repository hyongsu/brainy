<template>
<h1>UserDetail</h1>
<h2>{{ $route.params.id }}</h2>
<h3>{{ id }}</h3>
</template>
<script>
export default {
    props: {
        id: String
    }
}
</script>