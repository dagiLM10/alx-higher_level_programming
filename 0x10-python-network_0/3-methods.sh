#!/bin/bash
#find out which methods a server supports
curls -si -X OPTIONS "$1" | grep "Allow" | cut -d " " -f 2-
