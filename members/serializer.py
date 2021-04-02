from rest_framework import serializers
from .models import Request

class RequestSerializer(serializers.ModelSerializer):

	name = serializers.CharField()
	email = serializers.EmailField()
	chapter_of_interest = serializers.CharField()


	class Meta: 
		model = Request
		fields= ('name', 'email', 'chapter_of_interest')