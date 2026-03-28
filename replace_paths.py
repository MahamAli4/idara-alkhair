import os
import re

root = r"c:\Users\emp6\Desktop\idara-Alkhair"

# Load the mapping
mapping = []
with open(os.path.join(root, "rename_map.txt"), "r", encoding="utf-8") as f:
    for line in f:
        if " -> " in line:
            old_rel, new_rel = line.strip().split(" -> ")
            mapping.append((old_rel, new_rel))

# Add the top-level folder rename if not covered
# Previously it was "website media"
mapping.append(("website media", "website-media"))

# Sort mapping by length of old_rel descending to avoid partial replacements
mapping.sort(key=lambda x: len(x[0]), reverse=True)

# Files to check for replacements
extensions = ('.tsx', '.ts', '.js', '.jsx', '.css', '.html', '.json')

for dirpath, dirnames, filenames in os.walk(root):
    # Skip .git and node_modules
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

            new_content = content
            # Apply mappings
            for old_rel, new_rel in mapping:
                # We need to handle both / and \ and spaces
                # The code likely uses /
                
                # Case 1: literal match (already has /)
                new_content = new_content.replace(old_rel, new_rel)
                
                # Case 2: spaces and different folder casing
                # e.g. "website media/About us/About Us.pdf"
                # This is trickier. Let's try to be clever with Regex if needed, 
                # but simple replacement for the mapped strings should cover most.
                
                # Let's also handle the "website media" -> "website-media" specifically
                # and then the sub-parts.
                
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")

print("Replacement complete.")
