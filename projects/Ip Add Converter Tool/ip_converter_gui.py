import tkinter as tk
from tkinter import ttk, messagebox
import os
from PIL import Image, ImageTk

print("Starting the application...")

try:
    import ipConverterProj as ip_conv
    print("Successfully imported ipConverterProj")
except Exception as e:
    print(f"Error importing ipConverterProj: {str(e)}")
    raise

class IPConverterApp:
    def __init__(self, root):
        print("Initializing the application...")
        self.root = root
        self.root.title("IP Address Generator Tool")
        self.root.geometry("800x800")
        self.root.configure(padx=20, pady=20)

        # Configure style
        style = ttk.Style()
        style.configure('TLabel', font=('Arial', 12))
        style.configure('TEntry', font=('Arial', 12))

        # Main container
        main_container = ttk.Frame(self.root, padding="10")
        main_container.pack(fill=tk.BOTH, expand=True)

        # IP Address Input Frame
        self.create_ip_input_frame(main_container)
        
        # Subnet Mask Frame
        self.create_mask_frame(main_container)
        
        # Devices Input Frame
        self.create_devices_frame(main_container)
        
        # Create calculate button
        calculate_frame = ttk.Frame(main_container)
        calculate_frame.pack(pady=15)
        self.calc_button = tk.Button(
            calculate_frame,
            text="Generate",
            command=self.calculate,
            font=('Arial', 12, 'bold'),
            width=15,
            relief='raised',
            bd=2,
            cursor='hand2'  # يتغير شكل المؤشر عند المرور على الزر
        )
        self.calc_button.pack(pady=5)
        
        # Results Frame
        self.create_results_frame(main_container)

        # Add copyright label at the bottom
        copyright_text = " 2024 IP Address Generator Tool by MOATASEM - All Rights Reserved"
        copyright_label = tk.Label(
            self.root,
            text=copyright_text,
            font=('Arial', 10),
            fg='#666666',
            bg=self.root.cget('bg')
        )
        copyright_label.pack(side='bottom', pady=15)

        print("Application initialized successfully")

    def create_ip_input_frame(self, parent):
        ip_frame = ttk.LabelFrame(parent, text="IP Address", padding=10)
        ip_frame.pack(fill="x", pady=10)

        # IP Address Entry Fields
        self.ip_vars = []
        ip_entries = ttk.Frame(ip_frame)
        ip_entries.pack()

        for i in range(4):
            var = tk.StringVar(value="192" if i == 0 else "168" if i == 1 else "1" if i == 2 else "0")
            self.ip_vars.append(var)
            entry = ttk.Entry(ip_entries, width=5, textvariable=var, font=('Arial', 9))
            entry.pack(side="left", padx=5)
            if i < 3:
                ttk.Label(ip_entries, text=".", font=('Arial', 14, 'bold')).pack(side="left")

    def create_mask_frame(self, parent):
        mask_frame = ttk.LabelFrame(parent, text="Subnet Mask", padding=10)
        mask_frame.pack(fill="x", pady=10)

        self.mask_var = tk.StringVar(value="24")
        ttk.Entry(mask_frame, textvariable=self.mask_var, width=5, font=('Arial', 9)).pack(anchor="center")

    def create_devices_frame(self, parent):
        devices_frame = ttk.LabelFrame(parent, text="Number of Devices", padding=10)
        devices_frame.pack(fill="x", pady=10)

        self.devices_var = tk.StringVar(value="10")
        ttk.Entry(devices_frame, textvariable=self.devices_var, width=10, font=('Arial', 9)).pack(anchor="center")

    def create_results_frame(self, parent):
        results_frame = ttk.Frame(parent, padding=10)
        results_frame.pack(fill="both", expand=True, pady=10)

        # Create main info table
        self.main_info = ttk.Treeview(results_frame, columns=("Value",), show="tree")
        self.main_info.pack(fill="x", pady=(0, 10))
        
        # Configure the columns
        self.main_info.column("#0", width=200)
        self.main_info.column("Value", width=300)
        
        # Create subnets table
        self.subnets_label = ttk.Label(results_frame, text="Subnet Information", font=('Arial', 12, 'bold'))
        self.subnets_label.pack(pady=(10, 5))
        
        # Create Treeview for subnets
        self.subnets_tree = ttk.Treeview(results_frame, columns=("Network", "Broadcast", "Range"), show="headings")
        self.subnets_tree.pack(fill="both", expand=True)
        
        # Configure the columns
        self.subnets_tree.heading("Network", text="Network Address")
        self.subnets_tree.heading("Broadcast", text="Broadcast Address")
        self.subnets_tree.heading("Range", text="Available Range")
        
        self.subnets_tree.column("Network", width=150)
        self.subnets_tree.column("Broadcast", width=150)
        self.subnets_tree.column("Range", width=250)
        
        # Add scrollbar for subnets table
        scrollbar = ttk.Scrollbar(results_frame, orient="vertical", command=self.subnets_tree.yview)
        scrollbar.pack(side="right", fill="y")
        self.subnets_tree.configure(yscrollcommand=scrollbar.set)

    def calculate(self):
        print("Calculate button pressed")
        try:
            # Clear previous results
            for item in self.main_info.get_children():
                self.main_info.delete(item)
            for item in self.subnets_tree.get_children():
                self.subnets_tree.delete(item)
            
            # Get IP address octets
            octets = []
            for var in self.ip_vars:
                value = var.get().strip()
                if not value:
                    messagebox.showerror("Error", "Please fill in all IP address octets")
                    return
                octets.append(int(value))
            
            print(f"IP Octets: {octets}")
            
            # Validate IP address
            if not ip_conv.ipAddress(*octets):
                messagebox.showerror("Error", "Invalid IP address!")
                return

            # Get and validate mask
            mask_value = self.mask_var.get().strip()
            if not mask_value:
                messagebox.showerror("Error", "Please enter a subnet mask")
                return
            
            mask = ip_conv.ipAddressMask(mask_value)
            if mask is None:
                messagebox.showerror("Error", "Invalid subnet mask!")
                return

            print(f"Mask: {mask}")

            # Get and validate number of devices
            devices_value = self.devices_var.get().strip()
            if not devices_value:
                messagebox.showerror("Error", "Please enter number of devices")
                return
            
            try:
                num_devices = int(devices_value)
                if num_devices <= 0:
                    messagebox.showerror("Error", "Number of devices must be positive!")
                    return
            except ValueError:
                messagebox.showerror("Error", "Invalid number of devices!")
                return

            print(f"Number of devices: {num_devices}")

            # Calculate results
            req_ip = ip_conv.numOfRequiredIpAddresses(num_devices)
            bits_needed = ip_conv.detBitsOfIpAddRepresentation(req_ip)
            new_mask = ip_conv.calcNewSubnetMask(bits_needed)
            num_networks = ip_conv.calcNumOfNetworks(new_mask, mask)
            
            # Convert IP to integer
            ip_int = ip_conv.convertIpAddToIntegers(*octets)
            
            # Calculate network and broadcast addresses
            network_address = ip_conv.calcNetworkAddress(ip_int, new_mask)
            broadcast_address = ip_conv.calcBroadcastAddress(ip_int, new_mask)
            
            # Calculate number of available addresses
            num_addresses = ip_conv.calcNumOfIpAddInNetwork(new_mask)
            
            # Get subnet information
            subnets = ip_conv.listAllSubnets(network_address, num_networks, num_addresses)

            print("Calculations completed, displaying results")

            # Display results in main info table
            self.main_info.insert("", "end", text="IP Address", values=(f"{'.'.join(str(o) for o in octets)}/{mask}",))
            self.main_info.insert("", "end", text="Device Number", values=(f"{req_ip}",))
            self.main_info.insert("", "end", text="New Subnet Mask", values=(f"/{new_mask}",))
            self.main_info.insert("", "end", text="Number of Networks", values=(f"{num_networks}",))
            self.main_info.insert("", "end", text="Addresses per Subnet", values=(f"{num_addresses}",))
            
            # Display subnets in table
            for subnet in subnets:
                self.subnets_tree.insert("", "end", values=(
                    subnet['Network Address'],
                    subnet['Broadcast Address'],
                    subnet['Available Range']
                ))

            print("Results displayed successfully")

        except Exception as e:
            print(f"Error in calculate: {str(e)}")
            messagebox.showerror("Error", f"An error occurred: {str(e)}")

def main():
    try:
        print("Creating main window...")
        root = tk.Tk()
        app = IPConverterApp(root)
        print("Starting main loop...")
        root.mainloop()
    except Exception as e:
        print(f"Error in main: {str(e)}")
        raise

if __name__ == "__main__":
    main()
