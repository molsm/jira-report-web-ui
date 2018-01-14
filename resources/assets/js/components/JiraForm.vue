<template>
    <div class="form">
        <form v-on:submit="getReport" action="#" method="post">
            <div class="field">
                <label class="label">Jira Host</label>
                <div class="control">
                    <input type="text" class="input" name="Jira Host" id="jirahost" placeholder="Jira Host" v-model="jiraHost">
                </div>
            </div>

            <div class="field">
                <label class="label">Jira Username</label>
                <div class="control">
                    <input type="text" class="input" name="jirausername" id="jirausername" placeholder="Jira username" v-model="jiraUsername">
                </div>
            </div>

            <div class="field">
                <label class="label">Jira Password</label>
                <div class="control">
                    <input type="password" class="input" placeholder="Jira Password" v-model="jiraPassword">
                </div>
            </div>

            <div class="field">
                <label class="label">Jira Worklog Username</label>
                <div class="control">
                    <input type="text" class="input" placeholder="Jira Worklog Username" v-model="jiraWorklogUsername">
                </div>
            </div>

            <div class="field">
                <label class="label">Date</label>
                <div class="control">
                    <input type="text" class="input" placeholder="YYYY-MM-DD" v-model="jiraDate">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button class="button is-link">Get report</button>
                </div>
            </div>

        </form>
    </div>
</template>
<script>
    // import JiraApi from 'jira-client';
    import bus from '../bus.js'

    export default {
        data: function () {
            return {
                jiraHost: '',
                jiraUsername: '',
                jiraPassword: '',
                jiraWorklogUsername: '',
                jiraDate: ''
            }
        },

        methods: {
            getReport: function (event) {
                event.preventDefault();
                console.log(this.jiraHost);
                bus.$emit('id-selected', 1)
                // var jira = new JiraApi({
                //     protocol: 'https',
                //     host: 'xxx',
                //     username: 'xxx,
                //     password: 'xxxx',
                //     apiVersion: '2',
                //     strictSSL: true
                // });
                //
                // jira.findIssue('LM-6')
                //     .then(issue => {
                //         debugger;
                //         console.log(`Status: ${issue.fields.status.name}`);
                //     })
                //     .catch(err => {
                //         console.error(err);
                //     });
            }
        }
    }
</script>