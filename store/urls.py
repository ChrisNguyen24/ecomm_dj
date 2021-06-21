from django.urls import path, include
from . import views

urlpatterns = [
    #Leave as empty string for base url
    # path('test/', views.test ),
	path('', views.store, name="store"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
	path('update_item/', views.updateItem, name="update_item"),
	path('view_product/', views.viewProduct, name="view_product"),
	path('register/', views.register, name="register"),
	path('process_order/',views.processOrder, name="processOrder"),
	path('detail/',views.detail, name="detail"),
    path('accounts/', include('django.contrib.auth.urls')),
]