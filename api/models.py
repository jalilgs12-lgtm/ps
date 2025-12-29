from django.db import models

# 1. PROFILE (Matches Main.tsx & Footer.tsx)
class Profile(models.Model):
    name = models.CharField(max_length=100, default="Yuji Sato")
    job_title = models.CharField(max_length=100, default="Full Stack Engineer")
    # Allows uploading the avatar image
    avatar = models.ImageField(upload_to='profile_images/', help_text="Upload your avatar image here")
    github_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)
    facebook_link = models.URLField(blank=True)
    instagram_link = models.URLField(blank=True, help_text="Link to your Instagram profile")
    whatsapp_link = models.CharField(max_length=20, blank=True, help_text="Enter number with country code (e.g., +213541120811)")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Profile Configuration"
        verbose_name_plural = "Profile Configuration"

# 2. EXPERIENCE (Matches Timeline.tsx)
class Experience(models.Model):
    job_title = models.CharField(max_length=100)  # e.g. "Technology Consultant"
    location = models.CharField(max_length=100)   # e.g. "Dallas, TX"
    date = models.CharField(max_length=50)        # e.g. "2022 - present"
    description = models.TextField(help_text="Role description")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.job_title} at {self.location}"

    class Meta:
        ordering = ['-created_at'] # Newest jobs first

# 3. PROJECTS (Matches Project.tsx)
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    project_link = models.URLField()
    image = models.ImageField(upload_to='project_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

# 4. EXPERTISE (Matches Expertise.tsx)
class Expertise(models.Model):
    title = models.CharField(max_length=100) # e.g. "Full Stack Web Development"
    description = models.TextField()
    # We store tags as "React, Python, SQL" and split them later
    tags = models.TextField(help_text="Comma-separated list (e.g. React, Python, SQL)")
    # Dropdown to pick the icon
    icon_name = models.CharField(max_length=50, choices=[
        ('react', 'React Icon (Briefcase/Code)'),
        ('docker', 'Docker Icon (DevOps)'),
        ('python', 'Python Icon (AI/LLM)')
    ], default='react')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_at']

# 5. MESSAGES (Matches Contact.tsx)
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
