from rest_framework import routers
from contact.viewsets import ContactViewSet

router = routers.DefaultRouter()

router.register(r'contact', ContactViewSet)
