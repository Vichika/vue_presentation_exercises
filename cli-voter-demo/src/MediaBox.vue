<template>
    <div>
        <div class="box" v-for="(frameWork, i) in rankedList" :key="frameWork.name">
            <article class="media">
                <media-thumbnail :frameWork="frameWork"></media-thumbnail>
                <media-content :frameWork="frameWork" :index="i" @thumbsUpClicked="thumbsUpClicked" @thumbsDownClicked="thumbsDownClicked"></media-content>
            </article>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import MediaThumbnail from "./MediaThumbnail.vue"
import MediaContent from "./MediaContent.vue"

export default {
    name: 'media-box',
    data() {
        return {
            frameWorkList:
            [
                {
                    name: "Vue.js",
                    pix: "https://vuejs.org//images/logo.png",
                    votes: 0,
                    description: 'The Progressive JavaScript Framework'
                },
                {
                    name: "React.js",
                    pix: "http://daynin.github.io/clojurescript-presentation/img/react-logo.png",
                    votes: 0,
                    description: 'A JavaScript Library for building user interfaces'
                },
                {
                    name: "Ember.js",
                    pix: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200",
                    votes: 0,
                    description: 'A framework for creating ambitious web applications'
                },
                {
                    name: "Angular.js",
                    pix: "https://angularjs.org/img/ng-logo.png",
                    votes: 0,
                    description: 'Superheroic JavaScript MVW Framework'

                }
            ]
        }

    },

    methods: {
        thumbsUpClicked(i) {
            const updatedCount = this.frameWorkList[i].votes + 1;
            Vue.set(this.frameWorkList[i], 'votes', updatedCount);
        },
        thumbsDownClicked(i) {
            const updatedCount = this.frameWorkList[i].votes - 1;
            Vue.set(this.frameWorkList[i], 'votes', updatedCount);
        }
    },

    computed: {
        rankedList() {
            return this.frameWorkList.sort(function (a, b) {
                return b.votes - a.votes;
            });

        }
    },
    components: {
        'media-thumbnail': MediaThumbnail,
        'media-content': MediaContent
    }
}
</script>
<style>
   
</style>


