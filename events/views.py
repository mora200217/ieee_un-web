from django.shortcuts import render
from rest_framework import generics 
from .models import Event
from .serializer import EventSerializer
from rest_framework.response import Response


class ExtractEvents(generics.ListAPIView):
	serializer_class = EventSerializer
	queryset = Event.objects.all()
	def get(self, request):
		queryset = Event.objects.all()
		info = EventSerializer(queryset, many = True)
		return Response(info.data	)



