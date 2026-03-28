import os
import re

root = r"c:\Users\emp6\Desktop\idara-Alkhair"

# Files to check for replacements
extensions = ('.tsx', '.ts', '.js', '.jsx', '.css', '.html', '.json')

# We want to find patterns like "/website-media/Some Folder/Some File.jpg"
# and turn them into "/website-media/somefolder/somefile.jpg"
# Also handle "/website media/" (space)

# Define the patterns to search for
# Regex to find paths starting with /website media/ or /website-media/ or /images/
path_regex = re.compile(r'("/(?:website[ -]media|images)/[^"]+")')

def clean_path(match):
    path = match.group(1)
    # Remove quotes
    inner = path[1:-1]
    # Lowercase and remove spaces
    # But wait, we should preserve the "/" separators
    parts = inner.split('/')
    cleaned_parts = []
    for p in parts:
        # Special case: website-media already has a hyphen, don't remove it.
        # Actually replace "website media" with "website-media"
        p = p.replace("website media", "website-media")
        # Remove spaces and lowercase
        p = p.lower().replace(" ", "")
        cleaned_parts.append(p)
    
    new_path = "/".join(cleaned_parts)
    return f'"{new_path}"'

for dirpath, dirnames, filenames in os.walk(root):
    if '.git' in dirpath or 'node_modules' in dirpath:
        continue
    
    for filename in filenames:
        if filename.endswith(extensions):
            file_path = os.path.join(dirpath, filename)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except UnicodeDecodeError:
                continue

            # Apply regex replacement
            new_content = path_regex.sub(clean_path, content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")

print("Replacement complete.")
