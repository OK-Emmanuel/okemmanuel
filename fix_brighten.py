import os
import re

components_dir = r"src\components"

files_to_check = [
    r"OnePersonManyExpressions.tsx",
    r"HomeCta.tsx",
    r"WhyMe.tsx",
    r"Speaking.tsx",
    r"about\AboutBio.tsx",
    r"about\EvolutionTimeline.tsx",
    r"initiatives\EcosystemMap.tsx",
    r"vision\Questions.tsx",
]

for file in files_to_check:
    filepath = os.path.join(components_dir, file)
    if not os.path.exists(filepath): continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Import ScrollBrighten if not present
    if "ScrollBrighten" not in content:
        # Check depth
        depth = file.count("\\") + 1
        dots = "../" * depth
        import_stmt = f'import ScrollBrighten from "{dots}motion/ScrollBrighten";\n'
        # Add after last import
        last_import = content.rfind('import ')
        if last_import != -1:
            end_of_line = content.find('\n', last_import) + 1
            content = content[:end_of_line] + import_stmt + content[end_of_line:]
        else:
            content = import_stmt + content
            
    content = content.replace("<Reveal>", "<div>")
    content = content.replace("</Reveal>", "</div>")
    
    # We want to find <h2 className="max-w... and replace with <ScrollBrighten as="h2" className="max-w...
    content = re.sub(
        r'<h2\s+className="([^"]*max-w-[^"]*)"([^>]*)>',
        r'<ScrollBrighten as="h2" className="\1"\2>',
        content
    )
    content = content.replace("</h2>", "</ScrollBrighten>")
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Done")
