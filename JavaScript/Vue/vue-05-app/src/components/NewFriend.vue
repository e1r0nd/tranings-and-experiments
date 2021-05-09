<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name:
                <input type="text" v-model="enteredName" />
            </label>
        </div>
        <div>
            <label>Phone:
                <input type="tel" v-model="enteredPhone" />
            </label>
        </div>
        <div>
            <label>E-Mail:
                <input type="email" v-model="enteredEmail" />
            </label>
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
}
</script>
