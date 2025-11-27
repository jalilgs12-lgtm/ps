from rest_framework import serializers
from .models import Profile, Experience, Project, Expertise, ContactMessage

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'job_title', 'location', 'date', 'description']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'project_link', 'image']

class ExpertiseSerializer(serializers.ModelSerializer):
    tags_list = serializers.SerializerMethodField()

    class Meta:
        model = Expertise
        fields = ['id', 'title', 'description', 'tags_list', 'icon_name']

    # Converts string "React, Python" -> List ["React", "Python"]
    def get_tags_list(self, obj):
        return [tag.strip() for tag in obj.tags.split(',')] if obj.tags else []

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'sent_at']
        read_only_fields = ['sent_at']
        ordering = ['-sent_at']
