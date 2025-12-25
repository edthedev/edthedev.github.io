# mkdir -p ~/venv
# cd ~/venv
# python -m venv jupyter
$activate = "$env:USERPROFILE\venv\jupyter\Scripts\activate.ps1"
$activate
python -m pip install -r "$env:USERPROFILE\dotfiles\files\jupyter-requirements.txt"
