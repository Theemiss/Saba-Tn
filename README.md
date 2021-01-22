# Saba-Tn

sudo -u postgres psql

### Available page 

* Media Folder Disbaled

* ALL page View and URLS Implemented

index : 127.0.0.1:8000

127.0.0.1:8000/login

127.0.0.1:8000/signup

http://127.0.0.1:8000/product

### CSS Template
* __footer : footer 

```
{% include 'partials/_footer.html' %}
```

* __navbar : navbar

```
{% include 'partials/_navbar.html' %}
```

* __hero : hero Section and Search bar

```
{% include 'partials/_hero.html' %}
```

* __topbar : topbar

```
{% include 'partials/_topbar.html' %}
```

* __navbarlog : navbar case user logged in  

### Signup
* Signup.html already implemented
* signupV2.html change include to it to test 

#### STATIC
* PATH mpp/static

any changed in layout or anything made there 

* /static

Collected by django any change there will not work



#### allauth urls:
accounts/signup/
accounts/login/accounts/logout/
accounts/password/change/
accounts/password/set/
accounts/inactive/
accounts/email/
accounts/confirm-email/
accounts/confirm-email/<key>/
accounts/password/reset/
accounts/password/reset/done/
accounts/password/reset/key/<uidb36>/
accounts/password/reset/key/done/
accounts/social/login/cancelled/
accounts/social/login/error/
accounts/social/signup/
accounts/social/connections/