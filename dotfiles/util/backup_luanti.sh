cd ~/ansible/luanti
./do_luanti.sh backup.sh
echo "Checking Database file..."
./check_db.sh
echo "Reminder: Verify backup to NAS."
echo "Reminder: Restart the server."

