from django.http import HttpResponse
from django.shortcuts import render
from .models import question

def index(request):
	quest = question.objects.all()
	context = {'quest': quest,	}
	return render(request, 'papers/paper1/index.html', context)
	