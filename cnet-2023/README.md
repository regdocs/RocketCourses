
# Course Dependencies
1. Install **App Installer** from Microsoft Store
2. Run the following PowerShell commands. Use <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C/V</kbd> for copy pasting if conventional <kbd>Ctrl</kbd> + <kbd>C/V</kbd> doesn't do the trick.
	- Install Postman desktop client from [`https://www.postman.com/downloads/`](https://www.postman.com/downloads/) or using `winget`:
	
		```
		winget install Postman.Postman
		```
	  [`Hoppscotch`](https://hoppscotch.io/) is a simple alternative to Postman but lacks desktop support. Requests to `localhost` therefore can't be sent using just the web client.
	
	- Install Wireshark Packet analyser from [`https://www.wireshark.org/download.html`](https://www.wireshark.org/download.html) or using `winget`:
	
		```
		winget install WiresharkFoundation.Wireshark
		```

	- Install cURL from [`https://curl.se/windows/`](https://curl.se/windows/) or using `winget`:
	
		```
		winget install cURL.cURL
		```
	
	- Install Node.js from [`https://nodejs.org/en/download`](https://nodejs.org/en/download) or using `winget`:
	
		```
		winget install OpenJS.NodeJS
		```

	- Install Ngrok from [`https://ngrok.com/download`](https://ngrok.com/download) and sign-up before attempting to start an access tunnel. Terminal client can also be downloaded via `winget`:
	
		```
		winget install Ngrok.Ngrok
		```
	
	- Install Python 3.11 from [`https://www.python.org/downloads/release/python-3112/`](https://www.python.org/downloads/release/python-3112/). Ensure "Add to environment variables" option is checked before proceeding. Use `winget` to simplify the process:
	
		```
		winget install -e --id Python.Python.3.11
		```
