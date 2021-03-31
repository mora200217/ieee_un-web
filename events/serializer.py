from rest_framework import serializers

class ChapterSerializer(serializers.Serializer):
	name = serializers.CharField()
	mail = serializers.CharField()

class EventSerializer(serializers.Serializer):
	name = serializers.CharField()
	chapter =  ChapterSerializer()
	date = serializers.DateField()
	hour = serializers.TimeField()
	info = serializers.CharField()
