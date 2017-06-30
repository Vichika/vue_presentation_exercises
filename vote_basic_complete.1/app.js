Vue.component('media-thumbnail',{
    template: '#media-thumbnail',
    props: ['frameWork']
});

Vue.component('media-content', {
    template: '#media-content',
    props: ['frameWork', 'index'],
    methods: {
        increment() {
            this.$emit('onThumbsUp', this.index);
        },
        decrement() {
            this.$emit('onThumbsDown', this.index);
        }
    }
});

Vue.component('media-box', {
    template: '#media-box',
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
        onThumbsUp(i) {
            const updatedCount = this.frameWorkList[i].votes + 1;
            Vue.set(this.frameWorkList[i], 'votes', updatedCount);
        },
        onThumbsDown(i){
            const updatedCount = this.frameWorkList[i].votes - 1;
            Vue.set(this.frameWorkList[i], 'votes', updatedCount);
        }
    },
    computed: {
        rankedList() {
            return this.frameWorkList.sort((a,b) => {
                return b.votes - a.votes 
            });
        }
    }
});


// Root Vue Instance
const app = new Vue().$mount('#app');
