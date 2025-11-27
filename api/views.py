from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .models import Profile, Experience, Project, Expertise, ContactMessage
from .serializers import (
    ProfileSerializer, ExperienceSerializer, ProjectSerializer,
    ExpertiseSerializer, ContactMessageSerializer
)

class ProfileDetailView(RetrieveAPIView):
    serializer_class = ProfileSerializer
    def get_object(self):
        # Always return the first profile (or create one if missing)
        return Profile.objects.first() or Profile.objects.create(name="Default Name")

class ExperienceListView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ExpertiseListView(ListAPIView):
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer

class ContactMessageCreateView(CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
