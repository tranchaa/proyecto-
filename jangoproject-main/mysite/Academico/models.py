from django.db import models

# Create your models here.

#Modelos entidad restaurante

class Restaurante(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    direccion = models.CharField(max_length=50)
    junaeb = models.CharField(max_length=5, help_text="Ingrese Si o No posee pago Junaeb")
    vegano = models.CharField(max_length=5, help_text="Ingrese Si o No posee menu vegano")
    latitud = models.DecimalField(max_digits=30, decimal_places=30)
    longitud = models.DecimalField(max_digits=30, decimal_places=30)
    veggie = models.CharField(max_length=5)
       #las imagenes se guardan en la carpeta media
    

