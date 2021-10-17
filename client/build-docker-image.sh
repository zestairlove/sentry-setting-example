IMAGE_VERSION=$(node -p -e "require('./package.json').version")
IMAGE_NAME="sentry-setting-example:$IMAGE_VERSION"

docker build -t $IMAGE_NAME .
#docker push $IMAGE_NAME