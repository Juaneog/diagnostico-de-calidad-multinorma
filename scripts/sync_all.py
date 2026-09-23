# -*- coding: utf-8 -*-
import os
import shutil
import stat
import zipfile

def remove_readonly(func, path, excinfo):
    os.chmod(path, stat.S_IWRITE)
    func(path)

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
REPO_NTC = os.path.join(BASE_DIR, "repos-publicos", "diagnostico-calidad-ntc-6001")
REPO_SOST = os.path.join(BASE_DIR, "repos-publicos", "diagnostico-sostenibilidad-ntc-6496-6503")

# 1. Sync files in Root
shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md"), os.path.join(BASE_DIR, "MANUAL_NTC_6001.md"))
shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.pdf"), os.path.join(BASE_DIR, "MANUAL_NTC_6001.pdf"))
shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.pdf"), os.path.join(BASE_DIR, "MANUAL_APP.pdf"))
shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.pdf"), os.path.join(BASE_DIR, "GUIA_DE_USO.pdf"))

shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md"), os.path.join(BASE_DIR, "MANUAL_NTC_6496_6503.md"))
shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.pdf"), os.path.join(BASE_DIR, "MANUAL_NTC_6496_6503.pdf"))

print("Root files synchronized.")

# 2. Sync to repos-publicos/diagnostico-calidad-ntc-6001
if os.path.exists(REPO_NTC):
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md"), os.path.join(REPO_NTC, "MANUAL_TECNICO_NTC_6001.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md"), os.path.join(REPO_NTC, "MANUAL_NTC_6001.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.md"), os.path.join(REPO_NTC, "MANUAL_APP.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.md"), os.path.join(REPO_NTC, "GUIA_DE_USO_NTC_6001.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.md"), os.path.join(REPO_NTC, "GUIA_DE_USO.md"))
    
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.pdf"), os.path.join(REPO_NTC, "MANUAL_TECNICO_NTC_6001.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.pdf"), os.path.join(REPO_NTC, "MANUAL_NTC_6001.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_NTC_6001.pdf"), os.path.join(REPO_NTC, "MANUAL_APP.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.pdf"), os.path.join(REPO_NTC, "GUIA_DE_USO_NTC_6001.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_NTC_6001.pdf"), os.path.join(REPO_NTC, "GUIA_DE_USO.pdf"))
    
    # Sync dist bundle to root backup
    dist_ntc_public = os.path.join(REPO_NTC, "dist")
    dist_ntc_root = os.path.join(BASE_DIR, "dist-ntc6001")
    if os.path.exists(dist_ntc_public):
        if os.path.exists(dist_ntc_root):
            shutil.rmtree(dist_ntc_root, onerror=remove_readonly)
        shutil.copytree(dist_ntc_public, dist_ntc_root)
        print("Root dist-ntc6001 synchronized from public repo.")
    
    print("NTC 6001 public repo synchronized.")

# 3. Sync to repos-publicos/diagnostico-sostenibilidad-ntc-6496-6503
if os.path.exists(REPO_SOST):
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md"), os.path.join(REPO_SOST, "MANUAL_TECNICO_SOSTENIBILIDAD.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md"), os.path.join(REPO_SOST, "MANUAL_NTC_6496_6503.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.md"), os.path.join(REPO_SOST, "MANUAL_APP.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.md"), os.path.join(REPO_SOST, "GUIA_DE_USO_SOSTENIBILIDAD.md"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.md"), os.path.join(REPO_SOST, "GUIA_DE_USO.md"))
    
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.pdf"), os.path.join(REPO_SOST, "MANUAL_TECNICO_SOSTENIBILIDAD.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.pdf"), os.path.join(REPO_SOST, "MANUAL_NTC_6496_6503.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "MANUAL_TECNICO_SOSTENIBILIDAD.pdf"), os.path.join(REPO_SOST, "MANUAL_APP.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.pdf"), os.path.join(REPO_SOST, "GUIA_DE_USO_SOSTENIBILIDAD.pdf"))
    shutil.copyfile(os.path.join(BASE_DIR, "GUIA_DE_USO_SOSTENIBILIDAD.pdf"), os.path.join(REPO_SOST, "GUIA_DE_USO.pdf"))

    # Sync dist bundle to root backup
    dist_sost_public = os.path.join(REPO_SOST, "dist")
    dist_sost_root = os.path.join(BASE_DIR, "dist-sustainable")
    if os.path.exists(dist_sost_public):
        if os.path.exists(dist_sost_root):
            shutil.rmtree(dist_sost_root, onerror=remove_readonly)
        shutil.copytree(dist_sost_public, dist_sost_root)
        print("Root dist-sustainable synchronized from public repo.")

    print("Sustainability public repo synchronized.")

# 4. Rebuild Zip Archives
def create_zip(source_dir, output_zip):
    print(f"Creating zip {output_zip} ...")
    with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(source_dir):
            # exclude node_modules or dist if huge
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.git']]
            for file in files:
                abs_file = os.path.join(root, file)
                rel_file = os.path.relpath(abs_file, os.path.dirname(source_dir))
                zf.write(abs_file, rel_file)
    print(f"Zip created: {output_zip} ({os.path.getsize(output_zip)} bytes)")

zip_ntc = os.path.join(BASE_DIR, "repos-publicos", "diagnostico-calidad-ntc-6001.zip")
zip_sost = os.path.join(BASE_DIR, "repos-publicos", "diagnostico-sostenibilidad-ntc-6496-6503.zip")

create_zip(REPO_NTC, zip_ntc)
create_zip(REPO_SOST, zip_sost)

print("All archives and sync tasks completed successfully.")
