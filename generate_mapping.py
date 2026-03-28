import os
import re

root = r"c:\Users\emp6\Desktop\idara-Alkhair"
public_paths = [os.path.join(root, "public", "website-media"), os.path.join(root, "public", "images")]

mapping = []

for base_path in public_paths:
    if not os.path.exists(base_path):
        continue
    for dirpath, dirnames, filenames in os.walk(base_path):
        for filename in filenames:
            old_full_path = os.path.join(dirpath, filename)
            
            # Get path relative to the root public folder
            rel_to_public = os.path.relpath(old_full_path, os.path.join(root, "public"))
            
            # Normalize for web (forward slashes, lowercase, remove spaces)
            # The user wants current folder names (which I already mostly fixed) and file names to be lowercase/no-space.
            
            # Let's just process the filename part here, as folders are mostly done.
            # But let's be thorough and process the whole relative path.
            
            # Split path into parts
            parts = rel_to_public.split(os.sep)
            new_parts = []
            for p in parts:
                # Lowercase and remove space
                new_p = p.lower().replace(" ", "")
                new_parts.append(new_p)
            
            new_rel_to_public = "/".join(new_parts)
            old_rel_to_public = rel_to_public.replace(os.sep, "/")
            
            if old_rel_to_public != new_rel_to_public:
                mapping.append((old_rel_to_public, new_rel_to_public, old_full_path))

with open(os.path.join(root, "rename_map.txt"), "w", encoding="utf-8") as f:
    for old, new, full in mapping:
        f.write(f"{old} -> {new}\n")

print(f"Total files to rename: {len(mapping)}")
