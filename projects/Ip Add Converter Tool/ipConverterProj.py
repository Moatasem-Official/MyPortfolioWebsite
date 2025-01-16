import math

def ipAddress(firstOctet, secondOctet, thirdOctet, fourthOctet):
    try:
        firstOctet = int(firstOctet)
        secondOctet = int(secondOctet)
        thirdOctet = int(thirdOctet)
        fourthOctet = int(fourthOctet)

        if (firstOctet < 0 or firstOctet > 255 or
            secondOctet < 0 or secondOctet > 255 or
            thirdOctet < 0 or thirdOctet > 255 or
            fourthOctet < 0 or fourthOctet > 255):
            print("Invalid Octet, Each Octet Should Be >= 0 and <= 255 !!")
            return False
        return True
    except ValueError:
        print("Invalid Inputs, Integers Numbers Are Allowed Only !!")
        return False

def ipAddressMask(mask):
    try:
        mask = int(mask)
        if mask < 0 or mask > 32:
            print("Invalid Mask, Value Should Be Between 0 and 32 !!")
            return None
        return mask
    except ValueError:
        print("Invalid Inputs, Integers Numbers Are Allowed Only !!")
        return None

def numOfRequiredIpAddresses(dev_num):
    requiredNumOfIpAdd = dev_num + 2  # Include network and broadcast addresses
    return requiredNumOfIpAdd

def detBitsOfIpAddRepresentation(req_num_ip_add):
    num_of_bits = math.ceil(math.log2(req_num_ip_add))
    return num_of_bits

def calcNewSubnetMask(bitsNumber):
    newSubnetMask = 32 - bitsNumber
    return newSubnetMask

def calcNumOfNetworks(newMask, oldMask):
      num_of_network = 2 ** abs(newMask - oldMask)
      return num_of_network


def calcNetworkAddress(ipConvertedToIntegers, subnetMask):
    hostBits = 32 - subnetMask
    networkAddress = ipConvertedToIntegers & (~(2**hostBits - 1))
    return networkAddress

def calcBroadcastAddress(ipConvertedToIntegers, subnetMask):
    hostBits = 32 - subnetMask
    broadcastAddress = ipConvertedToIntegers | (2**hostBits - 1)
    return broadcastAddress

def calcNumOfIpAddInNetwork(newMask):
    num_of_addresses = 2 ** (32 - newMask)
    return num_of_addresses

def convertIpAddToIntegers(fOctet, sOctet, tOctet, lOctet):
    ipInteger = (fOctet * (256 ** 3)) + (sOctet * (256 ** 2)) + (tOctet * (256 ** 1)) + (lOctet * (256 ** 0))
    return ipInteger

def reverseConvertIpToOctets(ipConvertedToIntegers):
    octet1 = (ipConvertedToIntegers // (256 ** 3))
    octet2 = ((ipConvertedToIntegers % (256 ** 3)) // (256 ** 2))
    octet3 = ((ipConvertedToIntegers % (256 ** 2)) // (256 ** 1))
    octet4 = (ipConvertedToIntegers % 256)
    return f"{octet1}.{octet2}.{octet3}.{octet4}"

def listAllSubnets(startAddress, numOfSubnets, subnetSize):
    subnets = []
    for i in range(numOfSubnets):
        networkStart = startAddress + (i * subnetSize)
        networkEnd = networkStart + subnetSize - 1
        subnets.append({
            "Subnet Number": i + 1,
            "Network Address": reverseConvertIpToOctets(networkStart),
            "Broadcast Address": reverseConvertIpToOctets(networkEnd),
            "Available Range": f"{reverseConvertIpToOctets(networkStart + 1)} - {reverseConvertIpToOctets(networkEnd - 1)}"
        })
    
    if numOfSubnets > 5:
        subnets_to_display = subnets[:5]
        subnets_to_display.append({"Subnet Number": "...", "Network Address": "...", "Broadcast Address": "...", "Available Range": "..."})
    else:
        subnets_to_display = subnets

    return subnets_to_display



if __name__ == "__main__":
    print("This module contains IP conversion functions.")