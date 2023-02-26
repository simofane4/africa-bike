from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request,"account/login.html")
def password_forget(request):
    return render(request,"account/password_forget.html")
def signup(request):
    return render(request,"account/signup.html")