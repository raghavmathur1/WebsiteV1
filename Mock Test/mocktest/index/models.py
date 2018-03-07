from django.db import models

class question(models.Model):
	qs = models.CharField(max_length = 700)
	qsno = models.CharField(max_length = 100)
	option1 = models.CharField(max_length = 700)
	option2 = models.CharField(max_length = 700)
	option3 = models.CharField(max_length = 700)
	option4 = models.CharField(max_length = 700)
	paperno = models.CharField(max_length = 100)

	def __str__(self):
		return self.qs