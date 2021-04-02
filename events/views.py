from django.shortcuts import render
from rest_framework import generics 
from .models import Event
from .serializer import EventSerializer
from rest_framework.response import Response

from django.core.mail import send_mail


class ExtractEvents(generics.ListAPIView):
	'''
	send_mail(
    'Nuevo miembro muestra interés', # Title 
    'El estudianteo niaosdnasoidnasodinasoidnasodiasndiasodn',
    'IEEE UN ',
    ['ceimtun@unal.edu.co'],
    fail_silently=False,
	)
	'''
	print('	')
	serializer_class = EventSerializer
	queryset = Event.objects.all()
	
	def get(self, request):
		queryset = Event.objects.all()
		info = EventSerializer(queryset, many = True)
		return Response(info.data	)



