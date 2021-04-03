<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <new-friend @add-contact="addContact"></new-friend>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone-number="friend.phoneNumber"
                :email-address="friend.emailAddress"
                @delete="deleteContact"
            ></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

export default {
  components: { FriendContact, NewFriend },
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
    methods: {
        addContact(name, phone, email) {
            const newFriendContact = {
                id: new Date().toISOString(),
                name,
                phoneNumber: phone,
                emailAddress: email
            };
            this.friends.push(newFriendContact);
        },
        deleteContact(id) {
            this.friends = this.friends.filter(friend => friend.id !== id)
        }
    },
    computed() {}
};
</script>
