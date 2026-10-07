
```pwsh

# Install ipykernel at user level
pip install -U ipykernel

# From https://stackoverflow.com/questions/18734739/using-ipython-jupyter-notebooks-under-version-control

# Tell git to clean data out before committing a notebook
git config --global core.attributesfile $HOME\dotfiles\files\gitattributes
git config --global filter.dropoutput_ipynb.clean ~\dotfiles\util\jupyter_git_clean.py
git config --global filter.dropoutput_ipynb.smudge cat
```

Did not work

```pwsh
# Create VirtualEnv
python -m venv ~/venvs/jupyter
./venvs/jupyter/Scripts/activate
pip install ipykernel

# Tell jupyter about our virtualenv
cd ~/venvs/jupyter
python -m ipykernel install --user --name=jupyter
```
