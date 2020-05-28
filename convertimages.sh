#!/usr/bin/env bash

# Variables

dir=assets/img/

for file in $(find -H $dir -type f); do 
	echo "Hi, $file ..."
	filename=$(echo $file | cut -d'.' -f 1)
	echo "$filename"
	output="${filename}.webp"
	echo "$output"
	cwebp $file -o $output -q 80
done

echo "Done!"

