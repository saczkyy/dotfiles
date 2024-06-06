from rest_framework import views, response, permissions, status
from .serializer import UserSerializer, UserLoginSerializer
from .authentication import CustomUserAuthentication


class RegisterUserView(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return response.Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )
        user = serializer.create_user(validated_data=serializer.validated_data)
        return response.Response(
            data={"user_id": user.id}, status=status.HTTP_201_CREATED
        )

@ensure_csrf_cookie
class LoginUserView(views.APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)

        if not serializer.is_valid():
            return response.Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )

        user_data = serializer.login_user(
            request, validated_data=serializer.validated_data
        )

        if user_data is None:
            return response.Response(
                {"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        token = serializer.create_token(user_id=user_data.id)

        resp = response.Response(status=status.HTTP_200_OK)

        resp.set_cookie(key="jwt", value=token, httponly=True)
        return resp


class LogoutView(views.APIView):
    authentication_classes = (CustomUserAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        resp = response.Response(status=status.HTTP_204_NO_CONTENT)

        resp.delete_cookie("jwt")
        resp.data = {"message": "Goodbye"}

        return resp
