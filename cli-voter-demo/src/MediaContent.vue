<template>
    <div class="media-content">
        <div class="content">
            <p>
                {{frameWork.description}}
            </p>
        </div>
        <nav class="level">
            <div class="level-left">
                <a class="level-item">
                    <span class="icon is-medium">
                        <i class="fa fa-thumbs-o-up" @click="increment"></i>
                    </span>
                </a>
                <a class="level-item">
                    <span class="count">{{ frameWork.votes }}</span>
                </a>
                <a class="level-item">
                    <span class="icon is-medium">
                        <i class="fa fa-thumbs-o-down" @click="decrement"></i>
                    </span>
                </a>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'media-content',
        props: {
            frameWork: {
                type: Object
            },
            index: {
                type: Number
            }
        },
        methods: {
            increment() {
                this.$emit('thumbsUpClicked', this.index);
            },
            decrement() {
                this.$emit('thumbsDownClicked', this.index);
            }
        }
    }
</script>
<style>
     .count {
            font-size: 35px;
            padding: 0 10px;
        }
</style>

