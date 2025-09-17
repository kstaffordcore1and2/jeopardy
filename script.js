const moduleNames = [
    "mod 1: Hardware and Display Components",
    "mod 2: Mobile Accessories and Connectivity",
    "mod 3: Optimizing Mobile Devices",
    "mod 4: Networking Fundamentals",
    "mod 5: Wireless Networking and Services",
    "mod 6: Networking Concepts and Configurations",
    "mod 7: Internet Connection Types and Features",
    "mod 8: Network Troubleshooting Tools and Techniques",
    "mod 9: Cable Types and Connectors",
    "mod 10: RAM and Storage Solutions",
    "mod 11: Motherboards, CPUs, and Expansion Cards",
    "mod 12: Power Supplies and Cooling",
    "mod 13: Multifunction Devices and Printers",
    "mod 14: Cloud Computing Concepts",
    "mod 15: Client-Side Virtualization",
    "mod 16: Cloud and Virtualization Troubleshooting",
    "mod 17: Problem Solving and Best Practices",
    "mod 18: Troubleshooting Storage and RAID Issues",
    "mod 19: Troubleshooting Displays and Peripherals",
    "mod 20: Troubleshooting Networks and Printers"
];

const gameData = {
    "mod 1": {
        "The Brain & The Board": [
            { clue: "This large circuit board is the main component of a computer system, housing the CPU, RAM, and expansion slots.", answer: "What is a motherboard?", points: 100 },
            { clue: "This component is considered the 'brain' of the computer because it executes all instructions from software and hardware.", answer: "What is the Central Processing Unit, or CPU?", points: 200 },
            { clue: "A CPU's speed is measured in these units, with a gigahertz representing one billion cycles per second.", answer: "What are hertz or gigahertz?", points: 300 },
            { clue: "This term describes the expansion slots on a motherboard used for adding things like video and network cards.", answer: "What is Peripheral Component Interconnect eXtended, or PCIe?", points: 400 },
            { clue: "The two most important things a processor must match with a motherboard are its socket type and this other physical requirement.", answer: "What are its power and cooling requirements?", points: 500 }
        ],
        "Memory & Storage": [
            { clue: "This type of temporary, volatile storage is used for active applications and is erased every time the computer is shut off.", answer: "What is Random Access Memory, or RAM?", points: 100 },
            { clue: "This older type of storage uses a spinning disk and is more cost-effective for large capacities, but is much slower.", answer: "What is a Hard Disk Drive, or HDD?", points: 200 },
            { clue: "Using the analogy from the video, a computer's memory is like your desk, while this component is like a filing cabinet.", answer: "What is a storage device or hard drive?", points: 300 },
            { clue: "A hard disk drive has moving parts, but this faster, more durable storage device does not.", answer: "What is a Solid-State Drive, or SSD?", points: 400 },
            { clue: "This high-speed form of a solid-state drive is directly connected to the motherboard and is even faster than standard SSDs.", answer: "What is NVMe?", points: 500 }
        ],
        "Laptops": [
            { clue: "This essential component is found in a laptop but is not in a desktop computer.", answer: "What is a battery?", points: 100 },
            { clue: "This type of memory chip is specifically designed for laptops due to its smaller physical size.", answer: "What is a SODIMM or Small Outline DIMM?", points: 200 },
            { clue: "Because of their compact design, most laptop components are integrated, which can make this process more limited compared to desktops.", answer: "What is upgrading?", points: 300 },
            { clue: "This type of laptop display offers truer blacks and is more energy-efficient, but is typically more expensive.", answer: "What is an OLED (Organic Light-Emitting Diode) display?", points: 400 },
            { clue: "The three primary types of laptop displays are LCD, IPS, and this one, which offers the best contrast.", answer: "What is OLED?", points: 500 }
        ],
        "Power & Connections": [
            { clue: "This component converts electrical power from the wall outlet into a usable form for the computer's components.", answer: "What is a Power Supply Unit, or PSU?", points: 100 },
            { clue: "The RJ45 is the common connector for this type of network cable.", answer: "What is an Ethernet cable?", points: 200 },
            { clue: "This technology uses a system that sends both power and network data over the same cable.", answer: "What is Power over Ethernet, or PoE?", points: 300 },
            { clue: "What is the standard measurement for a power supply unit's output?", answer: "What is watts?", points: 400 },
            { clue: "Name two of the four laptop expansion ports or connections discussed in the video.", answer: "What are USB Type-A, USB Type-C, HDMI, or DisplayPort?", points: 500 }
        ],
        "Maintenance & Issues": [
            { clue: "This is the primary tool needed to perform maintenance on a desktop computer.", answer: "What is a Phillips screwdriver?", points: 100 },
            { clue: "This type of thermal compound, applied to a CPU, helps to ensure better connectivity and heat dissipation.", answer: "What is thermal paste?", points: 200 },
            { clue: "What is a common cause of laptop overheating?", answer: "What is dust accumulating on the vents?", points: 300 },
            { clue: "In a Windows environment, this command can be run at the command prompt to generate a detailed report on battery health.", answer: "What is powercfg /batteryreport?", points: 400 },
            { clue: "What is the best practice for maintaining a laptop battery's health?", answer: "What is keeping the charge level between 20% and 80%?", points: 500 }
        ],
        "All About the Details": [
            { clue: "What does this acronym stand for: RAM?", answer: "What is Random Access Memory?", points: 100 },
            { clue: "The two primary types of storage devices are the Hard Disk Drive and what other type of drive?", answer: "What is a Solid-State Drive?", points: 200 },
            { clue: "This term refers to the process of separating a physical drive into multiple logical sections.", answer: "What is partitioning?", points: 300 },
            { clue: "What two things must match to ensure a new storage drive is compatible with a motherboard?", answer: "What is the interface type?", points: 400 },
            { clue: "This specific feature, which enables an operating system to inform a drive which blocks of data are no longer in use, should be enabled for SSDs to improve performance.", answer: "What is the TRIM command?", points: 500 }
        ]
    },
    "mod 2": {
        "USB & Lightning": [
            { clue: "This version of USB, released in 2000, increased speeds to 480 Mbps and introduced support for hubs.", answer: "What is USB 2.0?", points: 100 },
            { clue: "This small, reversible connector supports data, power, and video, and is used by most modern devices.", answer: "What is USB-C?", points: 200 },
            { clue: "This Apple-specific connector, introduced in 2012, replaced the 30-pin dock connector.", answer: "What is the Lightning connector?", points: 300 },
            { clue: "This USB standard, released in 2019, offered 40 Gbps and integrated Thunderbolt 3 support.", answer: "What is USB 4.0?", points: 400 },
            { clue: "USB Power Delivery 3.1 supports charging devices up to this wattage.", answer: "What is 240 watts?", points: 500 }
        ],
        "Serial Connections": [
            { clue: "This type of communication sends data one bit at a time, often used in long-distance or low-bandwidth scenarios.", answer: "What is serial communication?", points: 100 },
            { clue: "This legacy standard, abbreviated RS-232, was commonly used for modems and industrial devices.", answer: "What is Recommended Standard 232 (RS-232)?", points: 200 },
            { clue: "The maximum distance for an RS-232 connection before needing a repeater is about this many feet.", answer: "What is 50 feet?", points: 300 },
            { clue: "RS-422 improved on RS-232 by introducing this signaling method, which reduces noise and improves integrity.", answer: "What is differential signaling?", points: 400 },
            { clue: "This standard extended RS-422 with multipoint capability and is often used in SCADA and HVAC systems.", answer: "What is RS-485?", points: 500 }
        ],
        "Bluetooth & NFC": [
            { clue: "Pairing two Bluetooth devices creates this, allowing them to automatically reconnect in the future.", answer: "What is a link key?", points: 100 },
            { clue: "This attack involves unauthorized access to a Bluetooth device’s data.", answer: "What is bluesnarfing?", points: 200 },
            { clue: "Bluetooth 5.0 increased the maximum range up to this distance in meters.", answer: "What is 40 meters?", points: 300 },
            { clue: "NFC operates at this frequency within the RFID spectrum.", answer: "What is 13.56 MHz?", points: 400 },
            { clue: "Name the three NFC operating modes.", answer: "What are peer-to-peer, reader/writer, and card emulation?", points: 500 }
        ],
        "Mobile Accessories": [
            { clue: "This type of case folds over like a book and may include slots for payment cards.", answer: "What is a folio case?", points: 100 },
            { clue: "This portable device lets you recharge your phone when no wall outlet is available.", answer: "What is a power bank?", points: 200 },
            { clue: "This type of screen protector offers the best clarity and durability but is bulkier.", answer: "What is a solid glass protector?", points: 300 },
            { clue: "These accessories can overlay digital features on top of real-world views.", answer: "What are augmented reality (AR) headsets/glasses?", points: 400 },
            { clue: "Apple’s certification program for Lightning accessories stands for this phrase.", answer: "What is Made for iPhone/iPod/iPad (MFi)?", points: 500 }
        ],
        "Mobile Connectivity & Updates": [
            { clue: "Clearing this can fix app connectivity issues by removing stale or unnecessary data.", answer: "What is the cache?", points: 100 },
            { clue: "This type of update addresses vulnerabilities as soon as they’re discovered.", answer: "What is a security update?", points: 200 },
            { clue: "This feature, when enabled, automatically installs operating system and app updates.", answer: "What are automatic updates?", points: 300 },
            { clue: "A common problem when applying large updates is running out of this on the device.", answer: "What is storage space?", points: 400 },
            { clue: "If an update fails to install, most devices will revert to this state.", answer: "What is the previous/consistent state?", points: 500 }
        ],
        "Security & Power": [
            { clue: "Using facial recognition or multi-factor authentication instead of a simple PIN is an example of this.", answer: "What is strong authentication?", points: 100 },
            { clue: "To protect data on a lost or stolen device, many phones allow you to do this remotely.", answer: "What is remotely lock or wipe?", points: 200 },
            { clue: "Public Wi-Fi is risky because it can allow attackers to do this to your data.", answer: "What is intercept/eavesdrop?", points: 300 },
            { clue: "Wired charging typically has about 90–95% power efficiency, while wireless charging averages only this range.", answer: "What is 75–85%?", points: 400 },
            { clue: "The best charging practice for lithium-ion batteries is to keep the charge between these two percentages.", answer: "What is between 20% and 80%?", points: 500 }
        ]
    },
    "mod 3": {
        "Wireless & Cellular Data": [
            { clue: "This type of network connection is limited to the range of a router and is typically used for internet connectivity.", answer: "What is a Wi-Fi network?", points: 100 },
            { clue: "This term, which stands for Long-Term Evolution, is a specific standard within the 4G scope.", answer: "What is LTE?", points: 200 },
            { clue: "What are the three most common radio frequency ranges for Wi-Fi networks?", answer: "What are 2.4 GHz, 5 GHz, and 6 GHz?", points: 300 },
            { clue: "Which type of connection, Wi-Fi or cellular, typically has lower latency for local access and why?", answer: "What is Wi-Fi, because you are closer to the transmission source?", points: 400 },
            { clue: "What is a significant benefit of cellular networks over Wi-Fi in terms of mobility?", answer: "What is widespread coverage and seamless roaming?", points: 500 }
        ],
        "Location Services": [
            { clue: "This feature on mobile devices allows them to determine their geographic position using GPS, Wi-Fi, and cellular data.", answer: "What are location services?", points: 100 },
            { clue: "This location method is based on the device's distance from at least three cellular towers.", answer: "What is cellular triangulation?", points: 200 },
            { clue: "This term refers to setting up a virtual perimeter on a map to be notified when a device crosses it.", answer: "What is geofencing?", points: 300 },
            { clue: "What are two common applications that rely on location services for functionality?", answer: "What are map applications and ride-sharing/delivery apps?", points: 400 },
            { clue: "What are two security measures you can take regarding location services on your device?", answer: "What are disabling location services for specific apps and/or using a VPN?", points: 500 }
        ],
        "MDM & BYOD": [
            { clue: "What does the acronym BYOD stand for?", answer: "What is Bring Your Own Device?", points: 100 },
            { clue: "This type of service allows an organization's IT administrators to remotely manage, monitor, and secure mobile devices.", answer: "What is Mobile Device Management or MDM?", points: 200 },
            { clue: "What is a major financial benefit of a BYOD policy for an organization?", answer: "What is reduced cost because the organization does not have to purchase devices?", points: 300 },
            { clue: "With a corporately-owned device under MDM, what are two security actions an administrator can perform remotely?", answer: "What are remotely locking or wiping the device?", points: 400 },
            { clue: "In a BYOD environment, what is a security risk regarding data and what is a risk related to malware?", answer: "What are data leakage by storing confidential data on a personal device and malware/phishing attacks from personal email or downloads?", points: 500 }
        ],
        "Mobile Synchronization": [
            { clue: "This process ensures that data like contacts, calendars, and emails remain consistent and up-to-date across all of your devices.", answer: "What is synchronization?", points: 100 },
            { clue: "What are two methods for mobile device synchronization?", answer: "What are cloud services, local networks, or direct connections (like USB)?", points: 200 },
            { clue: "What is a security consideration when synchronizing sensitive files with cloud services?", answer: "What is ensuring the service offers end-to-end encryption?", points: 300 },
            { clue: "What should you do before performing a large synchronization operation to prevent data loss?", answer: "What is back up your data?", points: 400 },
            { clue: "In the event of a sync failure, what are two troubleshooting steps you can take?", answer: "What are checking background data usage is enabled, resetting the configuration, or checking for app updates?", points: 500 }
        ],
        "Performance Optimization": [
            { clue: "What is the primary cause of a mobile device slowing down over time?", answer: "What are application bloat, excessive background processes, or hardware limitations?", points: 100 },
            { clue: "What is one way to limit background app activity to improve performance and battery life?", answer: "What is turning off features like auto-refresh?", points: 200 },
            { clue: "Why might a user choose to use a \"lite\" version of an application?", answer: "What is because it consumes fewer resources?", points: 300 },
            { clue: "What is a simple maintenance action you can perform periodically to clear memory leaks?", answer: "What is restarting your device?", points: 400 },
            { clue: "What is a built-in tool that Android and iOS offer to help optimize storage?", answer: "What are Files by Google (Android) or Offload Unused Apps (iOS)?", points: 500 }
        ]
    },
    "mod 4": {
        "Ports & Protocols": [
            { clue: "This defines the rules for communication between network devices.", answer: "What is a protocol?", points: 100 },
            { clue: "This number is assigned to a specific service or application to direct data to the correct destination on a device.", answer: "What is a port number?", points: 200 },
            { clue: "This protocol is considered connection-oriented, ensuring data is delivered in the correct order and without errors.", answer: "What is TCP (Transmission Control Protocol)?", points: 300 },
            { clue: "This protocol is considered connectionless and is primarily used for speed over reliability, such as in video streaming.", answer: "What is UDP (User Datagram Protocol)?", points: 400 },
            { clue: "What are the two most important components that facilitate communication between devices in any network?", answer: "What are networking ports and protocols?", points: 500 }
        ],
        "Network Devices": [
            { clue: "This device connects different network segments and uses a routing table to forward data packets to the correct destination.", answer: "What is a router?", points: 100 },
            { clue: "This device connects multiple devices on the same local network, using their MAC addresses to direct traffic.", answer: "What is a switch?", points: 200 },
            { clue: "This device allows wireless devices to connect to a wired network.", answer: "What is an access point?", points: 300 },
            { clue: "In a network, what are two primary functions of a switch?", answer: "What are connecting devices and forwarding traffic?", points: 400 },
            { clue: "What is the key difference between a switch and a router?", answer: "What is that a switch connects devices on a local network, while a router connects multiple networks?", points: 500 }
        ],
        "Addressing & Topologies": [
            { clue: "What does the acronym IP stand for?", answer: "What is Internet Protocol?", points: 100 },
            { clue: "What is the primary function of an IP address?", answer: "What is to uniquely identify a device on a network?", points: 200 },
            { clue: "What is the most common addressing scheme used for devices on the internet?", answer: "What is IPv4?", points: 300 },
            { clue: "What is the primary benefit of IPv6 over IPv4?", answer: "What is that it has a much larger address space?", points: 400 },
            { clue: "What type of physical topology has all devices connected to a single central hub?", answer: "What is a star topology?", points: 500 }
        ],
        "Firewalls & Subnetting": [
            { clue: "This is a security device or software that filters incoming and outgoing network traffic based on a set of rules.", answer: "What is a firewall?", points: 100 },
            { clue: "In a network, what is the primary purpose of a firewall?", answer: "What is to prevent unauthorized access?", points: 200 },
            { clue: "This term refers to the process of dividing a large network into smaller, more manageable sub-networks.", answer: "What is subnetting?", points: 300 },
            { clue: "What are two benefits of using subnetting in a large network?", answer: "What are improved performance and increased security?", points: 400 },
            { clue: "If a company wants to separate its guest Wi-Fi from its corporate network, which two networking concepts would be applied?", answer: "What are network segmentation and firewall rules?", points: 500 }
        ],
        "Wired Connections": [
            { clue: "This type of cable is commonly used for wired internet connections and has an RJ45 connector.", answer: "What is an Ethernet cable?", points: 100 },
            { clue: "What are two benefits of a wired connection over a wireless one?", answer: "What are faster speeds and more stable connections?", points: 200 },
            { clue: "This technology allows both power and data to be sent over a single Ethernet cable.", answer: "What is Power over Ethernet or PoE?", points: 300 },
            { clue: "What are two devices that typically use PoE?", answer: "What are IP cameras and wireless access points?", points: 400 },
            { clue: "When would you choose to use PoE instead of a traditional wired connection?", answer: "What is when you need to provide both power and data to a device in a location where an electrical outlet is not easily accessible?", points: 500 }
        ],
        "Wireless Infrastructure": [
            { clue: "This device is used to extend a wired network into a wireless one, typically in an office or public hotspot setting.", answer: "What is an access point?", points: 100 },
            { clue: "This device receives an existing Wi-Fi signal and rebroadcasts it to increase coverage, but can reduce the bandwidth in the process.", answer: "What is a wireless repeater?", points: 200 },
            { clue: "This device can extend an existing Wi-Fi signal and, unlike a repeater, can use a wired Ethernet connection to prevent speed reduction.", answer: "What is a wireless extender?", points: 300 },
            { clue: "An extender can connect to the original Wi-Fi signal using a wired connection, which is referred to as this.", answer: "What is a backhaul?", points: 400 },
            { clue: "What is the primary difference between a wireless repeater and a wireless extender?", answer: "What is that an extender can use a wired connection to its source, whereas a repeater only works wirelessly?", points: 500 }
        ]
    },
    "mod 5": {
        "Wireless Adapters & Types": [
            { clue: "These devices enable communication without a cable connection, providing access to the internet and peripherals.", answer: "What are wireless adapters?", points: 100 },
            { clue: "This type of wireless adapter is physically installed into a desktop computer's motherboard.", answer: "What is a PCIe wireless card?", points: 200 },
            { clue: "This type of wireless adapter can be used to add wireless connectivity to a system or replace a broken built-in adapter.", answer: "What is a USB wireless adapter?", points: 300 },
            { clue: "What are two types of devices that will almost certainly have integrated wireless adapters?", answer: "What are laptops, tablets, and mobile phones?", points: 400 },
            { clue: "In terms of wireless adapters, what are two common issues and solutions?", answer: "What are weak signal strength or interference, and the solution is to be as close to the source as possible or change the frequency band?", points: 500 }
        ],
        "Bluetooth & NFC": [
            { clue: "This wireless technology is typically used for short-range communication with peripheral devices like headphones and mice.", answer: "What is Bluetooth?", points: 100 },
            { clue: "This technology is used for contactless data exchange over very short distances, such as for mobile payments.", answer: "What is Near-Field Communication, or NFC?", points: 200 },
            { clue: "In terms of range, a modern Bluetooth connection can reach up to this many meters.", answer: "What is 100 meters?", points: 300 },
            { clue: "For security reasons, NFC's range is intentionally limited to this distance or less.", answer: "What is 4 centimeters?", points: 400 },
            { clue: "What are the approximate maximum data speeds for Bluetooth and NFC?", answer: "What is 1 to 3 Mbps for Bluetooth and less than 0.5 Mbps for NFC?", points: 500 }
        ],
        "Wi-Fi Standards & Frequencies": [
            { clue: "All modern Wi-Fi standards are defined by this family of standards.", answer: "What is the IEEE 802.11?", points: 100 },
            { clue: "This Wi-Fi frequency band offers a longer range and better penetration through obstacles.", answer: "What is 2.4 GHz?", points: 200 },
            { clue: "This Wi-Fi frequency band offers higher speeds but a shorter range.", answer: "What is 5 GHz?", points: 300 },
            { clue: "This Wi-Fi standard was the first to support both 2.4 GHz and 5 GHz frequency bands.", answer: "What is 802.11n?", points: 400 },
            { clue: "The latest Wi-Fi standard, Wi-Fi 7, introduces this feature that allows devices to use multiple frequencies at the same time.", answer: "What is Multi-Link Operation, or MLO?", points: 500 }
        ],
        "Wi-Fi Authentication & Security": [
            { clue: "This authentication method, which requires no password, is typically used for public hotspots.", answer: "What is open authentication?", points: 100 },
            { clue: "What do WPA2 and WPA3 stand for?", answer: "What is Wi-Fi Protected Access?", points: 200 },
            { clue: "This is a feature on some routers that allows devices to connect with the push of a button, but it should be disabled for security.", answer: "What is Wi-Fi Protected Setup, or WPS?", points: 300 },
            { clue: "What are two security best practices for a home Wi-Fi network?", answer: "What are changing the default network name (SSID), changing the password, and using WPA3 encryption?", points: 400 },
            { clue: "This highly secure authentication method is typically found in enterprise environments because it requires a centralized server.", answer: "What is 802.1X and EAP?", points: 500 }
        ],
        "Real-World Wireless Applications": [
            { clue: "Wireless adapters enable remote workers and travelers to connect to a corporate network and gain access to this.", answer: "What is the internet?", points: 100 },
            { clue: "Bluetooth is used in these types of deployments to interconnect devices like smart plugs and door locks.", answer: "What is IoT (Internet of Things) or smart home?", points: 200 },
            { clue: "What are two types of environments where public Wi-Fi networks are commonly found?", answer: "What are restaurants, hotels, or coffee shops?", points: 300 },
            { clue: "In enterprise networking, what is one reason a company might install wireless adapters on desktop systems?", answer: "What is to make them more mobile?", points: 400 },
            { clue: "What is a benefit of using a public Wi-Fi network that has a password, even if it's widely known?", answer: "What is that the communications are encrypted, which protects against eavesdroppers?", points: 500 }
        ],
        "Troubleshooting Wireless Networks": [
            { clue: "What is the most common cause of poor Wi-Fi performance?", answer: "What is a weak signal?", points: 100 },
            { clue: "What is a common source of interference that can affect Wi-Fi signals?", answer: "What are microwaves, cordless phones, or other Wi-Fi networks?", points: 200 },
            { clue: "What is a simple first step to troubleshoot a Wi-Fi connection issue?", answer: "What is to restart the device or the router?", points: 300 },
            { clue: "What is the term for when a wireless signal travels through obstacles, causing a decrease in signal strength?", answer: "What is attenuation?", points: 400 },
            { clue: "Why would you change the channel on your Wi-Fi router?", answer: "What is to avoid interference from other networks that are using the same channel?", points: 500 }
        ]
    },
    "mod 6": {
        "IP Addressing Basics": [
            { clue: "This is the newer version of the Internet Protocol, which uses a 128-bit address space.", answer: "What is IPv6?", points: 100 },
            { clue: "The older version of the Internet Protocol that uses a 32-bit address space and a dotted decimal notation.", answer: "What is IPv4?", points: 200 },
            { clue: "This is a configuration process used by IPv6 devices that allows them to automatically generate their own address.", answer: "What is Stateless Address Autoconfiguration, or SLAAC?", points: 300 },
            { clue: "What is one key security difference between IPv4 and IPv6?", answer: "What is that security, or IPSec, is optional in IPv4 but built into IPv6?", points: 400 },
            { clue: "What is the main reason IPv6 was created?", answer: "What is to provide a much larger address space to accommodate the number of devices on the internet?", points: 500 }
        ],
        "Network Services": [
            { clue: "This type of server is used for assigning IP addresses and other configuration information to devices on a network automatically.", answer: "What is a Dynamic Host Configuration Protocol, or DHCP, server?", points: 100 },
            { clue: "This service translates human-readable domain names like 'google.com' into IP addresses that computers can understand.", answer: "What is Domain Name System, or DNS?", points: 200 },
            { clue: "In DNS, this type of record stands for 'Canonical Name' and is used to create an alias for a server.", answer: "What is a CNAME record?", points: 300 },
            { clue: "In the DHCP process, what is the final message a client sends to the server after it has accepted an IP address offer?", answer: "What is a DHCP acknowledgment?", points: 400 },
            { clue: "What are two key security records that can be found in a DNS TXT record for email?", answer: "What are SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail)?", points: 500 }
        ],
        "Server Roles": [
            { clue: "This type of server provides centralized storage and access to files for an organization's network.", answer: "What is a file server?", points: 100 },
            { clue: "This server role is responsible for handling incoming web requests and serving web pages to users.", answer: "What is a web server?", points: 200 },
            { clue: "What are two security measures that are often implemented on mail servers to protect against junk messages?", answer: "What are email filtering and anti-spam software?", points: 300 },
            { clue: "Name two common protocols used by a mail server.", answer: "What are SMTP, POP3, and IMAP?", points: 400 },
            { clue: "This type of database is often referred to as NoSQL and is used to handle unstructured or semi-structured data like social media posts.", answer: "What is a non-relational database?", points: 500 }
        ],
        "Addressing Concepts": [
            { clue: "This type of IP address is globally unique and is assigned to your network by your Internet Service Provider.", answer: "What is a public IP address?", points: 100 },
            { clue: "This type of IP address is used for internal networks and can be reused in many different locations.", answer: "What is a private IP address?", points: 200 },
            { clue: "The process of dividing a large IP network into smaller, more manageable sub-networks.", answer: "What is subnetting?", points: 300 },
            { clue: "This notation, often used instead of a full subnet mask, is a shorthand way of indicating the number of bits used for the network portion of an address.", answer: "What is CIDR, or Classless Inter-Domain Routing?", points: 400 },
            { clue: "In any IP network, these are the two addresses that are never used for host addressing.", answer: "What are the network address and the broadcast address?", points: 500 }
        ],
        "Network Appliances": [
            { clue: "This type of appliance is used in a corporate environment to prevent users from accessing inappropriate websites or other specific content.", answer: "What is a content filter?", points: 100 },
            { clue: "This device distributes incoming network traffic across multiple servers to improve performance and provide fault tolerance.", answer: "What is a load balancer?", points: 200 },
            { clue: "This appliance serves as a centralized connection point for Internet of Things (IoT) devices.", answer: "What is an IoT gateway?", points: 300 },
            { clue: "When you have four web servers, what percentage of incoming requests would a load balancer send to each server if they are all working?", answer: "What is approximately 25%?", points: 400 },
            { clue: "What is one key benefit of using a cloud-managed network appliance?", answer: "What is that you do not have to look after the physical hardware?", points: 500 }
        ],
        "Configuration & Troubleshooting": [
            { clue: "This type of IP address is manually configured on a device and will not change over time.", answer: "What is a static IP address?", points: 100 },
            { clue: "This is a common method for automatically assigning IP addresses to client devices in a network.", answer: "What is Dynamic Host Configuration Protocol, or DHCP?", points: 200 },
            { clue: "This addressing method is a fallback that a device will use if it cannot contact a DHCP server, and it will start with a '169.254' address.", answer: "What is Automatic Private IP Addressing, or APIPA?", points: 300 },
            { clue: "What is a common troubleshooting step for a slow-loading web page on a web server?", answer: "What is to check the cache settings or enable compression?", points: 400 },
            { clue: "This is a common issue with web server SSL certificates.", answer: "What is that they have an expiry date?", points: 500 }
        ]
    },
    "mod 7": {
        "DNS Essentials": [
            { clue: "This DNS record maps a name to an IP address and is the most common type.", answer: "What is an A record?", points: 100 },
            { clue: "This DNS record, which stands for mail exchanger, helps the rest of the world locate your mail server.", answer: "What is an MX record?", points: 200 },
            { clue: "The IPv6 version of an A record is identified by this.", answer: "What is four 'A's?", points: 300 },
            { clue: "The purpose of this DNS record is to provide textual information, which can include SPF and DKIM for email validation.", answer: "What is a TXT record?", points: 400 },
            { clue: "What is the primary function of DNS in networking?", answer: "What is to translate human-readable names into IP addresses?", points: 500 }
        ],
        "Advanced DNS": [
            { clue: "This value, or 'time to live', determines how long a name resolution remains in a client's cache.", answer: "What is a TTL?", points: 100 },
            { clue: "This protocol helps prevent email spoofing by aligning with SPF and DKIM records and helps monitor email abuse.", answer: "What is DMARC?", points: 200 },
            { clue: "Name two tools you can use to troubleshoot DNS configurations.", answer: "What are nslookup and dig?", points: 300 },
            { clue: "DNSSEC helps ensure the integrity of information sent to a DNS server by doing this.", answer: "What is securing the configuration of records?", points: 400 },
            { clue: "Name two encrypted DNS protocols that are becoming more common.", answer: "What are DNS over TLS (DoT) and DNS over HTTPS (DoH)?", points: 500 }
        ],
        "DHCP Fundamentals": [
            { clue: "This protocol automates the assignment of IP address configurations to devices on a network.", answer: "What is Dynamic Host Configuration Protocol, or DHCP?", points: 100 },
            { clue: "A client device that does not already have an IP address uses this method to find a DHCP server on the network.", answer: "What is a broadcast?", points: 200 },
            { clue: "What is the primary benefit of using DHCP?", answer: "What is simplified network management by automatically assigning addresses?", points: 300 },
            { clue: "When a DHCP client receives an IP address offer from a server, it sends back this message to confirm its acceptance.", answer: "What is a DHCP request?", points: 400 },
            { clue: "What are the four steps of the DHCP process?", answer: "What are Discover, Offer, Request, and Acknowledge?", points: 500 }
        ],
        "DHCP Management": [
            { clue: "This term defines the range of IP addresses that a DHCP server can assign.", answer: "What is a scope?", points: 100 },
            { clue: "This defines how long a device can keep an IP address assigned by DHCP.", answer: "What is a lease duration?", points: 200 },
            { clue: "This is a feature that allows a DHCP server to always assign the same IP address to a specific device.", answer: "What is a reservation?", points: 300 },
            { clue: "Within a DHCP scope, you can configure this to prevent the server from assigning certain addresses that are already in use.", answer: "What is an exclusion?", points: 400 },
            { clue: "A DHCP client attempts to renew its IP address lease at this percentage of the lease duration.", answer: "What is 50%?", points: 500 }
        ],
        "VLANs 101": [
            { clue: "This is a logically segmented network that groups devices together regardless of their physical location.", answer: "What is a Virtual Local Area Network, or VLAN?", points: 100 },
            { clue: "VLANs help improve network security by allowing you to do this to different groups of systems.", answer: "What is isolate them?", points: 200 },
            { clue: "What is the primary benefit of using VLANs in a large enterprise network?", answer: "What is better organization and management?", points: 300 },
            { clue: "What is a common result of using VLANs to create smaller networks within a larger one?", answer: "What is a reduction in broadcast traffic?", points: 400 },
            { clue: "What do VLANs use instead of a physical location to group systems?", answer: "What is software configuration?", points: 500 }
        ],
        "VLAN Types & Tags": [
            { clue: "This type of VLAN is always present on a VLAN-enabled switch and is the one that all ports are automatically added to.", answer: "What is the default VLAN?", points: 100 },
            { clue: "This type of VLAN is used for standard network communications.", answer: "What is a data VLAN?", points: 200 },
            { clue: "This type of VLAN is used to carry traffic like video conferencing because it often has a higher transmission priority.", answer: "What is a voice VLAN?", points: 300 },
            { clue: "This type of VLAN is used for traffic that has not been specifically tagged.", answer: "What is the native VLAN?", points: 400 },
            { clue: "What is the standard defined by the IEEE for identifying VLAN traffic?", answer: "What is 802.1Q?", points: 500 }
        ]
    },
    "mod 8": {
        "Cable Termination Tools": [
            { clue: "This tool is used to remove the outer insulation of a cable without damaging the inner wires.", answer: "What is a cable stripper?", points: 100 },
            { clue: "This tool is used to attach connectors, such as RJ45, to the end of a network cable.", answer: "What is a crimper?", points: 200 },
            { clue: "This type of tool is used to insert copper wires into a patch panel or keystone jack.", answer: "What is a punch down tool?", points: 300 },
            { clue: "What is the name of the connector commonly used in Ethernet networking?", answer: "What is RJ45?", points: 400 },
            { clue: "What is a benefit of using a self-adjusting wire stripper over a standard adjustable one?", answer: "What is that it automatically adjusts to the wire gauge?", points: 500 }
        ],
        "Network Testers": [
            { clue: "This tool consists of a toner generator and a probe receiver to identify a specific cable in a bundle by sound.", answer: "What is a toner probe?", points: 100 },
            { clue: "This type of tester only checks if a wire is connected from end to end.", answer: "What is a continuity tester?", points: 200 },
            { clue: "This device can not only detect a break in a cable but also indicate the distance to the break.", answer: "What is a Time Domain Reflectometer, or TDR?", points: 300 },
            { clue: "This type of tester checks for correct wiring standards, like T568A or T568B, and can detect miswiring.", answer: "What is a wire map tester?", points: 400 },
            { clue: "This comprehensive tool determines if a cable is suitable for specific transmission speeds or frequencies.", answer: "What is a certifier?", points: 500 }
        ],
        "Network Taps & SPAN": [
            { clue: "This hardware device is used to monitor and analyze network traffic without disrupting normal operations.", answer: "What is a network tap?", points: 100 },
            { clue: "This type of tap requires an external power source but can still forward traffic if the power fails.", answer: "What is an active tap?", points: 200 },
            { clue: "This type of tap is often used for fiber networks and does not require power.", answer: "What is a passive tap?", points: 300 },
            { clue: "This type of tap merges data from multiple network links into a single monitoring port.", answer: "What is an aggregation tap?", points: 400 },
            { clue: "What is the key difference between a network tap and a SPAN port?", answer: "What is that a network tap is a hardware device, and a SPAN port is software that replicates traffic within a switch?", points: 500 }
        ],
        "Command-Line Diagnostics": [
            { clue: "This command-line utility tests connectivity between two network points by sending an ICMP Echo request.", answer: "What is ping?", points: 100 },
            { clue: "This Windows command displays the network adapter configuration.", answer: "What is ipconfig?", points: 200 },
            { clue: "This command-line utility maps the path that data takes through a network by showing information about each device along the way.", answer: "What is traceroute, or tracert?", points: 300 },
            { clue: "What is the key difference between ipconfig and ipconfig /all?", answer: "What is that the '/all' parameter provides a more verbose version of the network card information?", points: 400 },
            { clue: "What is one key reason why IPv6 traceroute results often show less information about routers along the path than IPv4?", answer: "What is that many routers are configured not to provide information about their names?", points: 500 }
        ],
        "Advanced Troubleshooting": [
            { clue: "This open-source, free software captures network packets for analysis and can help identify network and security problems.", answer: "What is Wireshark?", points: 100 },
            { clue: "This small device is used to test a network port by sending a signal back to itself.", answer: "What is a loopback plug?", points: 200 },
            { clue: "What is one key benefit of using a loopback plug for troubleshooting?", answer: "What is that it helps diagnose port failures without requiring an external network connection?", points: 300 },
            { clue: "What is the term for a situation where network packets are not reaching their destination, causing interruptions in a data stream?", answer: "What is packet loss?", points: 400 },
            { clue: "What is the key benefit of an AI-driven network diagnostic system over traditional methods?", answer: "What is that it can analyze vast amounts of data and predict potential future problems?", points: 500 }
        ],
        "Common Cable Issues": [
            { clue: "This type of cable issue, where the wires are in physical contact with each other, can be caused by physical damage.", answer: "What is a short circuit?", points: 100 },
            { clue: "A break in a cable or a poor connection at the end of a cable will cause this type of circuit.", answer: "What is an open circuit?", points: 200 },
            { clue: "This type of issue is caused by an incorrect wiring order, such as when the T568A or T568B standards are not followed.", answer: "What are crossed pairs?", points: 300 },
            { clue: "What is one way a technician can troubleshoot a loose connection?", answer: "What is by swapping out the patch cables or using a cable tester?", points: 400 },
            { clue: "What are two common causes of physical damage to cables in an office environment?", answer: "What is people pulling on cables or running them over with chairs?", points: 500 }
        ]
    },
    "mod 9": {
        "Ethernet Cables": [
            { clue: "This category of Ethernet cable is an enhanced version of the original Cat5 and supports speeds up to 1 Gbps.", answer: "What is Cat5e?", points: 100 },
            { clue: "This category of Ethernet cable supports up to 10 Gbps over distances up to 55 meters.", answer: "What is Cat6?", points: 200 },
            { clue: "This category of Ethernet cable adds shielding and reduces interference, supporting 10 Gbps or higher in noisy environments.", answer: "What is Cat7?", points: 300 },
            { clue: "This is the newest and fastest category of Ethernet cable, supporting up to 40 Gbps over shorter runs.", answer: "What is Cat8?", points: 400 },
            { clue: "Name two advantages of a wired Ethernet connection over Wi-Fi.", answer: "What are faster speeds, lower latency, or more reliable performance?", points: 500 }
        ],
        "Twisted Pair Cabling": [
            { clue: "This type of cabling relies solely on the twisting of wire pairs to minimize interference and crosstalk.", answer: "What is unshielded twisted pair, or UTP?", points: 100 },
            { clue: "This type of cabling adds a metallic layer around the twisted wires to block external electromagnetic interference.", answer: "What is shielded twisted pair, or STP?", points: 200 },
            { clue: "This is a major trade-off of using STP instead of UTP cabling.", answer: "What is that it is more expensive and less flexible?", points: 300 },
            { clue: "What is a crucial installation step for STP that is not required for UTP?", answer: "What is proper grounding?", points: 400 },
            { clue: "In what type of environment would you most likely choose STP over UTP?", answer: "What is in an industrial setting or data center where electromagnetic interference is common?", points: 500 }
        ],
        "Optical Fiber": [
            { clue: "This type of cable transmits data using light pulses instead of electrical signals.", answer: "What is optical fiber?", points: 100 },
            { clue: "This type of optical fiber uses a single light path and is ideal for long-distance transmissions.", answer: "What is single-mode fiber, or SMF?", points: 200 },
            { clue: "This type of optical fiber uses multiple light paths and is more common in local area networks for shorter distances.", answer: "What is multi-mode fiber, or MMF?", points: 300 },
            { clue: "What is a major advantage of optical fiber over copper cabling in terms of interference?", answer: "What is that it is immune to electromagnetic interference?", points: 400 },
            { clue: "Name one application for which single-mode fiber is better suited, and one for which multi-mode fiber is better suited.", answer: "What is single-mode for telecommunications or ISPs, and multi-mode for data centers or LANs?", points: 500 }
        ],
        "Connectors & Adapters": [
            { clue: "What does the RJ in RJ45 stand for?", answer: "What is Registered Jack?", points: 100 },
            { clue: "This fiber optic connector is known for its compact size and is widely used in high-density data centers.", answer: "What is a Lucent Connector, or LC?", points: 200 },
            { clue: "This legacy video adapter is analog and is still used to connect older monitors to newer systems.", answer: "What is a DVI to VGA adapter?", points: 300 },
            { clue: "This ruggedized connector is used in industrial environments because it resists moisture, vibration, and dust.", answer: "What is an M12 connector?", points: 400 },
            { clue: "What is the primary function of an adapter?", answer: "What is to allow one type of connector or signal to interface with another?", points: 500 }
        ],
        "Wiring & Standards": [
            { clue: "These two wiring standards ensure consistency and compatibility for twisted pair Ethernet cables.", answer: "What are T568A and T568B?", points: 100 },
            { clue: "What is the name for the termination points used in structured cabling that allow for organized wire connections without soldering?", answer: "What are punch down blocks?", points: 200 },
            { clue: "This older type of punch down block is primarily used for analog voice systems and is not suitable for modern Ethernet networks.", answer: "What is a 66 block?", points: 300 },
            { clue: "The most common type of punch down block for modern Ethernet networks is a 110 block, while this type, developed in Europe, is known for reducing crosstalk.", answer: "What is a Krone block?", points: 400 },
            { clue: "What is one key best practice when installing Ethernet cables to ensure proper performance?", answer: "What is avoiding sharp bends or keeping them away from sources of electromagnetic interference?", points: 500 }
        ],
        "Network Performance": [
            { clue: "This term describes the maximum rate at which data can be transferred across a network.", answer: "What is bandwidth?", points: 100 },
            { clue: "This term refers to the delay before data begins to transfer.", answer: "What is latency?", points: 200 },
            { clue: "This occurs when data packets fail to reach their destination.", answer: "What is packet loss?", points: 300 },
            { clue: "This term refers to the variations in latency that can cause disruptions in audio or video streams.", answer: "What is jitter?", points: 400 },
            { clue: "Name two common issues that can limit the speed and efficiency of network transmission.", answer: "What are cable quality/length, network congestion, interference, or ISP throttling?", points: 500 }
        ]
    }
    // Add other modules here
};

