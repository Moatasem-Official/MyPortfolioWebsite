# IP Address Converter Tool

A user-friendly GUI tool for IP address calculations and subnet planning, perfect for network administrators and IT professionals.

![IP Address Converter Tool Main Interface](screenshots/Screenshot%202025-01-04%20190814.png)

![IP Address Converter Tool Results](screenshots/Screenshot%202025-01-04%20190848.png)

## ✨ Features

- 🔢 Input IP address in octet format (e.g., 192.168.1.0)
- 🎯 Specify subnet mask (0-32)
- 💻 Calculate required IP addresses based on number of devices
- 📊 Automatic subnet calculations
- 📝 Display detailed subnet information
- 🌐 Show network and broadcast addresses
- 📋 List available IP ranges for each subnet
- 🎨 Modern and intuitive graphical interface

## 🚀 Installation Guide

### Prerequisites

1. Install Python:
   - Visit [Python's official website](https://www.python.org/downloads/)
   - Download the latest version (3.8 or newer)
   - During installation, make sure to check "Add Python to PATH"

### Installation Steps

1. Download the Program:
   - Download `IP_Address_Generator_Tool_v1.0.0.zip`
   - Extract it to your desktop or preferred location

2. Install Required Libraries:
   - Open Command Prompt (CMD) - Press Win + R, type 'cmd'
   - Navigate to the program folder:
     ```
     cd "C:\Users\[YourUsername]\Desktop\Ip Add Converter Tool"
     ```
     or
     ```
     cd "full path to folder"
     ```
   - Install required libraries:
     ```
     pip install pillow
     ```

## 🚀 Running the Program

There are several ways to run the program:

1. Direct Method:
   ```
   python "full path to file\ip_converter_gui.py"
   ```
   Example:
   ```
   python "C:\Users\[YourUsername]\Desktop\Ip Add Converter Tool\ip_converter_gui.py"
   ```

2. From Program Directory:
   - Navigate to program folder using cd
   - Run the program:
     ```
     python ip_converter_gui.py
     ```

## 📝 How to Use

1. Enter IP address in the four fields (each number between 0 and 255)
2. Enter subnet mask (number between 0 and 32)
3. Enter number of required devices
4. Click "Generate" to see results

## 🔧 Troubleshooting

1. If you see "python not found":
   - Verify Python installation
   - Check if Python is added to PATH

2. If you see "No module named 'PIL'":
   - Run: `pip install pillow`

3. If you see "No such file or directory":
   - Make sure you're in the correct directory
   - Use full file path

## 🆘 Support

If you encounter any issues:
- Make sure all requirements are installed
- Verify all files are in the same directory
- Check folder permissions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created by MOATASEM
