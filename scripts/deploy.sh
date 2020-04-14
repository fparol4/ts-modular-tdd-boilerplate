eval $(ssh-agent -s)
echo "$AWS_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

echo "deploying to ${AWS_DEPLOY_SERVER}"
ssh ubuntu@${AWS_DEPLOY_SERVER} 'bash' < .deploy/update.sh

