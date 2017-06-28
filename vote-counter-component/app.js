const vote_component = {
    template: `
        <div class="column is-1">
            <div>
                <span class="icon is-medium" v-on:click="increment">
                    <i class="fa fa-thumbs-o-up"></i>
                </span>
            </div>
            <div class="content has-text-left" id="counter-container">
                <h3 >&nbsp; {{ framework.votes }}</h3>
            </div>
            <div>
                <span class="icon is-medium" v-on:click="decrement">
                    <i class="fa fa-thumbs-o-down"></i>
                </span>
            </div>
        </div>
    `,
    props: {
        framework: Object
    },
    data() {
        return {}
    },
    methods: {
        increment(name) {
            this.$emit('increment', this.framework.name);
        },
        decrement(name) {
            this.$emit('decrement', this.framework.name);
        }
    }
}

const thumbnail_component = {
    template: `
        <div class="column is-2">
            <h3>{{framework.name}}</h3>
            <figure class="image is-128x128">
                <img v-bind:src="framework.pix" alt="Image">
            </figure>
        </div>
    `,
    props: {
        framework: Object
    }
}


const widget_component = {
    template: `
        <div class="box columns" v-for="framework in frameWorkList">
            <vote-counter v-bind:framework="framework" v-on:increment="increment($event)" v-on:decrement="decrement($event)"></vote-counter>
            <thumbnail v-bind:framework="framework"></thumbnail>
        </div>
    `,
    props: {
        framework: Object
    },
    components: {
        'vote-counter': vote_component,
        'thumbnail': thumbnail_component,
    },
    methods: {
        increment(name) {
            console.log(name);
            for (var i = 0; i < this.frameworkList.length; i++) {
                if (name == this.frameworkList[i].name) {
                    var countUpdate = this.frameworkList[i].votes++;
                    Vue.set(this.frameworkList[i], "votes", countUpdate);
                }
            }
        },
        decrement(name) {
           console.log(name);
            for (var i = 0; i < this.frameworkList.length; i++) {
                if (name == this.frameworkList[i].name) {
                    var countUpdate = this.frameworkList[i].votes--;
                    Vue.set(this.frameworkList[i], "votes", countUpdate);
                }
            }
        }
    },

    data() {
        return {
            frameworkList: [{
                    name: "Vue.js",
                    pix: "https://vuejs.org//images/logo.png",
                    votes: 0
                },
                {
                    name: "React.js",
                    pix: "http://daynin.github.io/clojurescript-presentation/img/react-logo.png",
                    votes: 0
                },
                {
                    name: "Ember.js",
                    pix: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200",
                    votes: 0
                },
                {
                    name: "Angular.js",
                    pix: "https://angularjs.org/img/ng-logo.png",
                    votes: 0
                },
            ]
        }
    }
}

// Root Vue Instance
const vi = new Vue({
    data: {

    },
    methods: {
        increment(name) {
            
        },
        decrement(name) {
            
        }
    },
    components: {
        'widget': widget_component
    },
    computed: {
        rankedList() {

        }
    }

}).$mount('#app');

/**
 *  Cutting down the number of components,
 *  The widget component will now house the array of objects
 *  and house the other two components.
 *  Need to test to get it to work
 *  make sure the $emit of events to the parent is working 
 *  properly. Then when that's all working properly,
 *  need to use Vue.set() to order the array based on votes.
 */ 