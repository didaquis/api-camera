# API-camera

This is a Node.js API to interact with the official Raspberry Pi camera.  

Example of use: `http://192.168.1.35:14159/api-camera/take-image` (of course, you need to use the correct IP and port).  
Make a request to the API root to get the complete documentation.: `http://192.168.1.35:14159` (of course, you need to use the correct IP and port).  

**TIP:** All photographs are public. Anyone with access to the server will be able to see photos.

### 📝 Requirements
* Node.js 10 or higher
* Raspberry Pi
* The Raspberry Pi Camera Module v2

### 📚 How to prepare the hardware
1. Make sure the Raspberry Pi is not turned on.  
2. Connect the camera.  
3. Turn on the Raspberry Pi and active the camera interface `sudo raspi-config`.  

### 📚 How to run the API
* Use the command: `npm install`. If you are deploying the app in production, it's better to use this command: `npm install --production`
* Configure the application:
  * Duplicate the configuration file `_env` and rename it as `.env`
  * Edit the file `.env`
* Then use: `npm run start`. 
* That's it!

**Do you need help with `.env` file?** 

Do not worry, here you have a guide:

| Key | Description |
|-----|-------------|
| PORT | The port for running the backend |


### 😭 Common problems
Some tips for solving most common problems:
* If you are using UFW firewall on Raspbian, ensures the http trafic is allowed: `sudo ufw allow from 192.168.1.0/24` (this allow all traffic from the network 192.168.1.0). Maybe you prefer allow all trafic for a specific port of API-camera: `sudo ufw allow 14159/tcp`
* Are you sure you have activated the camera interface? 😬


### 💻 Tricks for development
* Run app in dev mode: `npm run dev`
* Run the linter: `npm run lint`
* Delete all log files: `npm run purge`
