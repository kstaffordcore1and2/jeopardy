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
        "Virtual LANs & VPNs": [
            { clue: "What does the acronym VLAN stand for?", answer: "What is Virtual Local Area Network?", points: 100 },
            { clue: "This technology allows devices on different physical network segments to communicate as if they were on the same network.", answer: "What is a VLAN?", points: 200 },
            { clue: "This technology creates a secure, encrypted connection over a public network, allowing remote users to safely access a private network.", answer: "What is a VPN, or Virtual Private Network?", points: 300 },
            { clue: "In a corporate network, what are two benefits of using VLANs?", answer: "What are enhanced security and improved performance?", points: 400 },
            { clue: "What are the two primary protocols that most VPNs rely on for secure communications?", answer: "What are SSL and IPSec?", points: 500 }
        ],
        "NAT & Port Forwarding": [
            { clue: "This networking concept translates a private IP address into a public one, allowing multiple devices on a private network to share a single public IP address.", answer: "What is NAT, or Network Address Translation?", points: 100 },
            { clue: "This process directs incoming network traffic from a specific port to a particular device on a private network.", answer: "What is port forwarding?", points: 200 },
            { clue: "What is a primary benefit of using NAT?", answer: "What is that it helps to conserve the limited number of public IPv4 addresses?", points: 300 },
            { clue: "When would you typically need to use port forwarding?", answer: "What is when you need to access a device on your internal network from the internet, such as a security camera or a game server?", points: 400 },
            { clue: "What is one key security concern with using port forwarding?", answer: "What is that it makes a service on a private network visible to the public internet, which can increase the risk of a cyberattack?", points: 500 }
        ]
    },
    "mod 8": {
        "Network Tools": [
            { clue: "This tool is used to attach connectors to the end of network cables and comes in many different types.", answer: "What are crimpers?", points: 100 },
            { clue: "This tool is used to remove the outer insulation of a cable without damaging the inner wires.", answer: "What are cable strippers?", points: 200 },
            { clue: "This tool is a handheld device used to test the physical connectivity and integrity of a cable.", answer: "What is a cable tester?", points: 300 },
            { clue: "What is a common issue that a cable tester would help you identify?", answer: "What is a short or an open circuit, a crossed pair, or a split pair?", points: 400 },
            { clue: "This is a type of software used to measure and analyze wireless signals to determine their quality and potential interference.", answer: "What is a Wi-Fi analyzer?", points: 500 }
        ],
        "Troubleshooting Methodologies": [
            { clue: "In troubleshooting, this is the first step where you gather information about the problem.", answer: "What is identifying the problem?", points: 100 },
            { clue: "After identifying the problem, what is the next step you should take in the troubleshooting process?", answer: "What is establishing a theory of probable cause?", points: 200 },
            { clue: "What is the third step in the troubleshooting process?", answer: "What is testing the theory to determine the cause?", points: 300 },
            { clue: "What are the two steps that follow testing the theory of probable cause?", answer: "What are establishing a plan of action to resolve the problem and implementing the solution or escalating the issue?", points: 400 },
            { clue: "What are the final two steps of the troubleshooting process?", answer: "What are verifying full system functionality and documenting the findings and actions?", points: 500 }
        ],
        "Network Diagnostics": [
            { clue: "This term describes an issue where a network port or interface continuously toggles between an up and a down state.", answer: "What is port flapping?", points: 100 },
            { clue: "What is the most common reason for a DHCP failure?", answer: "What is an active scope that is empty, the scope is not active, or a rogue DHCP server?", points: 200 },
            { clue: "This type of interference occurs when two or more wireless signals use the same frequency channel.", answer: "What is external interference?", points: 300 },
            { clue: "What is a common cause of external interference?", answer: "What are microwave ovens, cordless phones, or a neighbor’s Wi-Fi network?", points: 400 },
            { clue: "When troubleshooting, what are two reasons why you would disable a port or a switch?", answer: "What are to check for a loop and to confirm that it is not causing a broadcast storm?", points: 500 }
        ],
        "Traceroute & Wireshark": [
            { clue: "This command line utility is used to trace the path a packet takes to a destination and to identify potential network bottlenecks or a routing loop.", answer: "What is traceroute?", points: 100 },
            { clue: "This tool is an open-source packet analyzer that is used to capture and analyze network traffic.", answer: "What is Wireshark?", points: 200 },
            { clue: "When using the Windows traceroute command, this is a flag you can add to prevent it from resolving IP addresses to host names.", answer: "What is -d?", points: 300 },
            { clue: "When using Wireshark, this is what you would use to filter the captured traffic to focus on specific packets.", answer: "What is a display filter?", points: 400 },
            { clue: "When running Wireshark, what are two key pieces of information you would see for each packet?", answer: "What are the source IP address, the destination IP address, the source port, and the destination port?", points: 500 }
        ],
        "Common Troubleshooting Scenarios": [
            { clue: "What is one possible cause of slow Wi-Fi speeds on a mobile device?", answer: "What is a weak signal, a crowded channel, or being too far from the access point?", points: 100 },
            { clue: "In a network, this term refers to the variation in the delay of received packets, which can affect real-time applications like video conferencing.", answer: "What is jitter?", points: 200 },
            { clue: "What is a common first step to troubleshoot a network connectivity issue on a computer?", answer: "What is to run the Windows network troubleshooter or to ping the default gateway?", points: 300 },
            { clue: "When troubleshooting an issue where a user cannot connect to the internet, what is a simple first step to take?", answer: "What is to check that they have an IP address and a default gateway?", points: 400 },
            { clue: "If a user can connect to some websites but not others, what is the most likely culprit?", answer: "What is a DNS issue or a firewall that is blocking certain outbound connections?", points: 500 }
        ],
        "Preventative Maintenance": [
            { clue: "What is the most common cause of hardware failure?", answer: "What is overheating?", points: 100 },
            { clue: "What is a common solution to overheating?", answer: "What is to clean the internal components or add better cooling?", points: 200 },
            { clue: "This term describes the process of checking your log files to find any errors that may be indicative of a hardware or software issue.", answer: "What is system monitoring?", points: 300 },
            { clue: "What are two things you can do to keep your systems running as long as possible?", answer: "What are replacing aging components and keeping the system up to date?", points: 400 },
            { clue: "What is the primary way that preventative maintenance helps to extend the life of a system?", answer: "What is by ensuring that the system is running as efficiently as possible?", points: 500 }
        ]
    },
    "mod 9": {
        "Ethernet Cables": [
            { clue: "This is a type of Ethernet cable that is considered a general standard for basic home and office networks and supports speeds up to 1 Gbps.", answer: "What is Cat5e?", points: 100 },
            { clue: "This type of Ethernet cable can handle up to 10 Gbps over shorter distances.", answer: "What is Cat6?", points: 200 },
            { clue: "What are the two primary wiring standards for terminating Ethernet cables?", answer: "What are T568A and T568B?", points: 300 },
            { clue: "This type of cable is resistant to external interference and is often used in industrial environments.", answer: "What is STP or Shielded Twisted Pair?", points: 400 },
            { clue: "This type of cable uses light pulses to transmit data, enabling much faster speeds and longer distances than traditional copper cables.", answer: "What is a fiber optic cable?", points: 500 }
        ],
        "Video Cables": [
            { clue: "This cable is an older analog standard for video transmission.", answer: "What is VGA?", points: 100 },
            { clue: "This digital video interface is the most common standard for connecting displays to computers and televisions and also transmits audio.", answer: "What is HDMI?", points: 200 },
            { clue: "This digital video interface is a competitor to HDMI and is often found on high-end graphics cards and monitors.", answer: "What is DisplayPort?", points: 300 },
            { clue: "This type of connector is used for both power and data transmission, and is becoming more common on monitors for single-cable solutions.", answer: "What is USB-C?", points: 400 },
            { clue: "What is the primary advantage of DisplayPort over HDMI?", answer: "What is that it can support higher resolutions and refresh rates?", points: 500 }
        ],
        "Peripheral & Storage Cables": [
            { clue: "This is a common interface and cable for connecting external devices like mice, keyboards, and printers.", answer: "What is USB?", points: 100 },
            { clue: "This cable is used to connect a hard drive to a motherboard inside a computer.", answer: "What is a SATA data cable?", points: 200 },
            { clue: "This is a high-speed, versatile port that can connect to displays, external drives, and other peripherals.", answer: "What is Thunderbolt?", points: 300 },
            { clue: "This type of storage cable is used to provide power to hard drives and solid-state drives.", answer: "What is a SATA power cable?", points: 400 },
            { clue: "What is the primary advantage of Thunderbolt over USB?", answer: "What is that it offers higher speeds and can daisy-chain multiple devices?", points: 500 }
        ],
        "Connector Types": [
            { clue: "This common connector is used on a telephone cable.", answer: "What is an RJ11?", points: 100 },
            { clue: "This common connector is used on an Ethernet cable.", answer: "What is an RJ45?", points: 200 },
            { clue: "This is a large, four-pin power connector often used for legacy devices and fans inside a computer case.", answer: "What is a Molex connector?", points: 300 },
            { clue: "This connector is used on a fiber optic cable.", answer: "What is an LC, SC, or ST connector?", points: 400 },
            { clue: "What is the name of the connector type used for coaxial cable?", answer: "What is a BNC or F-Type?", points: 500 }
        ],
        "Cable & Connector Maintenance": [
            { clue: "What is the most common cause of cable-related issues?", answer: "What is physical damage?", points: 100 },
            { clue: "What is a tool you can use to identify if a network cable is damaged?", answer: "What is a cable tester?", points: 200 },
            { clue: "What is one way to prevent physical damage to a cable?", answer: "What is to use cable management tools or to avoid excessive bending?", points: 300 },
            { clue: "A poorly crimped connector may not cause an issue at low speeds but can cause this at high frequencies.", answer: "What is interference?", points: 400 },
            { clue: "What are two things you should consider when selecting a cable for a specific use case?", answer: "What are the required data speed, the distance, and the environment?", points: 500 }
        ],
        "Power Connectors": [
            { clue: "This is the primary power connector used to power a desktop motherboard.", answer: "What is a 24-pin ATX connector?", points: 100 },
            { clue: "This is the primary power connector used for a CPU.", answer: "What is an 8-pin or 4-pin EPS connector?", points: 200 },
            { clue: "This power connector is used for older, non-SATA hard drives and optical drives.", answer: "What is a Molex connector?", points: 300 },
            { clue: "What is the primary power connector used for a graphics card?", answer: "What is a PCIe power connector?", points: 400 },
            { clue: "This standard for power delivery is becoming more common and supports up to 240 watts, enabling it to power larger devices like laptops and monitors.", answer: "What is USB-C Power Delivery?", points: 500 }
        ]
    },
    "mod 10": {
        "SODIMM": [
            { clue: "This type of RAM is smaller than a standard DIMM and is typically found in laptops and small form factor PCs.", answer: "What is a Small Outline Dual Inline Memory Module, or SODIMM?", points: 100 },
            { clue: "SODIMMs are generally engineered to operate at a lower voltage than standard DIMMs to help with this.", answer: "What is extending battery life?", points: 200 },
            { clue: "This feature of SODIMMs allows users to easily expand a device's memory to extend its useful life and improve performance.", answer: "What is upgradability?", points: 300 },
            { clue: "What are two types of computing environments where SODIMMs are the go-to memory choice due to their compact size and energy efficiency?", answer: "What are laptops, mini PCs, and embedded systems?", points: 400 },
            { clue: "What are two things you should check before installing a new SODIMM module to ensure compatibility?", answer: "What are the laptop's motherboard and chipset support the RAM type and that the new memory matches the system's speed and voltage?", points: 500 }
        ],
        "DDR Generations": [
            { clue: "DDR3 memory brought improvements in both performance and efficiency, most notably by operating at this lower voltage compared to its predecessor.", answer: "What is 1.5 volts?", points: 100 },
            { clue: "This type of RAM succeeded DDR3, bringing increased bandwidth, lower voltage, and greater memory capacities.", answer: "What is DDR4?", points: 200 },
            { clue: "This type of memory, which is becoming more prevalent in ultra-thin laptops and mobile devices, consumes less power while maintaining high performance.", answer: "What is Low Power DDR (LPDDR)?", points: 300 },
            { clue: "What are two limitations of DDR3 memory in modern systems?", answer: "What are slower speeds compared to DDR4 and DDR5 and limited scalability?", points: 400 },
            { clue: "What is the key advantage of DDR5 over DDR4?", answer: "What is that it offers increased bandwidth and better power efficiency?", points: 500 }
        ],
        "Memory Channels": [
            { clue: "This memory configuration is where only one memory module communicates with the memory controller at a time.", answer: "What is single channel memory mode?", points: 100 },
            { clue: "This memory configuration, which is common in many consumer desktops, uses two RAM modules to double the memory bandwidth.", answer: "What is dual channel memory mode?", points: 200 },
            { clue: "This older memory configuration was designed for specific high-performance workstations and servers and uses three RAM modules.", answer: "What is triple channel memory?", points: 300 },
            { clue: "What is a significant benefit of using a multi-channel memory configuration?", answer: "What is an increase in memory bandwidth for better performance in demanding tasks?", points: 400 },
            { clue: "This memory configuration uses four RAM modules simultaneously and is ideal for intensive workloads like 3D rendering and scientific computing.", answer: "What is quad channel memory?", points: 500 }
        ],
        "Storage Devices": [
            { clue: "This is a type of storage that uses a spinning disk and is more cost-effective for large capacities but is slower.", answer: "What is a Hard Disk Drive, or HDD?", points: 100 },
            { clue: "This faster, more durable storage device does not have any moving parts.", answer: "What is a Solid-State Drive, or SSD?", points: 200 },
            { clue: "This storage device is directly connected to the motherboard and uses PCIe for much faster speeds.", answer: "What is NVMe?", points: 300 },
            { clue: "This term describes a collection of hard drives that work together as a single logical unit to improve performance, provide redundancy, or both.", answer: "What is RAID, or Redundant Array of Independent Disks?", points: 400 },
            { clue: "What are two key advantages of SSDs over HDDs?", answer: "What are faster speeds, better durability, and lower power consumption?", points: 500 }
        ],
        "Removable Storage": [
            { clue: "This type of removable storage is perfect for quick and temporary file transfers between computers.", answer: "What is a flash drive?", points: 100 },
            { clue: "This type of removable storage is commonly used in cameras, drones, and smartphones to expand storage.", answer: "What is a memory card?", points: 200 },
            { clue: "Optical discs like CDs and DVDs are ideal for this purpose due to their long-term data retention.", answer: "What is data archival or backups?", points: 300 },
            { clue: "What are two benefits of using removable storage?", answer: "What are portability and convenience?", points: 400 },
            { clue: "What is one type of removable storage you might use to install an operating system?", answer: "What is a bootable flash drive?", points: 500 }
        ],
        "Memory Troubleshooting": [
            { clue: "What is the most common reason a memory module fails to activate its designated channel mode?", answer: "What is improper placement of the modules?", points: 100 },
            { clue: "What is a first step to take if you are having issues with your RAM modules?", answer: "What is to reseat the modules?", points: 200 },
            { clue: "What is a common troubleshooting step for a system that isn't recognizing quad channel memory?", answer: "What is to verify that all four RAM modules are installed in the correct slots as specified in the motherboard manual?", points: 300 },
            { clue: "What is a tool you can use to detect faulty RAM modules?", answer: "What is Windows Memory Diagnostic or MemTest86?", points: 400 },
            { clue: "What is one thing you can do to optimize your memory's performance, especially for high-speed modules?", answer: "What is to enable XMP profiles in the BIOS?", points: 500 }
        ]
    },
    "mod 11": {
        "Motherboards & Form Factors": [
            { clue: "This is a large circuit board that facilitates communication between all of a computer's components.", answer: "What is a motherboard?", points: 100 },
            { clue: "This term refers to the physical size and shape of a motherboard, such as ATX and MicroATX.", answer: "What is a form factor?", points: 200 },
            { clue: "This is a common form factor for small-scale desktops and home theater PCs.", answer: "What is Mini-ITX?", points: 300 },
            { clue: "What two things must a motherboard match with a CPU for compatibility?", answer: "What is the socket type and the chipset?", points: 400 },
            { clue: "What are two benefits of a full-sized ATX motherboard?", answer: "What are more expansion slots and better cooling due to more space?", points: 500 }
        ],
        "The CPU": [
            { clue: "This component, often called the 'brain' of the computer, executes all instructions from software and hardware.", answer: "What is the Central Processing Unit, or CPU?", points: 100 },
            { clue: "A CPU’s socket and its chipset must match this other main component to ensure compatibility.", answer: "What is a motherboard?", points: 200 },
            { clue: "The speed of a processor is measured in this unit.", answer: "What is gigahertz?", points: 300 },
            { clue: "What is a common reason for CPU overheating?", answer: "What is an insufficient cooling solution, a build-up of dust, or dry thermal paste?", points: 400 },
            { clue: "What is one key difference between a high-end CPU and a low-end CPU?", answer: "What is core count, clock speed, or cache size?", points: 500 }
        ],
        "RAM & Memory": [
            { clue: "This type of temporary, volatile storage holds the data and instructions the CPU is currently using.", answer: "What is Random Access Memory, or RAM?", points: 100 },
            { clue: "This memory module, which is about half the length of a DIMM, is typically used in laptops and small form factor devices.", answer: "What is a SODIMM?", points: 200 },
            { clue: "What two things about a RAM module must be compatible with the motherboard?", answer: "What are the RAM type and the pin count?", points: 300 },
            { clue: "What is the primary function of RAM?", answer: "What is to serve as temporary, high-speed storage for a computer's active data?", points: 400 },
            { clue: "What is one of the key differences between DDR4 and DDR5 memory?", answer: "What is that DDR5 offers increased bandwidth and better power efficiency?", points: 500 }
        ],
        "Storage Solutions": [
            { clue: "This older type of storage uses a spinning disk and is more cost-effective for large capacities.", answer: "What is a Hard Disk Drive, or HDD?", points: 100 },
            { clue: "This storage device uses flash memory and has no moving parts.", answer: "What is a Solid-State Drive, or SSD?", points: 200 },
            { clue: "What is a key benefit of an SSD over an HDD?", answer: "What is a faster read/write speed?", points: 300 },
            { clue: "What is a key benefit of an HDD over an SSD?", answer: "What is a lower cost per terabyte?", points: 400 },
            { clue: "This type of storage device uses a PCIe interface for extremely high-speed data transfer.", answer: "What is an NVMe drive?", points: 500 }
        ],
        "Power & Cooling": [
            { clue: "This component converts AC power from a wall outlet to DC power for all the computer's components.", answer: "What is a Power Supply Unit, or PSU?", points: 100 },
            { clue: "This component is typically installed on the CPU to prevent it from overheating.", answer: "What is a heat sink and fan or an AIO liquid cooler?", points: 200 },
            { clue: "This thermal compound is applied between the CPU and its cooler to improve heat transfer.", answer: "What is thermal paste?", points: 300 },
            { clue: "When an air cooling system fails, what is the most likely result?", answer: "What is that the system will overheat and shut down?", points: 400 },
            { clue: "What is the primary function of a Power Supply Unit?", answer: "What is to provide stable power to a computer's components?", points: 500 }
        ],
        "Expansion & Peripherals": [
            { clue: "These slots on a motherboard are used to add functionality like a graphics card or a network card.", answer: "What are expansion slots?", points: 100 },
            { clue: "This is the most common type of expansion slot in modern motherboards.", answer: "What is a PCIe slot?", points: 200 },
            { clue: "This type of expansion card is necessary for a computer that does not have a processor with integrated graphics.", answer: "What is a graphics card?", points: 300 },
            { clue: "What are two things that a graphics card is responsible for?", answer: "What is processing images and providing a video output to a display?", points: 400 },
            { clue: "What is the most common use for a network expansion card?", answer: "What is adding a wired or wireless network connection to a desktop computer?", points: 500 }
        ]
    }
};

const finalJeopardyQuestion = {
    category: "Final Jeopardy: All About Technology",
    clue: "This person is the co-founder of Apple Inc.",
    answer: "Who is Steve Jobs?"
};
