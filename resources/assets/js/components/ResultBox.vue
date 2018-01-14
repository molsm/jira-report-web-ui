<template>
    <pre>
        {{ report }}
    </pre>
</template>
<script>
    export default {
        data: function () {
            return {
                message: 'Hello'
            }
        },
        computed: {
            report() {
                return this.$store.state.report.x;
            }
        }
    }
</script>