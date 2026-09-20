# Scope, sources, and corrections

This deck contains 80 short, original English definitions and new terminology drills. Topic selection comes from the eight learner-supplied PDFs listed below. No course PDF, slide image, copied answer key, or proprietary training passage is bundled. This is an independent personal study aid, not an official course product.

## Supplied study guides

| Guide | Pages reviewed | Main coverage |
| --- | --- | --- |
| Intro+to+Networking+Study+Guide.pdf | 1–3 | LAN, Ethernet, interfaces, frames, and topology |
| OSI+Model+Study+Guide+and+Slides.pdf | 1–4 | OSI layers and introductory protocol names; slides visually inspected |
| Hubs+Bridges+and+Switches+Study+Guide.pdf | 1–2 | Devices, collision domains, broadcast domains, and unicast |
| Switch_MAC_Table_Study_Guide.pdf | 1–2 | Learning, forwarding, aging, and multiple addresses per port |
| BUM+Traffic+Study+Guide.pdf | 1–2 | Broadcast, unknown unicast, multicast, and ARP |
| Routers+Study+Guide.pdf | 1–2 | Routers, subnets, gateways, and routing tables |
| Layer4_TCP_UDP_Study_Guide.pdf | 1–2 | TCP, UDP, and transport terminology |
| PoE_Study_Guide.pdf | 1 | Power delivery, standards, and common powered devices |

The course screenshot identifies the requested scope as **Section 2: Basics of Layers 2, 3, and 4**. Introductory context from the supplied documents is included. Subnet arithmetic, VLAN configuration, WAN/VPN, security configuration, troubleshooting scenarios, and Wi-Fi configuration are outside this deck. Basic terms such as subnet and access point remain because the supplied Section 2 guides use them.

## Corrections and clarifications

- **HTTP:** the OSI guide's page 2 puts HTTP alongside transport functions. HTTP is an application-layer protocol. TCP and UDP are transport protocols. See [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html).
- **MAC and IP addresses:** MAC addresses are not necessarily permanent manufacturer-set values; software and privacy features can change them. IP addresses can be assigned automatically as well as manually. See [Apple's private Wi-Fi address documentation](https://support.apple.com/en-us/102509) and [DHCP, RFC 2131](https://www.rfc-editor.org/rfc/rfc2131.html). DHCP is used to verify this distinction, not added as a separate lesson.
- **Unknown unicast:** a missing destination in the switch's table normally causes flooding to eligible ports in the same broadcast domain, excluding the incoming port. The frame remains addressed to one recipient. See [Cisco's unicast-flooding explanation](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6000-series-switches/23563-143.html).
- **Multicast:** a switch does not always know the receiver group automatically. Multicast-aware features can limit flooding; their configuration is outside this deck. See [Cisco's multicast and IGMP-snooping documentation](https://www.cisco.com/c/en/us/support/docs/switches/catalyst-6500-series-switches/10559-22.html).
- **ARP:** the deck specifies IPv4 Ethernet and local address resolution. For another network, the relevant local MAC address is usually that of the next hop, such as the gateway. See [ARP, RFC 826](https://www.rfc-editor.org/rfc/rfc826.html).
- **TCP:** reliability mechanisms do not guarantee success if a connection fails permanently. Sequence numbers track positions in a byte stream; acknowledgments can cumulatively cover multiple segments. See [TCP, RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html).
- **UDP and checksums:** UDP itself supplies no retransmission or delivery acknowledgment, but applications may add them. Both TCP and UDP have checksum fields. See [UDP, RFC 768](https://www.rfc-editor.org/rfc/rfc768.html). A checksum is not a guarantee that a message arrives.
- **DNS:** the OSI slide's UDP association is an example, not an exclusive restriction. DNS can use TCP as well. See [DNS over TCP, RFC 7766](https://www.rfc-editor.org/rfc/rfc7766.html).
- **Ethernet and domains:** Wi-Fi and Ethernet are distinct technologies. A broadcast domain is not necessarily one physical switch; it may span several switches. Collision-domain terminology concerns shared or half-duplex Ethernet; full-duplex switched links avoid collisions.
- **PoE:** the deck uses standard names, without wattage promises. Power availability depends on the actual standard, device class, hardware, cabling, and budget. IEEE 802.3af, 802.3at, and 802.3bt correspond to different PoE capabilities.

Definitions intentionally simplify terminology for recall. Notes preserve distinctions that would otherwise become misleading. Primary-source checks were performed on September 20, 2026. No copied quotations from these primary references are used as flashcard definitions.

## Interface reference

The structure and navy visual direction were informed by [Ellen Nagasawa's Fast Portuguese Vocabulary](https://github.com/ellennagasawa/fast-portuguese-vocabulary). Its HTML, stylesheet, README, and live interface were inspected. This networking site has its own code, deck, storage key, and activities; it does not change the reference site.
