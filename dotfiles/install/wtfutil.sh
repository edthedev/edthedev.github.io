# Set the Go proxy variable to GoCenter
# export GOPROXY="https://gocenter.io"

# Enable Go modules
# export GO111MODULE=on

# go install github.com/edthedev/wtf@eda8e0f
# cd $GOPATH/src/github.com/wtfutil/wtf
# make install
# make run

echo "TODO: Get latest .tar release into ~/Downloads"
mkdir /tmp/wtf
cd /tmp/wtf
tar xvf $HOME/Downloads/wtf*.tar.gz
mv /tmp/wtf/wtf_0.43.0_linux_amd64/wtfutil ~/.local/bin
rm -rf /tmp/wtf
which wtfutil