const board = document.getElementById('jeopardy-board');
const modal = document.getElementById('modal');
const clueContent = document.getElementById('clue-content');
const revealAnswerBtn = document.getElementById('reveal-answer-btn');
const answerKey = document.getElementById('answer-key');
const scoreControls = document.getElementById('scoring-controls');
const scoreDisplays = [
    document.getElementById('score-1'),
    document.getElementById('score-2'),
    document.getElementById('score-3')
];
const moduleMenu = document.getElementById('module-menu');
const dropdownBtn = document.getElementById('dropdown-btn');

let currentClue;
let currentPoints;
let currentPlayerScores = [0, 0, 0];
let currentModuleKey = "mod 1";

// Function to generate the game board for a specific module
function createBoard(moduleKey) {
    board.innerHTML = '';
    const currentModuleData = gameData[moduleKey];
    currentModuleKey = moduleKey;
    const moduleIndex = parseInt(moduleKey.split(' ')[1]) - 1;
    dropdownBtn.textContent = moduleNames[moduleIndex];

    if (!currentModuleData) {
        board.innerHTML = '<p style="font-size: 1.5rem; text-align: center; color: #ffd700;">Content for this module is not yet available. Check back soon!</p>';
        return;
    }

    const categories = Object.values(currentModuleData);
    const categoryTitles = Object.keys(currentModuleData);
    const numClues = categories[0].length;

    categoryTitles.forEach(title => {
        const categoryTitle = document.createElement('div');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = title;
        board.appendChild(categoryTitle);
    });

    for (let i = 0; i < numClues; i++) {
        for (let j = 0; j < categories.length; j++) {
            const clue = categories[j][i];
            const clueCard = document.createElement('div');
            clueCard.classList.add('clue-card');
            clueCard.textContent = clue.points;
            clueCard.dataset.category = j;
            clueCard.dataset.clueIndex = i;
            clueCard.addEventListener('click', () => showClue(clue, clueCard));
            board.appendChild(clueCard);
        }
    }
}

