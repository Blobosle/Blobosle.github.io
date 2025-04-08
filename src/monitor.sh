#!/bin/bash

SOURCE_FILE="$HOME/Writing/Career/Resume/cv.pdf"
BACKUP_FOLDER="$HOME/Development/Web dev/Blobosle.github.io/pages"
NAME="Benjamin-Lertpunyaroj-Resume.pdf"

echo "Monitoring '$SOURCE_FILE' for changes using fswatch..."

fswatch -o "$SOURCE_FILE" | while read event_count; do
    cp "$SOURCE_FILE" "${BACKUP_FOLDER}/${NAME}"
    echo "[$(date +"%Y-%m-%d %H:%M:%S")] Change detected. Backup updated to ${NAME}"
done

