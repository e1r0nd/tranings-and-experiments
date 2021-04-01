<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :name="friend.name"
                :phone-number="friend.phoneNumber"
                :email-address="friend.emailAddress"
            ></friend-contact>
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
                    phoneNumber: '123 32434',
                    emailAddress: 'some@email.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Doe',
                    emailAddress: 'julie@email.com'
                }
            ]
        }
    },
    methods() {},
    computed() {}
};
</script>
