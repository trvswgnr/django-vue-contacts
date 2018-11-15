from rest_framework import viewsets, filters
from .models import Contact
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('contact_id', 'contact_name', 'contact_email')
