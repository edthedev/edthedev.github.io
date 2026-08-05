gh project item-list 10 --owner techservicesillinois --limit 50 --format json | jq '.items[] | select(.status == "Done") | .title' | wc -l
