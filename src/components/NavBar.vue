<template>
<header>
      <div id="brand"><rounter-link :to="{name: 'home'}">Tutorial</rounter-link></div>
      <nav>
        <ul>
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'users'}">Users</router-link></li>
        </ul>
      </nav>
      <div id="hamburger-icon" :class="{open: isOpened}" @click="toggleMenu">
      <!-- <div calss="open"></div>
      <div></div> -->
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'users'}">Users</router-link></li>
        </ul>
      </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isOpened: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpened = !this.isOpened
        }
    }
}
</script>
<style>

body {
    background-color: darkgray;
}

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: black;
    padding: 0 10px;
    }
    header a {
    text-decoration: none;
    }
    ul {
    display: flex;
    list-style: none;
    gap: 20px;
    }
    li a {
    color: white;
    }
    #hamburger-icon {
    display: none;
    cursor: pointer;
    }
    #hamburger-icon div {
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 6px 0;
    }
    .open .bar1 {
    transform: rotate(-45deg) translate(-6px, 7px);
    }
    .open .bar2 {
    opacity: 0;
    }
    .open .bar3 {
    transform: rotate(45deg) translate(-6px, -7px);
    }
    #brand {
    font-size: 32px;
    font-weight: 700;
    }
    #brand a {
    color: coral;
    }
    .mobile-menu {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    height: 100px;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
    background-color: darkgray;
    }

    .open .mobile-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 600px) {
        .card-list .card {
            width: 100%;
        }

    header nav {
        display: none;
    }

    #hamburger-icon {
        display: block;
    }
    }
</style>
