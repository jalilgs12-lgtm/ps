from django.contrib import admin
from .models import Profile, Experience, Project, Expertise, ContactMessage


# This registers them so they appear in the admin panel

admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Expertise)
admin.site.register(ContactMessage)
admin.site.register(Profile)




