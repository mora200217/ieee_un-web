from django.db import models

# Create your models here.
class Chapter(models.Model):
	name = models.CharField(max_length = 200)
	mail = models.EmailField(max_length = 300)

	def __str__(self):
		return self.name

class Event(models.Model): 
	name = models.CharField(max_length = 200)
	chapter = models.ForeignKey(Chapter, on_delete = models.CASCADE)
	date = models.DateField()
	hour = models.TimeField()
	info = models.TextField()

	def __str__(self):
		return  ('%s | %s') % (self.name, self.chapter.name)


	






