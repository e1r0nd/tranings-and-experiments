from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):
    def test_create_user_email_successful(self):
        """Test creating a new user email with an email is successful"""