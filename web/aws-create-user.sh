#!/bin/bash

set -ex

aws cognito-idp sign-up \
  --region us-east-1 \
  --client-id 40h600ddah15clnn7qm2lje18q \
  --username admin@example.com \
  --password Passw0rd! \
  --user-attributes Name=name,Value=Admin Name=email,Value=admin@example.com
#  --user-attributes Name=email,Value=admin@example.com

aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id us-east-1_F5ApbORB7 \
  --username admin@example.com
