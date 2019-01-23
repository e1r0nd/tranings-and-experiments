import datetime


class User:
    """ A member of FriendFace. For now it stores name and DOB. """

    def __init__(self, full_name, birthday):
        self.name = full_name
        self.birthday = birthday

    def age(self):
        """ Returns the age of a user. """
        today = datetime.date(2012, 1, 1)
        yyyy = int(self.birthday[0:4])
        mm = int(self.birthday[4:6])
        dd = int(self.birthday[6:8])

        dob = datetime.date(yyyy, mm, dd)
        age_in_days = (today - dob).days
        age_in_years = age_in_days / 365
        return int(age_in_years)


user1 = User("Dave Bowman", "20180102")

print(user1.name, user1.birthday)
print(user1.age())
