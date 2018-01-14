<template>
    <pre>
        {{ message }}
    </pre>
</template>
<script>
    import bus from '../bus.js'

    export default {
        data: function () {
            return {
                message: 'Hello'
            }
        },
        computed: {
            result: function () {
                // in component B's created hook
                var self = this;

                bus.$on('id-selected', function (id) {
                    self.message = id;
                })
            }
        }
    }
</script>