// Function to generate the dropdown menu links
function createDropdownLinks() {
    moduleNames.forEach((name, index) => {
        const a = document.createElement('a');
        const moduleKey = `mod ${index + 1}`;
        a.href = "#";
        a.textContent = name;
        a.dataset.module = moduleKey;

        // Make the link clickable only if content exists in gameData
        if (gameData[moduleKey]) {
            a.classList.add('clickable');
            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.dropdown-content a').forEach(link => link.classList.remove('active'));
                a.classList.add('active');
                createBoard(moduleKey);
                moduleMenu.style.display = 'none'; // Hide the menu after selection
            });
        }
        
        moduleMenu.appendChild(a);
    });
}

// Toggle the dropdown menu visibility
dropdownBtn.addEventListener('click', () => {
    moduleMenu.style.display = moduleMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (!e.target.matches('#dropdown-btn') && !e.target.closest('.dropdown-content')) {
        if (moduleMenu.style.display === 'block') {
            moduleMenu.style.display = 'none';
        }
    }
});

// Function to show the clue in the modal
function showClue(clue, cardElement) {
    currentClue = clue;
    currentPoints = clue.points;
    clueContent.textContent = clue.clue;
    answerKey.textContent = clue.answer;

    modal.style.display = 'block';

    // Disable the card after it's clicked
    cardElement.classList.add('disabled');

    // Reset modal state
    revealAnswerBtn.style.display = 'block';
    answerKey.style.display = 'none';
    scoreControls.style.display = 'none';
}

// Function to handle revealing the answer
revealAnswerBtn.addEventListener('click', () => {
    answerKey.style.display = 'block';
    revealAnswerBtn.style.display = 'none';
    scoreControls.style.display = 'block';
});

// Event listeners for Correct/Incorrect buttons
document.querySelectorAll('.correct-btn').forEach(button => {
    button.addEventListener('click', () => {
        const playerIndex = parseInt(button.dataset.player) - 1;
        currentPlayerScores[playerIndex] += currentPoints;
        updateScores();
    });
});

document.querySelectorAll('.incorrect-btn').forEach(button => {
    button.addEventListener('click', () => {
        const playerIndex = parseInt(button.dataset.player) - 1;
        currentPlayerScores[playerIndex] -= currentPoints;
        updateScores();
    });
});

// Function to update score display on the board
function updateScores() {
    scoreDisplays.forEach((display, index) => {
        display.textContent = currentPlayerScores[index];
    });
}

// Close modal when close button is clicked
document.querySelector('.close-button').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    createDropdownLinks();
    createBoard("mod 1"); // Load the first module board by default
});
