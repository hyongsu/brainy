<script>
// import Card from "./Card.vue"  추가 해야 함. (설명상)
export default {
    props: {
        imgUrl: String,
        name: String,
        birth: String
    },

    data() {
        return {
            color: "red"
        }
    },

    computed: {
        compareBirth() {
            console.log("comparedBirth invoked in computed") 
            if (Date.parse(this.birth) < Date.parse('1970-01-01')) {
                this.color = "green"
                return 'older'
            } else {
                this.color = "red"
                return 'younger'
            }
        }
    },
    

    // methods: {
    //     comparedBirth() {
    //         if (Date.parse(this.birth) < Date.parse('1970-01-01')) {
    //             return 'older'
    //         } else {
    //             return 'younger'
    //         }
    //     }
    // }

    // data()
    // methods
}
/* */

</script>
<template>
<div class="card">
    <img :src="imgUrl" alt="profile image" class="card__img">   <!--  중요 바인딩 필요 (:)  -->
    <h2 class="card__name">{{ name }}</h2>
    <h2>{{ birth }}</h2>
    <h3 class="card__birth">{{ compareBirth }}</h3>
    <h3 class="card__birth">{{ compareBirth }}</h3>
    <!-- <h2 class="card__birth">{{ (Date.parse(birth) < Date.parse('1970-01-01')) ? 'older' : 'younger' }}</h2> -->
    <!-- <h2 class="card__birth">{{ (Date.parse(birth) < Date.parse('1970-01-01')) ? 'older' : 'younger' }}</h2> -->
</div>
<!-- -->
</template>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 250px;
    background-color: cadetblue;
    box-shadow: 1px 1px 10px gray;
}
.card__img {
    width: 100px;
    height: 120px;
    object-fit: cover;
    border-radius: 100%;
    border: solid 2px;
    padding: 5px;
    background-color: white;
    /* box-shadow: 1px 1px 10px gray; */
}
.card__name {
    font-weight: 700;
}
.card__description {
    font-weight: 300;
    color: "red";
}
/* */
</style>