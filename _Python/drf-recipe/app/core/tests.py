from unittest.mock import patch

from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.core.management import call_command
from django.db.utils import OperationalError

from core import models


def sample_user(email='test@london.com', password='testpass'):
    """Create a sample user"""
    return get_user_model().objects.create_user(email, password)

class ModelTests(TestCase):
    def test_create_user_email_successful(self):
        """Test creating a new user email with an email is successful"""
        email = "test@london.com"
        password = "password123"
        user = get_user_model().objects.create_user(email=email, password=password)
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalized(self):
        """Test the email for a new user is normalized"""
        email = "test@LONDON.com"
        user = get_user_model().objects.create_user(email, "test124")

        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_email(self):
        """Test creating user with no email raises error"""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, "test123")

    def test_create_new_superuser(self):
        """Test creating a new superuser"""
        user = get_user_model().objects.create_superuser("test@london.com", "test123")
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)


class AdminSiteTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.admin_user = get_user_model().objects.create_superuser(
            email="admin@london.com", password="password123"
        )
        self.client.force_login(self.admin_user)
        self.user = get_user_model().objects.create_user(
            email="user@london.com", password="password123", name="Test User"
        )

    def test_user_listed(self):
        """Test that users are listed on user page"""
        url = reverse("admin:core_user_changelist")
        res = self.client.get(url)

        self.assertContains(res, self.user.name)
        self.assertContains(res, self.user.email)

    def test_user_change_page(self):
        """ Test that user edit page works"""
        url = reverse("admin:core_user_change", args=[self.user.id])
        # /admin/core/user/1
        res = self.client.get(url)

        self.assertEqual(res.status_code, 200)

    def test_create_user_page(self):
        """ Test that create user page works"""
        url = reverse("admin:core_user_add")
        res = self.client.get(url)

        self.assertEqual(res.status_code, 200)


class CommandTests(TestCase):
    def test_wait_for_db_ready(self):
        """Test waiting for db when db is available"""
        with patch("django.db.utils.ConnectionHandler.__getitem__") as gi:
            gi.return_value = True
            call_command("wait_for_db")
            self.assertEqual(gi.call_count, 1)

    @patch("time.sleep", return_value=True)
    def test_wait_for_db(self, ts):
        """Test waiting for db"""
        with patch("django.db.utils.ConnectionHandler.__getitem__") as gi:
            gi.side_effect = [OperationalError] * 5 + [True]
            call_command("wait_for_db")
            self.assertEqual(gi.call_count, 6)

    def test_tag_str(self):
        """Test the tag string representation"""
        tag = models.Tag.objects.create(
            user=sample_user(),
            name='Vegan'
        )

        self.assertEqual(str(tag), tag.name)

    # def test_ingredient_str(self):
    #     """Test the ingredient string respresentation"""
    #     ingredient = models.Ingredient.objects.create(
    #         user=sample_user(),
    #         name='Cucumber'
    #     )

    #     self.assertEqual(str(ingredient), ingredient.name)

    # def test_recipe_str(self):
    #     """Test the recipe string representation"""
    #     recipe = models.Recipe.objects.create(
    #         user=sample_user(),
    #         title='Steak and mushroom sauce',
    #         time_minutes=5,
    #         price=5.00
    #     )

    #     self.assertEqual(str(recipe), recipe.title)

    # @patch('uuid.uuid4')
    # def test_recipe_file_name_uuid(self, mock_uuid):
    #     """Test that image is saved in the correct location"""
    #     uuid = 'test-uuid'
    #     mock_uuid.return_value = uuid
    #     file_path = models.recipe_image_file_path(None, 'myimage.jpg')

    #     exp_path = f'uploads/recipe/{uuid}.jpg'
    #     self.assertEqual(file_path, exp_path)