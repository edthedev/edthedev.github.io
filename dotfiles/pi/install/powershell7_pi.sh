
## https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7.1#raspbian


###################################
# Prerequisites

# Update package lists
sudo apt-get update

# Install libunwind8 and libssl1.0
# Regex is used to ensure that we do not install libssl1.0-dev, as it is a variant that is not required
sudo apt-get install '^libssl1.0.[0-9]$' libunwind8 -y

###################################
# Download and extract PowerShell

# Grab the latest tar.gz
if [ ! -f /tmp/powershell.tar.gz ]; then
	wget https://github.com/PowerShell/PowerShell/releases/download/v7.1.2/powershell-7.1.2-linux-arm32.tar.gz -O /tmp/powershell.tar.gz
fi

# Make folder to put powershell
mkdir -p /opt
mkdir -p /opt/powershell

# Unpack the tar.gz file
tar -xvf /tmp/powershell.tar.gz -C /opt/powershell/

# Link the shell to the usual place to find it.
ln -s /opt/powershell/pwsh /usr/bin/pwsh
echo "/usr/bin/pwsh" >> /etc/shells

echo "PowerShell should now be installed. See ./setup/powershell.sh for how to chagne shells."
