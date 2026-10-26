#!/bin/bash
# Patch react-native-gesture-handler for Gradle 8.3 compatibility

FILE="node_modules/react-native-gesture-handler/android/build.gradle"

if [ -f "$FILE" ]; then
    echo "Patching $FILE for Gradle 8.3 compatibility..."
    
    # Replace 'directories.add' with 'srcDirs +='
    sed -i 's/directories\.add/srcDirs +=/g' "$FILE"
    
    echo "Patch applied successfully!"
else
    echo "Warning: $FILE not found. Skipping patch."
fi
