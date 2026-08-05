
## Setup

1. Start a cloud shell on the Exchange Admin website. 

2. The cloud shell defaults to `bash`. Change it to `PowerShell`.

2. Run these commands once. 

    The results of these commands will persisit in your Cloud Shell attached Azure storage.

    ```powershell
    Install-Module -Name PSWSMan -AcceptLicense -Confirm
    Install-WSMan   # Web services for management
    Import-Module ExchangeOnlineManagement
    ```

3. Repeat these commands for each new Cloud Shell

    ```powershell
    Import-Module ExchangeOnlineManagement
    Connect-ExchangeOnline
    ```

## Tasks

### Distribution Group

A distribution list sends a copy of any incoming email to the inbox of every member. The list itself, has an email address, but does not have a mailbox, since a copy of every incoming message goes in the mailboxes of each list member.

1. Create distribution group

    ```powershell
    $groupname = 'loves_tacos'
    new-distributiongroup $groupname
    ```

2. Add some folks to it

    ```powershell
    Add-DistributionGroupMember -Identity $groupname -Member bob
    Add-DistributionGroupMember -Identity $groupname -Member larry
    ```

3. Verify the list is as desired


    ```powershell
    get-distributiongroupmember -identity $groupname
    ```

4. Add an email alias

    ```powershell
    $domain = 'tacos.net'
    set-distributiongroup -identity $groupname -EmailAddresses @{add="$groupname@$domain"}
    get-distributiongroup $groupname | Select Alias, EmailAddresses, ManagedBy, DistinguishedName | Format-List
    ```



### Or create an entire shared mailbox

A shared mailbox is an actual separate mailbox. Messages sent to it will not be copied into the mailboxes of the members with access. Members with access to a shared mailbox may also be allowed to send email out.

A shared mailbox should be used if:

    - A team of people need to send email out from the email address
    - Each email should only be handled by one person.

> Warning: This recipe is likely incomplete, as I eventually decided not to use it.

1. Create a shared mailbox

    ```powershell
    $groupname = 'tacos'
    $displayname = 'Loves Tacos'
    New-Mailbox -Shared -Name "$groupname" -DisplayName $displayname
    ```

2. Decide who to add.

    You can review your mailbox users with `Get-Mailbox`

3. Add people

    ```powershell
    Add-MailboxPermission -Identity $groupname -AccessRights FullAccess -User <user>
    ```

4. Review

    ```powershell
    Get-MailboxPermission $groupname
    ```
