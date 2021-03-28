<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123 32434',
                    email: 'some@email.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Doe',
                    phone: '098 323234',
                    email: 'julie@email.com'
                }
            ]
        }
    },
    methods() {},
    computed() {}
};
</script>
