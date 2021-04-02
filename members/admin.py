from django.contrib import admin
from .models import Member, Request
# Register your models here.

admin.site.register(Request)

class AdminMember(admin.ModelAdmin):
	list_display = ('name', 'carreer', 'mail')

admin.site.register(Member, AdminMember)
