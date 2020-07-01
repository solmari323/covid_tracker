<template>
  <div class="index">
      <div class="article-blurb">
        <img src="../../../assets/girl.svg" class="blurb-svg" alt="">
        <div>
            <h3>5 Symptoms of <br/>Covid-19</h3>
            <p>Read more</p>
        </div>
      </div>

    <ToDos :todos ="todos" @check-todo=markComplete>
    </ToDos>

    <Tabs @change="v => { graph_type = v }"/>

    <CountryList>
        <CountryCard colour="primary" country="united-kingdom" :graph_type="graph_type"></CountryCard>
        <CountryCard colour="secondary" country="japan" :graph_type="graph_type"></CountryCard>
        <CountryCard colour="tertiary" country="germany" :graph_type="graph_type"></CountryCard>
    </CountryList>

  </div>
</template>

<script>
import CountryList from "./components/CountryList"
import CountryCard from "./components/CountryCard"
import ToDos from "./components/ToDos"
import Tabs from "../../utils/Tabs"
export default {
    name:"Index",
    components: { CountryList, CountryCard, ToDos, Tabs},
    data: function () {
        return {
            todos:[{
                id:0,
                todo: "Make Bread",
                completed: false,
            },{
                id:1,
                todo: "Do Code",
                completed: true,
            },{
                id:2,
                todo: "Watch Netflix",
                completed: false,
            }],
            graph_type: "confirmed",
        }
    },
    methods: {
        markComplete(id) {
            this.todos[id].completed = !this.todos[id].completed;
        }
    },
}
</script>

<style scoped>

    .index {
        margin-top: 10vw;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .article-blurb {
        background-color: #ECF4F3;
        height: 15vh;
        width: 85vw;
        border-radius: 10px;

        display: flex;
        justify-content: space-evenly;
    }

    .article-blurb div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .article-blurb h3 {
        font-size: 15px;
        font-weight: 500;
        color: #1F6357;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .article-blurb p {
        font-size: 10px;
        font-weight: 500;
        color: #1F6357;
        margin-top: 5px;
        width: 9ch;
        

        box-shadow: inset 0 -5px 0 0 #9BD8CD;
    }

    .blurb-svg {
        height: 17vh;
        position: relative;
        bottom: 2vh;
    }

</style>