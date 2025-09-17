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
