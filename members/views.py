from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .serializer import RequestSerializer
from .models import Request
# Create your views here.


class PostMember(generics.CreateAPIView):
	serializer_class = RequestSerializer

	def post(self, request):
		data = request.data
		resquests = Request.objects.all()
		print(request.data)
		data_serialized = RequestSerializer(data)

		if data_serialized.is_valid():
			Request.objects.create(data = data_serialized)
		
		return Response(data)



