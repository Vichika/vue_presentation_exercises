<template>
    <div class="media-left">
        <figure class="image is-96x96">
            <img :src="frameWork.pix">
        </figure>
    </div>
</template>
<script>
export default {
   name: 'media-thumbnail',
    props: {
        frameWork: {
            type: Object
        }
    }
}
</script>

<style>

</style>


