#!/bin/bash

end_epoch=$(date -d "$(echo | openssl s_client -connect blabel.dev:443 -servername blabel.dev 2>/dev/null | openssl x509 -enddate -noout | cut -d'=' -f2)" "+%s")
current_epoch=$(date "+%s")
renew_days_threshold=25
days_diff=$((($end_epoch - $current_epoch) / 60 / 60 / 24))

if [ $days_diff -lt $renew_days_threshold ]; then
  echo "Certificate is $days_diff days old, renewing now."
  certbot certonly --manual --debug --preferred-challenges=http -m $GITLAB_USER_EMAIL --agree-tos --manual-auth-hook letsencrypt_authenticator.sh --manual-cleanup-hook letsencrypt_cleanup.sh --manual-public-ip-logging-ok -d blabel.dev
  echo "Certbot finished. Updating GitLab Pages domains."
  curl --request PUT --header "PRIVATE-TOKEN: $CERTBOT_RENEWAL_PIPELINE_GIT_TOKEN" --form "certificate=@/etc/letsencrypt/live/blabel.dev/fullchain.pem" --form "key=@/etc/letsencrypt/live/blabel.dev/privkey.pem" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/pages/domains/blabel.dev
else
  echo "Certificate still valid for $days_diff days, no renewal required."
fi