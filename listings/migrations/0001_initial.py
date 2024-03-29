# Generated by Django 3.1.5 on 2021-01-16 18:02

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('categories', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='BaseListing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.CharField(blank=True, max_length=200)),
                ('description', models.TextField(blank=True)),
                ('price', models.FloatField()),
                ('city', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=200)),
                ('photo_main', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('add_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('update_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='categories.category')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='users.user')),
            ],
        ),
    ]
