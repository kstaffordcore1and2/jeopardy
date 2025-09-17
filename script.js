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
            { clue: "This term, abbreviated as PCIe, describes the expansion slots on a motherboard used for adding things like video and network cards.", answer: "What is Peripheral Component Interconnect eXtended?", points: 400 },
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
            { clue: "This smaller physical chip, abbreviated as SODIMM, is a type of RAM specifically designed for laptops.", answer: "What is a SODIMM or Small Outline DIMM?", points: 200 },
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
            { clue: "What does RAM stand for?", answer: "What is Random Access Memory?", points: 100 },
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
            { clue: "This Wi-Fi frequency band offers the longest range but is more prone to interference.", answer: "What is 2.4 GHz?", points: 100 },
            { clue: "LTE stands for this and is considered a standard within 4G.", answer: "What is Long-Term Evolution?", points: 200 },
            { clue: "Wi-Fi 6E introduced this new frequency band to improve speed and reduce congestion.", answer: "What is the 6 GHz band?", points: 300 },
            { clue: "This upcoming cellular standard is an upgrade to 5G and focuses on efficiency and expanded functionality.", answer: "What is 5G-Advanced?", points: 400 },
            { clue: "Wi-Fi 7 is expected to reach speeds comparable to this wired networking technology.", answer: "What is Ethernet?", points: 500 }
        ],
        "Location Services": [
            { clue: "This U.S. government satellite system is the most common source of mobile location tracking.", answer: "What is GPS (Global Positioning System)?", points: 100 },
            { clue: "This location method uses nearby Wi-Fi access points and their public IP addresses.", answer: "What is Wi-Fi Positioning System (WPS)?", points: 200 },
            { clue: "Cellular triangulation requires signals from this many towers to determine position.", answer: "What is three towers?", points: 300 },
            { clue: "This term refers to setting a digital perimeter on a map and receiving alerts when crossed.", answer: "What is geofencing?", points: 400 },
            { clue: "One major privacy risk of location services is that apps may collect this for analytics or targeted ads.", answer: "What is location history?", points: 500 }
        ],
        "MDM & BYOD": [
            { clue: "This acronym refers to the system organizations use to remotely manage and secure mobile devices.", answer: "What is Mobile Device Management?", points: 100 },
            { clue: "In MDM, the first step where a device is registered and assigned to a user is called this.", answer: "What is enrollment?", points: 200 },
            { clue: "BYOD stands for this policy, which allows employees to use personal devices for work.", answer: "What is Bring Your Own Device?", points: 300 },
            { clue: "One major advantage of BYOD is cost savings; one major disadvantage is increased risk of this.", answer: "What is security risk (or data leakage/unauthorized access)?", points: 400 },
            { clue: "In MDM, administrators can remotely perform this action to erase all data if a device is lost or stolen.", answer: "What is a remote wipe?", points: 500 }
        ],
        "Sync & Optimization": [
            { clue: "Google Drive, iCloud, and OneDrive are examples of this type of synchronization.", answer: "What is cloud synchronization?", points: 100 },
            { clue: "This type of synchronization can occur when devices are on the same Wi-Fi network or connected via USB.", answer: "What is local synchronization?", points: 200 },
            { clue: "Restarting your phone periodically helps clear these, which can slow performance over time.", answer: "What are memory leaks?", points: 300 },
            { clue: "Installing lighter versions of apps is one way to save these two system resources.", answer: "What are storage and memory?", points: 400 },
            { clue: "When a device is overwhelmed by too many apps or settings, the most drastic optimization step is performing this.", answer: "What is a factory reset?", points: 500 }
        ],
        "Backups & Resets": [
            { clue: "A factory reset returns a device to this initial configuration state.", answer: "What is out-of-box state?", points: 100 },
            { clue: "iTunes can be used to perform this type of backup for iPhones.", answer: "What is a computer-based backup?", points: 200 },
            { clue: "Having more than one backup in more than one location is called this.", answer: "What is redundancy (redundant backups)?", points: 300 },
            { clue: "Backups should never be stored on this same physical device as the primary data.", answer: "What is the internal drive (or same physical drive)?", points: 400 },
            { clue: "After a factory reset, you must reapply these to keep the device secure and up to date.", answer: "What are updates and security settings?", points: 500 }
        ],
        "Security & Threats": [
            { clue: "This type of attack tries to trick users into giving up credentials through fake emails or websites.", answer: "What is phishing?", points: 100 },
            { clue: "Connecting to this type of Wi-Fi network can expose your data since it lacks encryption.", answer: "What is an open/unsecured Wi-Fi network?", points: 200 },
            { clue: "On mobile devices, enabling this adds an extra layer of authentication beyond a PIN or password.", answer: "What is multi-factor authentication?", points: 300 },
            { clue: "Apple’s App Store security reduces the need for antivirus apps on iPhones by blocking this.", answer: "What is unapproved software/app installations?", points: 400 },
            { clue: "This type of future encryption leverages the laws of physics and makes eavesdropping theoretically impossible.", answer: "What is quantum encryption?", points: 500 }
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
