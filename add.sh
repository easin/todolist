#!/bin/bash
default_msg="更新"
msg="${1:- ${default_msg}}"
git add .
git commit -m $msg
git push
