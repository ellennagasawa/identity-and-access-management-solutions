/* Original, concise study definitions. See SOURCES.md for scope and corrections. */
window.NETWORK_DECK = {
  "version": 1,
  "title": "Networking vocabulary",
  "scope": "Section 2: Basics of Layers 2, 3, and 4",
  "topics": [
    {
      "id": "foundations",
      "title": "LAN & Ethernet",
      "description": "Local networks, interfaces, and frames"
    },
    {
      "id": "osi",
      "title": "OSI model & layers",
      "description": "The seven-layer map and key protocol names"
    },
    {
      "id": "devices",
      "title": "Hubs, bridges & switches",
      "description": "Devices and the boundaries they create"
    },
    {
      "id": "mac",
      "title": "Switch MAC tables",
      "description": "Learning addresses and forwarding frames"
    },
    {
      "id": "bum",
      "title": "BUM traffic & ARP",
      "description": "One recipient, everyone, or a group"
    },
    {
      "id": "routing",
      "title": "Routers & networks",
      "description": "Basic IP, gateways, and routing vocabulary"
    },
    {
      "id": "transport",
      "title": "TCP & UDP",
      "description": "Transport terms and reliability features"
    },
    {
      "id": "poe",
      "title": "Power over Ethernet",
      "description": "Delivering data and power together"
    }
  ],
  "terms": [
    {
      "id": "net-001",
      "topic": "foundations",
      "term": "LAN",
      "expansion": "Local Area Network",
      "definition": "A network connecting devices within a limited area, such as a room, building, or campus.",
      "note": "A LAN can use wired connections, wireless connections, or both.",
      "aliases": [
        "local area network"
      ]
    },
    {
      "id": "net-002",
      "topic": "foundations",
      "term": "Ethernet",
      "expansion": "",
      "definition": "A family of wired networking technologies used to carry frames between devices on a local network.",
      "note": "Wi-Fi is a different networking technology; it is not wireless Ethernet.",
      "aliases": []
    },
    {
      "id": "net-003",
      "topic": "foundations",
      "term": "NIC",
      "expansion": "Network Interface Card",
      "definition": "The hardware interface that lets a device connect to a network.",
      "note": "A network adapter may be built into a device rather than a separate card.",
      "aliases": [
        "network interface card",
        "network adapter"
      ]
    },
    {
      "id": "net-004",
      "topic": "foundations",
      "term": "MAC address",
      "expansion": "Media Access Control address",
      "definition": "A link-layer address used to identify a network interface for local frame delivery.",
      "note": "MAC addresses can be configured or randomized; they are not always permanent.",
      "aliases": [
        "media access control address",
        "MAC"
      ]
    },
    {
      "id": "net-005",
      "topic": "foundations",
      "term": "Ethernet frame",
      "expansion": "",
      "definition": "A Layer 2 unit of data with source and destination MAC addresses, a payload, and other control information.",
      "note": "An IP packet can travel inside an Ethernet frame.",
      "aliases": [
        "frame"
      ]
    },
    {
      "id": "net-006",
      "topic": "foundations",
      "term": "Payload",
      "expansion": "",
      "definition": "The data carried inside a message, frame, or packet, apart from that unit's control information.",
      "note": "What counts as payload depends on the layer you are describing.",
      "aliases": []
    },
    {
      "id": "net-007",
      "topic": "foundations",
      "term": "Source MAC address",
      "expansion": "",
      "definition": "The MAC address identifying the interface that sent a frame onto the local link.",
      "note": "A switch learns from this address.",
      "aliases": [
        "source MAC"
      ]
    },
    {
      "id": "net-008",
      "topic": "foundations",
      "term": "Destination MAC address",
      "expansion": "",
      "definition": "The MAC address identifying the intended local recipient or recipient group of a frame.",
      "note": "A switch checks this address when deciding where to forward the frame.",
      "aliases": [
        "destination MAC"
      ]
    },
    {
      "id": "net-009",
      "topic": "foundations",
      "term": "Network topology",
      "expansion": "",
      "definition": "The arrangement of network devices and the links between them.",
      "note": "A topology describes how the network is laid out.",
      "aliases": [
        "topology"
      ]
    },
    {
      "id": "net-010",
      "topic": "foundations",
      "term": "Star topology",
      "expansion": "",
      "definition": "A network arrangement in which devices connect to a central device, such as a switch.",
      "note": "The central connection point does not have to be an Ethernet hub.",
      "aliases": [
        "star"
      ]
    },
    {
      "id": "net-011",
      "topic": "foundations",
      "term": "Ethernet cable",
      "expansion": "",
      "definition": "A cable carrying Ethernet signals between network interfaces.",
      "note": "The guides focus on copper cables such as Category 5 and Category 6.",
      "aliases": [
        "network cable"
      ]
    },
    {
      "id": "net-012",
      "topic": "foundations",
      "term": "AP",
      "expansion": "Access Point",
      "definition": "A device that connects wireless clients to a network.",
      "note": "Some access points receive electrical power through PoE.",
      "aliases": [
        "access point",
        "wireless access point"
      ]
    },
    {
      "id": "net-013",
      "topic": "osi",
      "term": "OSI model",
      "expansion": "Open Systems Interconnection model",
      "definition": "A seven-layer reference model used to organize the jobs involved in network communication.",
      "note": "It is a conceptual map, not a single networking protocol.",
      "aliases": [
        "OSI",
        "open systems interconnection",
        "open systems interconnection model"
      ]
    },
    {
      "id": "net-014",
      "topic": "osi",
      "term": "Physical layer",
      "expansion": "",
      "definition": "OSI Layer 1: carries raw bits as signals through a physical medium.",
      "note": "Think cables, connectors, radio signals, and electrical or optical signaling.",
      "aliases": [
        "layer 1",
        "physical"
      ]
    },
    {
      "id": "net-015",
      "topic": "osi",
      "term": "Data Link layer",
      "expansion": "",
      "definition": "OSI Layer 2: organizes local-link communication using frames and link-layer addresses.",
      "note": "Ethernet MAC addresses belong here.",
      "aliases": [
        "layer 2",
        "data link"
      ]
    },
    {
      "id": "net-016",
      "topic": "osi",
      "term": "Network layer",
      "expansion": "",
      "definition": "OSI Layer 3: provides logical addressing and packet routing between networks.",
      "note": "IP addresses and routers are key examples.",
      "aliases": [
        "layer 3",
        "network"
      ]
    },
    {
      "id": "net-017",
      "topic": "osi",
      "term": "Transport layer",
      "expansion": "",
      "definition": "OSI Layer 4: provides communication between application endpoints using protocols such as TCP and UDP.",
      "note": "Port numbers help distinguish those endpoints.",
      "aliases": [
        "layer 4",
        "transport"
      ]
    },
    {
      "id": "net-018",
      "topic": "osi",
      "term": "Session layer",
      "expansion": "",
      "definition": "OSI Layer 5: describes setting up, managing, and ending communication sessions.",
      "note": "In real TCP/IP software, these jobs may be handled by applications.",
      "aliases": [
        "layer 5",
        "session"
      ]
    },
    {
      "id": "net-019",
      "topic": "osi",
      "term": "Presentation layer",
      "expansion": "",
      "definition": "OSI Layer 6: describes how data is represented, translated, compressed, or encrypted for applications.",
      "note": "It concerns the form of the data.",
      "aliases": [
        "layer 6",
        "presentation"
      ]
    },
    {
      "id": "net-020",
      "topic": "osi",
      "term": "Application layer",
      "expansion": "",
      "definition": "OSI Layer 7: provides network services and protocols used by applications.",
      "note": "HTTP is an application-layer protocol.",
      "aliases": [
        "layer 7",
        "application"
      ]
    },
    {
      "id": "net-021",
      "topic": "osi",
      "term": "Bit",
      "expansion": "",
      "definition": "A binary digit, either 0 or 1, used to represent information.",
      "note": "The physical layer carries bit patterns as signals.",
      "aliases": [
        "binary digit"
      ]
    },
    {
      "id": "net-022",
      "topic": "osi",
      "term": "Protocol",
      "expansion": "",
      "definition": "An agreed set of rules and message formats that devices follow to communicate.",
      "note": "TCP, UDP, and HTTP are examples.",
      "aliases": []
    },
    {
      "id": "net-023",
      "topic": "osi",
      "term": "HTTP",
      "expansion": "Hypertext Transfer Protocol",
      "definition": "An application-layer protocol for exchanging requests and responses, including web content.",
      "note": "HTTP belongs at the application layer, not the transport layer.",
      "aliases": [
        "hypertext transfer protocol"
      ]
    },
    {
      "id": "net-024",
      "topic": "osi",
      "term": "TCP/IP",
      "expansion": "Transmission Control Protocol / Internet Protocol",
      "definition": "The name commonly used for the Internet protocol suite, including TCP, IP, and other protocols.",
      "note": "It is not another name for one OSI layer.",
      "aliases": [
        "TCP IP",
        "transmission control protocol internet protocol"
      ]
    },
    {
      "id": "net-025",
      "topic": "osi",
      "term": "Port number",
      "expansion": "",
      "definition": "A number TCP or UDP uses to identify an application endpoint on a device.",
      "note": "A transport port number is different from a physical switch port.",
      "aliases": [
        "transport port",
        "TCP UDP port number"
      ]
    },
    {
      "id": "net-026",
      "topic": "osi",
      "term": "FTP",
      "expansion": "File Transfer Protocol",
      "definition": "An application-layer protocol for transferring files between computers.",
      "note": "It is named in the OSI slide as an example associated with TCP, not as a Layer 4 protocol.",
      "aliases": [
        "file transfer protocol"
      ]
    },
    {
      "id": "net-027",
      "topic": "osi",
      "term": "DNS",
      "expansion": "Domain Name System",
      "definition": "A distributed system that answers queries about domain names, including queries for IP addresses.",
      "note": "DNS can use UDP or TCP; the slide's UDP example is not an exclusive rule.",
      "aliases": [
        "domain name system"
      ]
    },
    {
      "id": "net-028",
      "topic": "osi",
      "term": "NTP",
      "expansion": "Network Time Protocol",
      "definition": "An application-layer protocol for synchronizing clocks over a network.",
      "note": "It is commonly carried over UDP.",
      "aliases": [
        "network time protocol"
      ]
    },
    {
      "id": "net-029",
      "topic": "devices",
      "term": "Hub",
      "expansion": "",
      "definition": "A simple Layer 1 device that repeats an incoming signal to its other ports.",
      "note": "It does not use a MAC address table to choose a recipient.",
      "aliases": [
        "Ethernet hub"
      ]
    },
    {
      "id": "net-030",
      "topic": "devices",
      "term": "Bridge",
      "expansion": "",
      "definition": "A Layer 2 device that connects network segments and selectively forwards frames using MAC addresses.",
      "note": "An Ethernet switch is a multiport bridge.",
      "aliases": [
        "layer 2 bridge"
      ]
    },
    {
      "id": "net-031",
      "topic": "devices",
      "term": "Switch",
      "expansion": "",
      "definition": "A device that connects local network links and usually forwards frames using a MAC address table.",
      "note": "This deck refers to Layer 2 Ethernet switches; some switches also route.",
      "aliases": [
        "Ethernet switch",
        "layer 2 switch"
      ]
    },
    {
      "id": "net-032",
      "topic": "devices",
      "term": "Collision domain",
      "expansion": "",
      "definition": "A shared Ethernet transmission area where simultaneous transmissions can interfere with one another.",
      "note": "A hub shares one collision domain; full-duplex switched links avoid collisions.",
      "aliases": []
    },
    {
      "id": "net-033",
      "topic": "devices",
      "term": "Broadcast domain",
      "expansion": "",
      "definition": "The set of interfaces that can receive a Layer 2 broadcast sent within the same network segment.",
      "note": "It may span several switches; routers separate Layer 2 broadcast domains.",
      "aliases": []
    },
    {
      "id": "net-034",
      "topic": "devices",
      "term": "Unicast",
      "expansion": "",
      "definition": "Traffic addressed to one recipient.",
      "note": "It describes the destination, not whether a switch already knows the correct port.",
      "aliases": []
    },
    {
      "id": "net-035",
      "topic": "mac",
      "term": "MAC address table",
      "expansion": "",
      "definition": "A switch's record of learned MAC addresses and the ports used to reach them.",
      "note": "This is MAC-to-port information, unlike an ARP table's IP-to-MAC information.",
      "aliases": [
        "MAC table",
        "forwarding database"
      ]
    },
    {
      "id": "net-036",
      "topic": "mac",
      "term": "MAC learning",
      "expansion": "",
      "definition": "The process of recording a received frame's source MAC address against its incoming switch port.",
      "note": "The source address teaches the switch where a sender is reachable.",
      "aliases": [
        "source MAC learning"
      ]
    },
    {
      "id": "net-037",
      "topic": "mac",
      "term": "Frame forwarding",
      "expansion": "",
      "definition": "Sending a received frame toward its destination according to the switch's forwarding information.",
      "note": "A known unicast destination usually uses one appropriate outgoing port.",
      "aliases": [
        "forwarding"
      ]
    },
    {
      "id": "net-038",
      "topic": "mac",
      "term": "MAC table aging",
      "expansion": "",
      "definition": "Removing a dynamically learned MAC table entry after it has not been refreshed for a period of time.",
      "note": "The switch can learn the address again from later traffic.",
      "aliases": [
        "aging",
        "aging out"
      ]
    },
    {
      "id": "net-039",
      "topic": "mac",
      "term": "Multiple MAC addresses per port",
      "expansion": "",
      "definition": "A switch-table situation in which several device addresses are reachable through the same port.",
      "note": "This can happen when that port leads to another switch or a hub.",
      "aliases": []
    },
    {
      "id": "net-040",
      "topic": "bum",
      "term": "BUM traffic",
      "expansion": "Broadcast, Unknown Unicast, and Multicast traffic",
      "definition": "A collective name for three traffic categories that may need delivery through multiple switch ports.",
      "note": "Unknown unicast remains unicast even when a switch floods it.",
      "aliases": [
        "BUM",
        "broadcast unknown unicast multicast"
      ]
    },
    {
      "id": "net-041",
      "topic": "bum",
      "term": "Broadcast",
      "expansion": "",
      "definition": "Traffic addressed to every device in the local broadcast domain.",
      "note": "Ordinary routers do not forward the original Layer 2 broadcast to another segment.",
      "aliases": []
    },
    {
      "id": "net-042",
      "topic": "bum",
      "term": "Unknown unicast",
      "expansion": "",
      "definition": "A frame addressed to one recipient whose destination MAC address is missing from the switch's table.",
      "note": "It is usually flooded within the broadcast domain, not converted into a broadcast.",
      "aliases": [
        "unknown unicast traffic"
      ]
    },
    {
      "id": "net-043",
      "topic": "bum",
      "term": "Multicast",
      "expansion": "",
      "definition": "Traffic addressed to a group of interested recipients.",
      "note": "A switch may flood it unless multicast-aware forwarding limits the outgoing ports.",
      "aliases": [
        "multicast traffic"
      ]
    },
    {
      "id": "net-044",
      "topic": "bum",
      "term": "Flooding",
      "expansion": "",
      "definition": "Sending copies of a frame through eligible ports in the same broadcast domain, except its incoming port.",
      "note": "Broadcast and unknown-unicast traffic commonly use this behavior.",
      "aliases": []
    },
    {
      "id": "net-045",
      "topic": "bum",
      "term": "ARP",
      "expansion": "Address Resolution Protocol",
      "definition": "A protocol used on IPv4 Ethernet networks to find the MAC address associated with a local IPv4 address.",
      "note": "For a remote destination, a host normally resolves the local next hop, such as its gateway.",
      "aliases": [
        "address resolution protocol"
      ]
    },
    {
      "id": "net-046",
      "topic": "bum",
      "term": "ARP request",
      "expansion": "",
      "definition": "A message asking which local device has a particular IPv4 address.",
      "note": "On Ethernet, a normal ARP request uses a broadcast destination.",
      "aliases": []
    },
    {
      "id": "net-047",
      "topic": "bum",
      "term": "ARP table",
      "expansion": "",
      "definition": "A device's cache of IPv4 addresses and their associated local MAC addresses.",
      "note": "It maps IP to MAC; a switch MAC table maps MAC to port.",
      "aliases": [
        "ARP cache"
      ]
    },
    {
      "id": "net-048",
      "topic": "routing",
      "term": "Router",
      "expansion": "",
      "definition": "A Layer 3 device that forwards packets between IP networks.",
      "note": "Its interfaces separate Layer 2 broadcast domains.",
      "aliases": []
    },
    {
      "id": "net-049",
      "topic": "routing",
      "term": "IP address",
      "expansion": "Internet Protocol address",
      "definition": "A logical address assigned to a network interface so IP packets can be addressed and routed.",
      "note": "An address can be assigned manually or automatically; it is not the interface's MAC address.",
      "aliases": [
        "IP",
        "internet protocol address"
      ]
    },
    {
      "id": "net-050",
      "topic": "routing",
      "term": "Subnet",
      "expansion": "",
      "definition": "A logical part of an IP network whose addresses share a network prefix.",
      "note": "This deck covers the term only, not subnet calculations.",
      "aliases": [
        "subnetwork"
      ]
    },
    {
      "id": "net-051",
      "topic": "routing",
      "term": "Default gateway",
      "expansion": "",
      "definition": "The local router a device uses when it has no more specific route to a destination.",
      "note": "It is commonly used to reach other networks.",
      "aliases": [
        "gateway"
      ]
    },
    {
      "id": "net-052",
      "topic": "routing",
      "term": "Routing",
      "expansion": "",
      "definition": "Choosing a path and forwarding packets between networks using Layer 3 information.",
      "note": "Routing uses IP destinations; local Ethernet forwarding uses MAC destinations.",
      "aliases": []
    },
    {
      "id": "net-053",
      "topic": "routing",
      "term": "Routing table",
      "expansion": "",
      "definition": "A set of routes a device consults to choose where to send an IP packet.",
      "note": "Entries can describe directly connected networks or paths through other routers.",
      "aliases": [
        "route table"
      ]
    },
    {
      "id": "net-054",
      "topic": "routing",
      "term": "Directly connected route",
      "expansion": "",
      "definition": "A routing-table entry for a network attached to one of the router's active, configured interfaces.",
      "note": "It does not require another router as the next hop.",
      "aliases": [
        "connected route"
      ]
    },
    {
      "id": "net-055",
      "topic": "routing",
      "term": "Packet",
      "expansion": "",
      "definition": "A Layer 3 unit of data containing network addressing information and a payload.",
      "note": "An IP packet can be carried inside a Layer 2 frame.",
      "aliases": [
        "IP packet"
      ]
    },
    {
      "id": "net-056",
      "topic": "transport",
      "term": "TCP",
      "expansion": "Transmission Control Protocol",
      "definition": "A transport protocol that provides applications with an ordered byte stream and mechanisms to recover lost data.",
      "note": "A connection can still fail; TCP does not promise delivery under every condition.",
      "aliases": [
        "transmission control protocol"
      ]
    },
    {
      "id": "net-057",
      "topic": "transport",
      "term": "UDP",
      "expansion": "User Datagram Protocol",
      "definition": "A transport protocol that sends separate datagrams without built-in delivery confirmation or retransmission.",
      "note": "Applications using UDP can add their own reliability mechanisms.",
      "aliases": [
        "user datagram protocol"
      ]
    },
    {
      "id": "net-058",
      "topic": "transport",
      "term": "TCP segment",
      "expansion": "",
      "definition": "A unit transmitted by TCP, containing a TCP header and possibly application data.",
      "note": "Segment is the usual name for a TCP transport unit.",
      "aliases": [
        "segment"
      ]
    },
    {
      "id": "net-059",
      "topic": "transport",
      "term": "UDP datagram",
      "expansion": "",
      "definition": "A separate message carried by UDP, with a UDP header and its data.",
      "note": "Datagram is the term used for the UDP transport unit in this deck.",
      "aliases": [
        "datagram"
      ]
    },
    {
      "id": "net-060",
      "topic": "transport",
      "term": "Connection-oriented",
      "expansion": "",
      "definition": "Describing communication that establishes and maintains connection state between endpoints.",
      "note": "TCP is a connection-oriented protocol.",
      "aliases": [
        "connection oriented"
      ]
    },
    {
      "id": "net-061",
      "topic": "transport",
      "term": "Connectionless",
      "expansion": "",
      "definition": "Describing communication that can send messages without first establishing a protocol connection.",
      "note": "UDP is connectionless.",
      "aliases": [
        "connection less"
      ]
    },
    {
      "id": "net-062",
      "topic": "transport",
      "term": "Handshake",
      "expansion": "",
      "definition": "An exchange of control messages used to establish communication parameters or a connection.",
      "note": "TCP normally establishes a connection with a three-way handshake.",
      "aliases": []
    },
    {
      "id": "net-063",
      "topic": "transport",
      "term": "TCP sequence number",
      "expansion": "",
      "definition": "A number identifying a position in the byte stream, used to order data and track what has been received.",
      "note": "TCP numbers bytes, rather than simply numbering each segment 1, 2, 3.",
      "aliases": [
        "sequence number"
      ]
    },
    {
      "id": "net-064",
      "topic": "transport",
      "term": "ACK",
      "expansion": "Acknowledgment",
      "definition": "A TCP indication confirming received data; its acknowledgment number normally identifies the next byte expected.",
      "note": "TCP acknowledgments can cover several segments; they need not be one per segment.",
      "aliases": [
        "acknowledgment",
        "acknowledgement"
      ]
    },
    {
      "id": "net-065",
      "topic": "transport",
      "term": "Checksum",
      "expansion": "",
      "definition": "A calculated value used to help detect accidental corruption in transmitted data.",
      "note": "TCP and UDP both have checksum fields; a checksum alone does not ensure delivery.",
      "aliases": []
    },
    {
      "id": "net-066",
      "topic": "transport",
      "term": "Retransmission",
      "expansion": "",
      "definition": "Sending data again because the sender believes it was lost or not successfully received.",
      "note": "TCP uses retransmission as part of its reliability mechanisms.",
      "aliases": [
        "retransmit"
      ]
    },
    {
      "id": "net-067",
      "topic": "transport",
      "term": "Reliable delivery",
      "expansion": "",
      "definition": "Delivery behavior that detects loss and uses mechanisms such as acknowledgments and retries to recover data.",
      "note": "TCP provides reliability mechanisms; a permanent connection failure can still stop delivery.",
      "aliases": [
        "reliability"
      ]
    },
    {
      "id": "net-068",
      "topic": "transport",
      "term": "Latency",
      "expansion": "",
      "definition": "The delay involved in data traveling or a response arriving.",
      "note": "Low latency matters for time-sensitive voice and video.",
      "aliases": [
        "delay"
      ]
    },
    {
      "id": "net-069",
      "topic": "transport",
      "term": "Protocol overhead",
      "expansion": "",
      "definition": "The extra headers, control messages, and processing used to support communication beyond the application data itself.",
      "note": "TCP generally has more transport overhead than UDP.",
      "aliases": [
        "overhead"
      ]
    },
    {
      "id": "net-070",
      "topic": "transport",
      "term": "VoIP",
      "expansion": "Voice over Internet Protocol",
      "definition": "Voice communication carried as data over IP networks.",
      "note": "Voice applications often value low delay and commonly use UDP for media.",
      "aliases": [
        "voice over IP",
        "voice over internet protocol"
      ]
    },
    {
      "id": "net-071",
      "topic": "poe",
      "term": "PoE",
      "expansion": "Power over Ethernet",
      "definition": "Technology that carries electrical power and network data over the same compatible Ethernet cable.",
      "note": "It requires suitable power-supplying equipment and a compatible receiving device.",
      "aliases": [
        "power over ethernet"
      ]
    },
    {
      "id": "net-072",
      "topic": "poe",
      "term": "PoE+",
      "expansion": "Power over Ethernet Plus",
      "definition": "A higher-power form of PoE associated with the IEEE 802.3at standard.",
      "note": "It provides more power than the original 802.3af form of PoE.",
      "aliases": [
        "PoE plus",
        "802.3at"
      ]
    },
    {
      "id": "net-073",
      "topic": "poe",
      "term": "PoE++",
      "expansion": "",
      "definition": "A common label for higher-power PoE variants associated with IEEE 802.3bt.",
      "note": "PoE means Power over Ethernet; check the actual type and equipment power rating.",
      "aliases": [
        "PoE plus plus",
        "802.3bt"
      ]
    },
    {
      "id": "net-074",
      "topic": "poe",
      "term": "PoE injector",
      "expansion": "",
      "definition": "A device that adds electrical power to an Ethernet connection leading to a compatible powered device.",
      "note": "It can supply power when the upstream switch does not provide PoE.",
      "aliases": [
        "power injector"
      ]
    },
    {
      "id": "net-075",
      "topic": "poe",
      "term": "PoE switch",
      "expansion": "",
      "definition": "An Ethernet switch that can supply electrical power through compatible network ports.",
      "note": "It combines switching and power delivery.",
      "aliases": [
        "PoE-capable switch"
      ]
    },
    {
      "id": "net-076",
      "topic": "poe",
      "term": "Power classification",
      "expansion": "",
      "definition": "A PoE process that identifies a powered device's power requirements so a suitable budget can be allocated.",
      "note": "Available power depends on the equipment, standard, and overall power budget.",
      "aliases": []
    },
    {
      "id": "net-077",
      "topic": "poe",
      "term": "Twisted pair",
      "expansion": "",
      "definition": "Two insulated wires twisted together, as used in common copper Ethernet cables.",
      "note": "Typical four-pair Ethernet cabling can carry data and, with PoE, power.",
      "aliases": [
        "twisted wire pair"
      ]
    },
    {
      "id": "net-078",
      "topic": "poe",
      "term": "IP phone",
      "expansion": "Internet Protocol phone",
      "definition": "A telephone that sends voice over an IP network rather than a traditional telephone connection.",
      "note": "Many IP phones can be powered by PoE.",
      "aliases": [
        "VoIP phone",
        "internet protocol phone"
      ]
    },
    {
      "id": "net-079",
      "topic": "poe",
      "term": "IoT",
      "expansion": "Internet of Things",
      "definition": "Network-connected physical devices, such as sensors and controllers, that exchange data.",
      "note": "Some IoT devices can use PoE.",
      "aliases": [
        "internet of things"
      ]
    },
    {
      "id": "net-080",
      "topic": "poe",
      "term": "IEEE",
      "expansion": "Institute of Electrical and Electronics Engineers",
      "definition": "A professional organization whose standards work includes Ethernet and PoE standards.",
      "note": "The PoE guide names IEEE 802.3af, 802.3at, and 802.3bt.",
      "aliases": [
        "institute of electrical and electronics engineers"
      ]
    }
  ]
};
