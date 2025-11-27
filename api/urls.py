from django.urls import path
from .views import (
    ProfileDetailView, ExperienceListView, ProjectListView,
    ExpertiseListView, ContactMessageCreateView
)

urlpatterns = [
    path('profile/', ProfileDetailView.as_view(), name='profile-detail'),
    path('experience/', ExperienceListView.as_view(), name='experience-list'),
    path('projects/', ProjectListView.as_view(), name='project-list'),
    path('expertise/', ExpertiseListView.as_view(), name='expertise-list'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact-create'),
]
