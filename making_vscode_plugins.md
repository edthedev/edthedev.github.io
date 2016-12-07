## 

Install Node.js, and make sure it is on the terminal `PATH`.

    # Repair Brew
    rm -rf /usr/local/Cellar /usr/local/.git && brew cleanup
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    brew update
    brew install node

Open the Embedded Terminal (`Ctrl+~`)
Install Yo and Generator Code

    npm install -g yo generator-code
    yo code

https://code.visualstudio.com/docs/extensions/example-hello-world