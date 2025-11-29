"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path # <--- Make sure 'include' and 're_path' are imported!
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    # NOTE: It's unusual to map 'jalil_dash/' to the admin.site.urls.
    # Usually, only one path maps to admin.site.urls.
    # I'll keep it for now, but ensure this is what you intend.
    path('jalil_dash/', admin.site.urls),
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('api/', include('api.urls')),

    # 💥 CRITICAL FIX: CATCH-ALL REACT ROUTE 💥
    # This must be the absolute last entry. It sends all unmatched URLs to index.html.
    re_path(r'^(?:.*)$', TemplateView.as_view(template_name='index.html')),
]

# urlpatterns = [
#     path('jalil_dash/', admin.site.urls),
#     path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
#     path('api/', include('api.urls')),
# ]
# i should register the home app urls here
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
