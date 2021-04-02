from django.db import models
from events.models import Chapter
# Create your models here.


class Member(models.Model):
	name = models.CharField(max_length = 200, verbose_name = "Nombre")
	mail = models.EmailField(verbose_name = "Correo")
	semester = models.PositiveSmallIntegerField(max_length = 200, verbose_name = "Matrícula")
	carreer = models.CharField(max_length = 200, verbose_name = "Carrera")
	age = models.PositiveSmallIntegerField(verbose_name = "Edad")
	gender = models.CharField(max_length = 200, verbose_name = "Genero uwu")
	chapters = models.ManyToManyField(Chapter, verbose_name = "Capítulos")

	class Meta:
		verbose_name = 'Miembro'
	def __str__(self):
		return self.name 

class Request(models.Model):
	request_date = models.DateField(auto_now_add = True)
	name = models.CharField(max_length = 200)
	email = models.EmailField()
	chapter_of_interest = models.CharField(max_length = 200)

	def clean_email(self):
		submitted_data = self.cleaned_data['email']
		if '@unal.edu.co' not in submitted_data:
			raise forms.ValidationError('You must register using a Gmail address')
		return submitted_data
	class Meta:
		verbose_name = 'Solicitud'
		verbose_name_plural = 'Solicitudes'

	def __str__(self): 
		return self.name



